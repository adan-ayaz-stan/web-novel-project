// app/novel/[slug]/chapters-skeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ChaptersSkeleton() {
  return (
    <Card>
      <CardHeader>
        {/* Title Skeleton */}
        <Skeleton className="h-8 w-48 rounded-md" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Actions Skeleton */}
        <div className="flex space-x-4">
          <Skeleton className="h-10 w-40 rounded-md" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
        {/* Chapter List Skeleton */}
        <div className="space-y-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-full rounded-md" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}