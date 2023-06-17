import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import axios from "axios";

import SvgSpinnersTadpole from "../Layout/Spinner";
import { darkMode } from "../../stores/darkmode";

import { BiSearch } from "react-icons/bi";

export default function SearchNovels() {
  const darkModeValue = useRecoilValue(darkMode);

  const [keyword, setKeyword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function searchNovel(keyword) {
    setLoading(true);
    const response = await axios
      .post("/api/searchNovel", { keyword })
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    searchNovel(keyword);
  }

  useEffect(() => {
    if (keyword == "") {
      setResults([]);
    }
  }, [keyword]);

  return (
    <div
      style={{
        color: darkModeValue.textPrimary,
      }}
      className="flex flex-col gap-3"
    >
      <h1
        style={{ color: darkModeValue.textSecondary }}
        className="font-bold text-xl text-center leading-[1em]"
      >
        Search novels
      </h1>
      <span
        style={{ color: darkModeValue.textSecondary }}
        className="text-sm text-center"
      >
        You can search new novels from the database. <br />
        All novels searched will appear in the public searched novels section
        below.
      </span>
      <form
        onSubmit={formSubmitHandler}
        style={{
          background: darkModeValue.bgColor,
        }}
        className="relative w-full md:w-3/4 lg:w-1/2 mx-auto group flex items-center gap-2 border-2 border-gray-300 text-gray-600 rounded-md px-2 transition-all duration-700"
      >
        <input
          type="text"
          placeholder="Titles, authors or labels"
          onChange={(value) => setKeyword(value.target.value)}
          style={{
            color: darkModeValue.textPrimary,
            background: darkModeValue.bgColor,
          }}
          className="p-2 w-full outline-none"
        />
        <button disabled={isLoading} className="cursor-pointer" type="submit">
          {isLoading ? <SvgSpinnersTadpole /> : <BiSearch size={24} />}
        </button>

        {/* Search results */}

        <div className="z-50 bg-white absolute top-[105%] left-0 w-full flex flex-col border-2 rounded-lg">
          {results.map((ele, ind, arr) => {
            if (arr.length > 1 && ind + 1 == arr.length) {
              return (
                <div
                  style={{
                    color: darkModeValue.textPrimary,
                    background: darkModeValue.bgColor,
                  }}
                  className="px-3 py-2"
                >
                  End of results
                </div>
              );
            }
            if (arr.length == 1) {
              return (
                <div
                  style={{
                    color: darkModeValue.textPrimary,
                    background: darkModeValue.bgColor,
                  }}
                  className="px-3 py-2"
                >
                  No results found
                </div>
              );
            }
            return (
              <Link
                href={"/search/" + ele.link}
                key={"search-results-" + ind}
                style={{
                  background: darkModeValue.bgColor,
                  color: darkModeValue.textPrimary,
                }}
                className="px-3 py-2 hover:bg-black hover:bg-opacity-10 transition-all duration-[500ms]"
              >
                {ele.title}
              </Link>
            );
          })}
        </div>
      </form>
    </div>
  );
}
