// app/actions/get-novel-chapters.ts
"use server";

import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";

// 1. Define a strict schema for the input to ensure a valid novel ID is provided.
const NovelIdSchema = z.object({
  novelId: z.string().min(1, { message: "Novel ID cannot be empty." }),
});

// 2. Define the shape of the data for a single chapter link.
export interface ChapterLink {
  title: string;
  link: string; // This will be the clean, relative path
}

/**
 * A robust server action to scrape the list of chapters for a given novel ID.
 * @param input An object containing the novelId.
 * @returns A promise that resolves to an array of chapter links.
 * @throws An error if the input is invalid, the network request fails, or scraping fails.
 */
export async function getNovelChaptersAction(input: {
  novelId: string;
}): Promise<ChapterLink[]> {
  // 3. Validate the input against the schema. Throws a clear error if validation fails.
  const validation = NovelIdSchema.safeParse(input);
  if (!validation.success) {
    throw new Error(validation.error.flatten().fieldErrors.novelId?.join(", "));
  }

  const { novelId } = validation.data;
  const url = `https://readnovelfull.com/ajax/chapter-archive?novelId=${novelId}`;

  try {
    // 4. Use modern async/await for cleaner, more readable asynchronous code.
    const { data: html } = await axios.get<string>(url);
    const $ = cheerio.load(html);

    // 5. Use .map().get() for a more concise and functional way to build the chapters array.
    const chapters = $("a")
      .map((_, element) => {
        const el = $(element);
        const title = el.attr("title")?.trim();
        const href = "/novel" + el.attr("href")?.trim();

        // Ensure both title and href exist before processing.
        if (!title || !href) {
          return null;
        }

        // Handle both full URLs and relative paths gracefully.
        const relativePath = href.startsWith("http")
          ? new URL(href).pathname
          : href;

        return { title, link: relativePath };
      })
      .get()
      // Filter out any null entries that may have occurred from invalid links.
      .filter((chapter): chapter is ChapterLink => chapter !== null);

    return chapters;
  } catch (error) {
    // 6. Provide detailed server-side logs for debugging but throw a generic,
    //    user-friendly error to the client.
    console.error(`Failed to fetch chapters for novelId: ${novelId}`, error);

    if (axios.isAxiosError(error)) {
      throw new Error(
        "Failed to retrieve chapters. The external source may be unavailable or the novel ID is incorrect."
      );
    }

    throw new Error("An unexpected error occurred while fetching chapters.");
  }
}
