import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import * as json from "jsonwebtoken";

import NovelChapters from "../../components/NovelPage/NovelChapters";
import NavigationBar from "../../components/Layout/NavigationBar";

import { BiArrowToRight } from "react-icons/bi";

import { Montserrat } from "next/font/google";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../stores/darkmode";
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Novel({ searchLink, data }) {
  const darkModeValue = useRecoilValue(darkMode);

  async function addNovelToPublicSearchedNovelPanel(title, link, novelId, img) {
    const response = await axios.post("/api/addNovelToPublicSearched", {
      title,
      link,
      novelId,
      img,
    });
  }

  useEffect(() => {
    addNovelToPublicSearchedNovelPanel(
      data.title,
      searchLink,
      data.novelId,
      data.img
    );
  }, []);

  return (
    <>
      <div
        style={{
          background: darkModeValue.bgColor,
        }}
        className="flex flex-col gap-4 justify-center items-center px-0 md:px-[5%] lg:px-[15%]"
      >
        <NavigationBar />
        {/* Hero Section */}
        <div
          style={{
            color: darkModeValue.textPrimary,
          }}
          className="w-full flex flex-col items-center md:flex-row gap-6"
        >
          {/*  */}
          <div className="relative h-60 w-40">
            <Image src={data.img} alt={data.title} fill />
          </div>

          {/*  */}
          <div className="pt-3 flex flex-col gap-3 px-2">
            <h1
              style={montserrat.style}
              className="text-2xl font-bold text-center uppercase"
            >
              {data.title}
            </h1>

            {data.metaData?.map((ele, ind) => {
              return (
                <div
                  className="flex gap-2"
                  key={"novel-overview-metadata-" + ind + 245}
                >
                  <h2
                    style={{
                      color: darkModeValue.textSecondary,
                    }}
                    className="font-bold"
                  >
                    {ele.heading}
                  </h2>
                  <p
                    style={{
                      color: darkModeValue.textPrimary,
                    }}
                  >
                    {ele.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-fit">
          <h2
            style={{
              color: darkModeValue.textPrimary,
            }}
            className="text-xl px-2 mb-2"
          >
            Description
          </h2>
          <hr />
          {/* Description */}
          <div className="flex flex-col gap-3 py-6 px-2">
            {data.description.map((ele, ind) => {
              return (
                <p
                  style={{
                    color: darkModeValue.textPrimary,
                  }}
                  key={"novel-overview-description" + ind + 252}
                >
                  {ele}
                </p>
              );
            })}
          </div>

          <div className="flex flex-row gap-5 items-center flex-wrap px-2">
            {/* Novel Chapters */}
            <div className="relative w-fit flex flex-col gap-2 p-4 pr-20 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-700 transition-all duration-700">
              <h2
                style={{
                  color: darkModeValue.textPrimary,
                }}
              >
                Novel Chapters
              </h2>
              <p
                style={{
                  color: darkModeValue.textSecondary,
                }}
                className=""
              >
                {data.latestChapter}
              </p>

              <BiArrowToRight
                size={34}
                style={{
                  color: darkModeValue.textSecondary,
                }}
                className="absolute top-[50%] right-[10px] -translate-y-1/2 text-gray-600"
              />
            </div>
          </div>

          <NovelChapters novelID={data.novelId} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const searchLink = json.verify(params.searchLink, "thisSiteisWebScrapedLol");

  const response = await axios.post(
    "https://spitfirenovelpub.vercel.app/api/getNovelBySearch",
    { link: searchLink }
  );

  return {
    props: {
      searchLink,
      data: response.data,
    },
  };
}
