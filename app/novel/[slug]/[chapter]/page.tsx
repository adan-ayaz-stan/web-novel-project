// app/novel/[slug]/[chapter]/page.tsx

import { getChapterContentAction } from "@/actions/get-chapter-content";
import { ChapterView } from "@/components/chapter-view";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

// Generates dynamic metadata for the page <head> based on the new route
export async function generateMetadata({
  params,
}: {
  params: { slug: string; chapter: string };
}): Promise<Metadata> {
  try {
    // Reconstruct the full path that the scraper expects
    const pageRoute = `/${params.slug}/${params.chapter}`;
    const chapter = await getChapterContentAction({ pageRoute });

    return {
      title: chapter.title,
    };
  } catch (error) {
    return {
      title: "Chapter Not Found",
    };
  }
}

// The main page component
export default async function ChapterPage({
  params,
}: {
  params: { slug: string; chapter: string };
}) {
  // Reconstruct the full path from the slug and chapter params
  const pageRoute = `/${params.slug}/${params.chapter}`;

  try {
    const chapterDetails = await getChapterContentAction({ pageRoute });

    // Pass the server-fetched data to the client component for rendering
    return <ChapterView details={chapterDetails} />;
  } catch (error) {
    // If the server action throws an error (e.g., 404), render the not-found page.
    notFound();
  }
}
