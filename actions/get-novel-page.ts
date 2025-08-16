// app/actions/get-novel-details.ts
"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";

// 1. Define a strict schema for the input to ensure data integrity.
const NovelLinkSchema = z.object({
  link: z.string().startsWith("/", {
    message: "Invalid link format. Must be a relative path.",
  }),
});

// 2. Define the shape of the data we expect to return. This provides type safety for the client.
export interface NovelMetadata {
  heading: string;
  text: string;
}

export interface NovelDetails {
  title: string | null;
  novelId: string | null;
  imageUrl: string | null;
  metadata: NovelMetadata[];
  description: string[];
  latestChapter: string | null;
}

/**
 * A robust server action to scrape detailed information for a single novel.
 * @param input An object containing the relative link to the novel page.
 * @returns A promise that resolves to an object with the novel's details.
 * @throws An error if the input is invalid, the network request fails, or scraping fails.
 */
export async function getNovelDetailsAction(input: {
  link: string;
}): Promise<NovelDetails> {
  // 3. Validate the input against the schema. Throws an error if validation fails.
  const validation = NovelLinkSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.flatten().fieldErrors.link?.join(", "));
  }

  const url = `https://readnovelfull.com${validation.data.link}.html`;

  try {
    // 4. Use async/await for cleaner asynchronous logic.
    const { data: html } = await axios.get<string>(url);
    const $ = cheerio.load(html);

    // 5. Scrape data with more resilient selectors and clean it immediately.
    const imageElement = $(".book img");
    const title = imageElement.attr("alt")?.trim() || null;
    const imageUrl = imageElement.attr("src") || null;
    const novelId = $("#rating").attr("data-novel-id") || null;

    // Use .map().get() for a more concise and functional way to build arrays.
    const description = $(".desc-text p")
      .map((_, element) => $(element).text().trim())
      .get()
      // Filter out any empty paragraphs that might be scraped.
      .filter((text) => text.length > 0);

    const metadata: NovelMetadata[] = $(".info-meta li")
      .map((_, element) => {
        const el = $(element);
        const heading = el.find("h3").text().trim();
        // Clones the element, removes the h3, then gets the remaining text.
        // This is more robust than string replacement.
        const text = el.clone().find("h3").remove().end().text().trim();

        return { heading, text };
      })
      .get();

    const latestChapter = $(".item .item-value").first().text().trim() || null;

    // 6. Construct and return the typed result object.
    return {
      title,
      novelId,
      imageUrl,
      metadata,
      description,
      latestChapter,
    };
  } catch (error) {
    // 7. Provide detailed server-side logs but throw a generic, user-friendly error to the client.
    console.error(`Scraping failed for URL: ${url}`, error);

    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("The requested novel could not be found.");
    }

    throw new Error(
      "Failed to retrieve novel details. The external source may be unavailable."
    );
  }
}
