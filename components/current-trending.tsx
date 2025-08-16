"use client";

import {
  getRecentlySearchedNovels,
  getTrendingNovels,
} from "@/actions/trending-novels";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchedNovel } from "@/lib/schema";
import { BookOpen, Clock, Eye, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CurrentTrending: React.FC = () => {
  const [trendingNovels, setTrendingNovels] = useState<SearchedNovel[]>([]);
  const [recentNovels, setRecentNovels] = useState<SearchedNovel[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"trending" | "recent">("trending");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trending, recent] = await Promise.all([
          getTrendingNovels(8),
          getRecentlySearchedNovels(8),
        ]);
        setTrendingNovels(trending);
        setRecentNovels(recent);
      } catch (error) {
        console.error("Error fetching novels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const NovelCard = ({ novel }: { novel: SearchedNovel }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {novel.title}
            </CardTitle>
            {novel.description && (
              <CardDescription className="mt-2 line-clamp-2 text-sm">
                {novel.description}
              </CardDescription>
            )}
          </div>
          {novel.rating && (
            <Badge
              variant="secondary"
              className="flex items-center gap-1 shrink-0"
            >
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {novel.rating}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{novel.searchCount} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatDate(novel.lastSearched)}</span>
            </div>
          </div>
          {novel.status && (
            <Badge
              variant={
                novel.status.toLowerCase() === "completed"
                  ? "default"
                  : "outline"
              }
              className="text-xs"
            >
              {novel.status}
            </Badge>
          )}
        </div>

        <Link href={novel.link} className="block">
          <Button
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            variant="outline"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Read Novel
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  const LoadingSkeleton = () => (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );

  const currentNovels =
    activeTab === "trending" ? trendingNovels : recentNovels;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Discover Novels
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore trending and recently searched novels from our community
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant={activeTab === "trending" ? "default" : "outline"}
              onClick={() => setActiveTab("trending")}
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Trending
            </Button>
            <Button
              variant={activeTab === "recent" ? "default" : "outline"}
              onClick={() => setActiveTab("recent")}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Recent
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        ) : currentNovels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentNovels.map((novel) => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No novels found</h3>
            <p className="text-muted-foreground mb-6">
              {activeTab === "trending"
                ? "Start searching for novels to see trending content!"
                : "No recently searched novels yet."}
            </p>
            <Link href="/">
              <Button>
                <BookOpen className="w-4 h-4 mr-2" />
                Start Searching
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentTrending;
