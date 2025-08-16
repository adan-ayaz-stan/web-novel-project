"use server";

import { db } from "@/lib/db";
import { searchedNovels } from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export async function addSearchedNovel(novel: {
  title: string;
  link: string;
  description?: string;
  image?: string;
  rating?: string;
  status?: string;
}) {
  try {
    // Check if novel already exists
    const existing = await db
      .select()
      .from(searchedNovels)
      .where(eq(searchedNovels.link, novel.link))
      .limit(1);

    if (existing.length > 0) {
      // Update search count and last searched time
      await db
        .update(searchedNovels)
        .set({
          searchCount: sql`${searchedNovels.searchCount} + 1`,
          lastSearched: sql`(datetime('now'))`,
          // Update other fields if provided
          ...(novel.description && { description: novel.description }),
          ...(novel.image && { image: novel.image }),
          ...(novel.rating && { rating: novel.rating }),
          ...(novel.status && { status: novel.status }),
        })
        .where(eq(searchedNovels.link, novel.link));

      return existing[0];
    } else {
      // Insert new novel
      const result = await db
        .insert(searchedNovels)
        .values({
          title: novel.title,
          link: novel.link,
          description: novel.description,
          image: novel.image,
          rating: novel.rating,
          status: novel.status,
        })
        .returning();

      return result[0];
    }
  } catch (error) {
    console.error("Error adding searched novel:", error);
    throw new Error("Failed to add novel to database");
  }
}

export async function getTrendingNovels(limit: number = 10) {
  try {
    const novels = await db
      .select()
      .from(searchedNovels)
      .orderBy(
        sql`${searchedNovels.searchCount} DESC, ${searchedNovels.lastSearched} DESC`
      )
      .limit(limit);

    return novels;
  } catch (error) {
    console.error("Error fetching trending novels:", error);
    throw new Error("Failed to fetch trending novels");
  }
}

export async function getRecentlySearchedNovels(limit: number = 10) {
  try {
    const novels = await db
      .select()
      .from(searchedNovels)
      .orderBy(sql`${searchedNovels.lastSearched} DESC`)
      .limit(limit);

    return novels;
  } catch (error) {
    console.error("Error fetching recent novels:", error);
    throw new Error("Failed to fetch recent novels");
  }
}
