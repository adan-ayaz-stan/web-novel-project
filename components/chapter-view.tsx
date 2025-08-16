// app/chapter/[...slug]/chapter-view.tsx
"use client";

import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Lobster, Overlock } from "next/font/google";
import Link from "next/link";

import { type ChapterDetails } from "@/actions/get-chapter-content";
import { Button } from "@/components/ui/button";

// Note: ScrollerMotion is a third-party library.
// This assumes it's compatible with the App Router.
// For this example, we'll render its content directly.

const lobster = Lobster({ weight: "400", subsets: ["latin"] });
const coda = Overlock({ weight: "400", subsets: ["latin"] });

// Navigation button component for reusability
function NavButton({
  href,
  isDisabled,
  children,
}: {
  href: string | null;
  isDisabled: boolean;
  children: React.ReactNode;
}) {
  if (isDisabled || !href) {
    return (
      <Button disabled variant="outline">
        {children}
      </Button>
    );
  }
  return (
    <Button asChild variant="outline">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function ChapterView({ details }: { details: ChapterDetails }) {
  return (
    // Any client-side context providers (like for theming or ScrollerMotion) would wrap this JSX.
    <div className="flex flex-col gap-8 px-2 py-6 md:px-[5%] lg:px-[15%] md:py-9 lg:py-12">
      {/* Top Navigation */}
      <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
        <h1
          className={`${lobster.className} border-y-2 py-2 text-3xl font-semibold text-center md:text-left`}
        >
          {details.title}
        </h1>
        <div className="flex gap-3 items-center">
          <NavButton
            href={details.prevChapter?.link ?? null}
            isDisabled={!details.prevChapter}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </NavButton>
          <NavButton
            href={details.nextChapter?.link ?? null}
            isDisabled={!details.nextChapter}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </NavButton>
        </div>
      </div>

      {/* Chapter Content */}
      <article
        className={`prose prose-lg dark:prose-invert max-w-none ${coda.className}`}
      >
        {details.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <NavButton
          href={details.prevChapter?.link ?? null}
          isDisabled={!details.prevChapter}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </NavButton>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <NavButton
          href={details.nextChapter?.link ?? null}
          isDisabled={!details.nextChapter}
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </NavButton>
      </div>
    </div>
  );
}
