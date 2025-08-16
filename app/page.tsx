import CurrentTrending from "@/components/current-trending";
import Navbar from "@/components/navbar";
import NovelSearchBar from "@/components/novel-search-bar";

export default function Home() {
  return (
    <div className="min-h-screen py-4 px-4 md:px-8 bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc] dark:from-[#0f0c29] dark:via-[#040308] dark:to-[#24243e]">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-16 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover and Read Light Novels
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Explore a vast library of translated and original light novels. Search
          for your favorite stories, follow new releases, and dive into exciting
          adventures—all in one place.
        </p>
      </div>
      <NovelSearchBar />
      <CurrentTrending />
    </div>
  );
}
