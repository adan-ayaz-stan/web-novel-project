// app/actions/get-chapter-content.ts
"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";

// 1. Define a strict schema for the input to ensure a valid page route is provided.
const PageRouteSchema = z.object({
  pageRoute: z
    .string()
    .startsWith("/", { message: "Invalid route. Must be a relative path." }),
});

// 2. Define the shapes of the data we expect to return for clarity and type safety.
export interface ChapterNavigationLink {
  title: string;
  link: string; // The clean, relative path
}

export interface ChapterDetails {
  title: string;
  content: string[];
  prevChapter: ChapterNavigationLink | null;
  nextChapter: ChapterNavigationLink | null;
}

/**
 * A robust server action to scrape the content and navigation links for a single chapter.
 * @param input An object containing the relative pageRoute for the chapter.
 * @returns A promise that resolves to an object with the chapter's details.
 * @throws An error if the input is invalid, the network request fails, or scraping fails.
 */
export async function getChapterContentAction(input: {
  pageRoute: string;
}): Promise<ChapterDetails> {
  // 3. Validate the input against the schema. Throws a clear error if validation fails.
  const validation = PageRouteSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(
      validation.error.flatten().fieldErrors.pageRoute?.join(", ")
    );
  }

  const { pageRoute } = validation.data;
  const url = `https://readnovelfull.com${pageRoute}`;

  try {
    // 4. Use modern async/await for cleaner asynchronous logic.
    const { data: html } = await axios.get<string>(url);
    const $ = cheerio.load(html);

    // 5. Scrape the chapter text using efficient selectors and methods.
    const content = $(".chr-c p")
      .map((_, element) => $(element).text().trim())
      .get()
      // Filter out any empty paragraphs that might be included in the scrape.
      .filter((text) => text.length > 0);

    const chapterSlug = pageRoute
      .split("/")[2]
      .split("-")
      .map((ele, i) => (i < 2 ? ele : null))
      .join(" ");
    const title = chapterSlug.toUpperCase();

    // 6. Create a reusable helper function to cleanly process navigation links.
    const getNavLink = (selector: string): ChapterNavigationLink | null => {
      const element = $(selector);
      const link = "/novel" + element.attr("href")?.trim();
      const title = element.attr("title")?.trim();

      // If the link or title is missing, or the link is just a placeholder, return null.
      if (!link || !title || link === "#") {
        return null;
      }

      // Ensure the link is a relative path.
      const relativePath = link.startsWith("http")
        ? new URL(link).pathname
        : link;

      return { title, link: relativePath };
    };

    const prevChapter = getNavLink("#prev_chap");
    const nextChapter = getNavLink("#next_chap");

    // 7. Return the fully typed and cleaned data object.
    return {
      title,
      content,
      prevChapter,
      nextChapter,
    };
  } catch (error) {
    // 8. Provide detailed server-side logs but throw a generic, user-friendly error to the client.
    console.error(
      `Failed to fetch chapter content for route: ${pageRoute}`,
      error
    );

    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error("The requested chapter could not be found.");
    }

    throw new Error(
      "Failed to retrieve chapter content. The external source may be unavailable."
    );
  }
}
