import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const searchedNovels = sqliteTable("searched_novels", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  link: text("link").notNull().unique(),
  searchCount: integer("search_count").notNull().default(1),
  lastSearched: text("last_searched")
    .notNull()
    .default(sql`(datetime('now'))`),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(datetime('now'))`),
  description: text("description"), // Optional description
  image: text("image"), // Optional image URL
  rating: text("rating"), // Optional rating
  status: text("status"), // Optional status (completed, ongoing, etc.)
});

export type SearchedNovel = typeof searchedNovels.$inferSelect;
export type NewSearchedNovel = typeof searchedNovels.$inferInsert;
