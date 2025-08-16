// app/chapter/[...slug]/loading.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 px-2 py-6 md:px-[5%] lg:px-[15%] md:py-9 lg:py-12">
      {/* Top Navigation */}
      <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
        <Skeleton className="h-8 w-48" />
        <div className="flex gap-3 items-center">
          <Button disabled variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button disabled variant="outline">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chapter Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton key={idx} className="h-4 w-full mb-4" />
        ))}
      </article>

      {/* Bottom Navigation */}
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <Button disabled variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button disabled variant="outline">
          <Home className="mr-2 h-4 w-4" /> Home
        </Button>
        <Button disabled variant="outline">
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
