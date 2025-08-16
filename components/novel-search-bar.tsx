"use client";

import { useQuery } from "@tanstack/react-query";
import { Book, Loader2 } from "lucide-react";
import { useState } from "react";

import { LinkData, searchNovelsAction } from "@/actions/search-novel";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useDebounce } from "@/hooks/use-debounce";
import Link from "next/link";

export default function NovelSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: novels,
    isError,
    error,
    isFetching,
  } = useQuery<LinkData[], Error>({
    queryKey: ["novels", debouncedSearchTerm],
    queryFn: () => searchNovelsAction({ keyword: debouncedSearchTerm }),
    enabled: debouncedSearchTerm.length > 2,
  });

  // The list should only be visible if the input has focus AND text
  const showList = isFocused && searchTerm.length > 0;

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] max-w-3xl mx-auto my-4 overflow-visible mb-20">
      <CommandInput
        placeholder="Search for a novel..."
        value={searchTerm}
        onValueChange={setSearchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        className="h-12"
      />

      {/* Conditionally render the CommandList based on the showList flag */}
      {showList && (
        <CommandList>
          {isFetching && (
            <div className="p-4 py-6 text-center text-sm">
              <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
              <p className="mt-2">Searching...</p>
            </div>
          )}

          {isError && (
            <div className="p-4 text-center text-sm text-red-500">
              Error: {error.message}
            </div>
          )}

          {!isFetching && debouncedSearchTerm.length > 2 && (
            <CommandEmpty>
              No results found for &quot;{debouncedSearchTerm}&quot;.
            </CommandEmpty>
          )}

          {!isFetching && novels && novels.length > 0 && (
            <CommandGroup heading="Results">
              {novels.map((novel) => (
                <CommandItem
                  key={novel.link}
                  value={novel.title}
                  className="cursor-pointer"
                  asChild
                >
                  <Link href={novel.link}>
                    <Book className="mr-2 h-4 w-4" />
                    <span>{novel.title}</span>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      )}
    </Command>
  );
}
