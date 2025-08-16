// app/novel/[slug]/novel-chapters.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { BookUp, Play } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ChapterLink,
  getNovelChaptersAction,
} from "@/actions/get-novel-chapters";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ChaptersSkeleton from "./chapters-skeleton";

// --- Animation Variants for the List ---
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // A subtle stagger for each chapter
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CHAPTERS_PER_PAGE = 50;

interface NovelChaptersProps {
  novelId: string | null;
}

export function NovelChapters({ novelId }: NovelChaptersProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: chapters,
    isLoading,
    isError,
    error,
  } = useQuery<ChapterLink[], Error>({
    queryKey: ["chapters", novelId],
    queryFn: () => getNovelChaptersAction({ novelId: novelId! }),
    // This query will only run if novelId is a valid string
    enabled: !!novelId,
    // Chapter lists are static, so we can cache them for longer
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Memoize calculations for pagination to avoid re-computing on every render
  const { paginatedChapters, totalPages } = useMemo(() => {
    if (!chapters) return { paginatedChapters: [], totalPages: 0 };

    const total = Math.ceil(chapters.length / CHAPTERS_PER_PAGE);
    const start = (currentPage - 1) * CHAPTERS_PER_PAGE;
    const end = start + CHAPTERS_PER_PAGE;

    return {
      paginatedChapters: chapters.slice(start, end),
      totalPages: total,
    };
  }, [chapters, currentPage]);

  if (isLoading) {
    return <ChaptersSkeleton />;
  }

  if (isError) {
    return (
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">An Error Occurred</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{error.message}</p>
        </CardContent>
      </Card>
    );
  }

  if (!chapters || chapters.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Chapters</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No chapters found for this novel.</p>
        </CardContent>
      </Card>
    );
  }

  const firstChapterLink = chapters[0]?.link;
  const lastChapterLink = chapters[chapters.length - 1]?.link;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chapters ({chapters.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          {firstChapterLink && (
            <Button asChild>
              <Link href={firstChapterLink}>
                <Play className="mr-2 h-4 w-4" /> Read First Chapter
              </Link>
            </Button>
          )}
          {lastChapterLink && (
            <Button asChild variant="secondary">
              <Link href={lastChapterLink}>
                <BookUp className="mr-2 h-4 w-4" /> Read Last Chapter
              </Link>
            </Button>
          )}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {/* Render page numbers with ellipsis if needed */}
              {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;
                // Show first, last, current, and neighbors; ellipsis for gaps
                if (
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
                ) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                // Ellipsis before/after current page range
                if (
                  (page === currentPage - 2 && page > 1) ||
                  (page === currentPage + 2 && page < totalPages)
                ) {
                  return (
                    <PaginationItem key={`ellipsis-${page}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return null;
              })}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* Chapters List with Animations */}
        <AnimatePresence mode="wait">
          <motion.ol
            key={currentPage} // Re-trigger animation on page change
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {paginatedChapters.map((chapter) => (
              <motion.li key={chapter.link} variants={itemVariants}>
                <Button
                  variant={"outline"}
                  asChild
                  className="py-4 font-normal"
                >
                  <Link
                    href={chapter.link}
                    className="block w-full text-left h-auto whitespace-normal"
                  >
                    {chapter.title}
                  </Link>
                </Button>
              </motion.li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
