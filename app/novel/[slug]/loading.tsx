export default function NovelDetailsSkeleton() {
  return (
    <div className="grid min-h-screen animate-pulse grid-cols-1 gap-8 md:grid-cols-3 p-8 bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]">
      {/* Image Skeleton */}
      <div className="h-[450px] w-full rounded-lg bg-slate-200 dark:bg-slate-700 md:col-span-1"></div>

      {/* Details Skeleton */}
      <div className="md:col-span-2">
        <div className="mb-4 h-10 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>

        {/* Metadata Skeleton */}
        <div className="mb-6 space-y-3 border-y border-border py-4">
          <div className="h-5 w-1/2 rounded bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-5 w-1/2 rounded bg-slate-200 dark:bg-slate-700"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 rounded bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-4 w-11/12 rounded bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}
