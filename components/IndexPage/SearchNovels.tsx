import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchNovels() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  async function searchNovel(keyword) {
    const response = await axios
      .post("/api/searchNovel", { keyword })
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (keyword != "") {
      searchNovel(keyword);
    } else {
      setResults([]);
    }
  }, [keyword]);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-xl text-center leading-[1em]">
        Search novels
      </h1>
      <span className="text-gray-600 text-sm text-center">
        You can search new novels from the database. <br />
        All novels searched will appear in the public searched novels section
        below.
      </span>
      <div className="relative w-full md:w-3/4 lg:w-1/2 mx-auto group flex items-center gap-2 border-2 border-gray-300 focus-within:border-black text-gray-600 focus-within:text-black rounded-md px-2 transition-all duration-700">
        <input
          type="text"
          placeholder="Titles, authors or labels"
          onChange={(value) => setKeyword(value.target.value)}
          className="p-2 w-full outline-none"
        />
        <BiSearch size={24} />

        {/* Search results */}
        <div className="z-50 bg-white absolute top-[105%] left-0 w-full flex flex-col border-2 rounded-lg">
          {results.map((ele, ind, arr) => {
            if (ind + 1 == arr.length) {
              return;
            }
            return (
              <Link
                href={"/search/" + ele.link}
                key={"search-results-" + ind}
                className="px-3 py-2 hover:bg-black hover:bg-opacity-10 transition-all duration-[500ms]"
              >
                {ele.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
