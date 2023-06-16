import NavigationBar from "../components/Layout/NavigationBar";
import SearchNovels from "../components/IndexPage/SearchNovels";
import SearchedNovels from "../components/IndexPage/SearchedNovels";

export default function Index() {
  return (
    <>
      <main className="px-2 md:px-[5%] lg:px-[15%]">
        <NavigationBar />
        <SearchNovels />
        <SearchedNovels />
      </main>
    </>
  );
}
