// app/actions.ts
"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";
import { addSearchedNovel } from "./trending-novels";

export interface LinkData {
  title: string;
  link: string;
}

const KeywordSchema = z.object({
  keyword: z.string().min(3, "Keyword must be at least 3 characters."),
});

export async function searchNovelsAction(input: {
  keyword: string;
}): Promise<LinkData[]> {
  const validation = KeywordSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.flatten().fieldErrors.keyword?.join(", "));
  }

  const { keyword } = validation.data;
  const url = `https://readnovelfull.com/ajax/search-novel?keyword=${keyword}`;

  try {
    const response = await axios.get<string>(url);
    const $ = cheerio.load(response.data);
    const links: LinkData[] = [];

    $("a").each((_, element) => {
      const title = $(element).attr("title");
      const href = $(element).attr("href");

      if (title && href) {
        // *** REVISED LOGIC HERE ***
        // Check if the href is a full URL or a relative path
        const relativePath = href.startsWith("http")
          ? new URL(href).pathname // If it's a full URL, parse it
          : href; // If it's already relative, use it directly

        const novelLink = "/novel" + relativePath.replace(".html", "");

        links.push({
          title,
          link: novelLink,
        });

        // Add each searched novel to the database
        if (title.toLowerCase() != "see more results") {
          addSearchedNovel({
            title,
            link: novelLink,
          }).catch((err) => {
            console.error("Failed to add novel to database:", err);
            // Don't fail the search if database operation fails
          });
        }
      }
    });

    return links;
  } catch (err) {
    console.error("Scraping failed:", err);
    throw new Error("Failed to fetch novels. The external source may be down.");
  }
}
