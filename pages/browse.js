import RenderNovels from "@/components/BrowsePage/RenderNovels";
import Sidebar from "@/components/BrowsePage/Sidebar";
import SortBy from "@/components/BrowsePage/SortBy";
import NavigationBar from "@/components/Layout/NavigationBar";

export default function BrowsePage() {
  return (
    <>
      <main className="px-[15%]">
        <NavigationBar />

        <div className="grid grid-cols-12 auto-rows-1fr">
          {/* Sidebar goes here */}
          <div className="col-span-2">
            <Sidebar />
          </div>

          {/* Main view goes here */}
          <div className="col-span-10">
            <SortBy />
            <RenderNovels />
          </div>
        </div>
      </main>
    </>
  );
}
