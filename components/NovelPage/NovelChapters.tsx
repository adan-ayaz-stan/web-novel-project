import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiArrowToRight, BiSortAZ, BiSortZA } from "react-icons/bi";

import Loading from "../Layout/Loading";

import styles from "../../styles/button.module.css";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../stores/darkmode";

import { Button, ConfigProvider, Pagination } from "antd";

export default function NovelChapters({ novelID }: { novelID: number }) {
  const router = useRouter();

  const darkModeValue = useRecoilValue(darkMode);

  const [isLoading, setLoading] = useState(false);
  const [chapterLinks, setChapterLinks] = useState([]);
  const [allLinks, setAllLinks] = useState([]);
  const [tab, setTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [isReversedChapters, setReversedChapters] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  function divideArrayIntoParts(array: any[]) {
    const result = [];
    const totalParts = Math.ceil(array.length / pageSize); // Calculate the total number of parts needed

    for (let i = 0; i < totalParts; i++) {
      const start = i * pageSize;
      const end = start + pageSize;
      const part = array.slice(start, end); // Extract a part of 100 elements

      result.push(part);
    }

    return result;
  }

  async function getChapterLinks() {
    setLoading(true);

    const request = await axios.post("/api/getNovelChapters", {
      novelID: novelID,
    });

    setAllLinks(request.data);
    setLoading(false);
  }

  function renderChapters(tab: number) {
    const chaptersInFocus = divideArrayIntoParts(allLinks);
    if (allLinks.length != 0) {
      setTabs(chaptersInFocus);
      setChapterLinks(chaptersInFocus[tab - 1]);
    }
  }

  useEffect(() => {
    renderChapters(page);
  }, [page, allLinks]);

  useEffect(() => {
    getChapterLinks();
  }, []);

  function reverseChapters() {
    setReversedChapters((value) => !value);
  }

  function openFirstChapter() {
    router.push(`/chapter/${allLinks[0].obj}`);
  }

  function openLastChapter() {
    router.push(`/chapter/${allLinks[allLinks.length - 1].obj}`);
  }

  function pageSizeChanged(page: number, pageSize: number) {
    setPage(page);
    setPageSize(pageSize);
  }

  return (
    <div className="h-fit flex flex-col w-full mt-12">
      {/* Latest 5 Chapters */}
      {!isLoading && (
        <>
          <h2
            style={{
              color: darkModeValue.textPrimary,
            }}
            className="text-center font-bold text-lg"
          >
            Latest Chapter Updates
          </h2>
          <div className="relative h-fit w-full flex flex-row flex-wrap justify-center gap-6 mb-12 py-6 px-3">
            {allLinks.map((ele, ind) => {
              if (ind < allLinks.length - 5) {
                return;
              }

              return (
                <Link
                  href={`/chapter/${ele.obj}`}
                  className="w-[100%] md:w-[45%] lg:w-[30%] flex flex-col gap-2 border-2 px-4 py-3 rounded-lg hover:border-gray-600 transition-all duration-[500ms]"
                  key={"link-novel-chapters-" + ind}
                >
                  <h2
                    style={{
                      color: darkModeValue.textPrimary,
                    }}
                    className="text-lg font-medium leading-[1em]"
                  >
                    {ele.title}
                  </h2>
                </Link>
              );
            })}
          </div>
        </>
      )}

      {/* {
        //
        // ──────────────────────────────────────────────────────────────────── I ──────────
        //   :::::: N A V I G A T I O N   B A R : :  :   :    :     :        :          :
        // ──────────────────────────────────────────────────────────────────────────────
        //

        
      } */}

      {!isLoading && (
        <div className="flex flex-col gap-12 justify-between items-center">
          {/* Left side */}
          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={openFirstChapter} className={styles.button}>
              Read first chapter
            </button>
            <button onClick={openLastChapter} className={styles.button}>
              Read last chapter
            </button>
          </div>

          {/* Right side */}

          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemSize: 32,
                },
              },
              token: {
                colorPrimary: "#000000",
                colorPrimaryHover: "#eeeeee",
              },
            }}
          >
            <Pagination
              total={allLinks.length}
              onChange={pageSizeChanged}
              defaultPageSize={pageSize}
              defaultCurrent={page}
            />
          </ConfigProvider>
        </div>
      )}

      {/* 
      //
      // ──────────────────────────────────────────────────────────────────────── I ──────────
      //   :::::: C H A P T E R S   L I S T I N G : :  :   :    :     :        :          :
      // ──────────────────────────────────────────────────────────────────────────────────
      //

      
      */}

      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative w-full flex flex-row flex-wrap justify-center gap-6 my-12 py-6 px-3 overflow-y-auto">
          <>
            {chapterLinks.map((ele, ind) => {
              return (
                <Link
                  href={`/chapter/${ele.obj}`}
                  className="w-[100%] md:w-[45%] lg:w-[30%] flex flex-col gap-2 border-2 px-4 py-3 rounded-lg hover:border-gray-600 transition-all duration-[500ms]"
                  key={"link-novel-chapters-" + ind}
                >
                  <h2
                    style={{
                      color: darkModeValue.textPrimary,
                    }}
                    className="text-lg font-medium text-gray-600 leading-[1em]"
                  >
                    {ele.title}
                  </h2>
                </Link>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
}
