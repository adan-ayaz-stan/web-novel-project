import axios from "axios";
import * as json from "jsonwebtoken";
import { Coda, Lobster, Overlock } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BiArrowBack,
  BiHomeAlt,
  BiLeftArrow,
  BiRightArrow,
} from "react-icons/bi";
import { ScrollerMotion } from "scroller-motion";
import NavigationBar from "../../components/Layout/NavigationBar";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });
const coda = Overlock({ weight: "400", subsets: ["latin"] });

const ChapterPage = ({ data, title, disableChapter }) => {
  const router = useRouter();

  const [isEnabled, setEnabled] = useState(false);

  function goToPrevChapter() {
    console.log("/chapter/" + data.links.prevChapter);
    router.push("/chapter/" + data.links.prevChapter);
  }

  function goToNextChapter() {
    router.push("/chapter/" + data.links.nextChapter);
  }

  function goToHome() {
    router.push("/");
  }

  useEffect(() => {
    if (window.innerWidth > 920) {
      setEnabled(true);
    }
  }, []);

  return (
    <ScrollerMotion disabled={!isEnabled}>
      <NavigationBar />
      <div className="flex flex-col gap-6 px-2 md:px-[5%] lg:px-[15%] py-6 md:py-9 lg:py-12">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-3">
          <h2
            style={lobster.style}
            className="py-2 text-3xl font-semibold border-y-2"
          >
            {title}
          </h2>

          <div className="flex gap-3 items-center">
            <button
              onClick={goToPrevChapter}
              disabled={disableChapter.prev}
              className="p-2 px-4 flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
            >
              <BiLeftArrow size={24} />
              {"Previous Chapter "}
            </button>
            <button
              onClick={goToNextChapter}
              disabled={disableChapter.next}
              className="p-2 px-4 flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
            >
              {"Next Chapter "}
              <BiRightArrow size={24} />
            </button>
          </div>
        </div>
        {data.content.map((ele, ind) => {
          return (
            <p
              style={coda.style}
              className="text-lg px-2"
              key={"chapter-opened-scraped" + ind}
            >
              {ele}
            </p>
          );
        })}

        <div className="w-full flex gap-3 justify-between items-center">
          <button
            onClick={goToPrevChapter}
            disabled={disableChapter.prev}
            className="p-2 px-4 flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
          >
            <BiLeftArrow size={24} />
            {"Previous Chapter "}
          </button>
          <button
            onClick={goToHome}
            className="hidden p-2 px-4 md:flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
          >
            <BiHomeAlt size={24} /> Go Home
          </button>
          <button
            onClick={goToNextChapter}
            disabled={disableChapter.next}
            className="p-2 px-4 flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
          >
            {"Next Chapter "}
            <BiRightArrow size={24} />
          </button>
        </div>
        <button
          onClick={goToHome}
          className="w-fit mx-auto md:hidden p-2 px-4 flex items-center gap-1 rounded-full border-2 border-gray-600 hover:bg-black hover:bg-opacity-90 hover:text-white hover:border-white hover:ring-2 hover:ring-black cursor-pointer transition-all duration-400 disabled:bg-gray-400 disabled:border-0 disabled:text-white disabled:pointer-events-none"
        >
          <BiHomeAlt size={24} /> Go Home
        </button>
      </div>
    </ScrollerMotion>
  );
};

export default ChapterPage;

export async function getServerSideProps({ req, res, params }) {
  const chapterId = params.chapterId;
  const decryptedString = json.verify(chapterId, "thisSiteisWebScrapedLol");

  console.log(decryptedString);

  const request = await axios.post(
    "https://web-novel-project.vercel.app/api/getChapter",
    {
      pageRoute: decryptedString.link,
    }
  );

  const prevChapterLink = json.verify(
    request.data.links.prevChapter,
    "thisSiteisWebScrapedLol"
  );
  const nextChapterLink = json.verify(
    request.data.links.nextChapter,
    "thisSiteisWebScrapedLol"
  );

  return {
    props: {
      data: request.data,
      title: decryptedString.title,
      disableChapter: {
        prev: prevChapterLink.link == "undefined" ? true : false,
        next: nextChapterLink.link == "undefined" ? true : false,
      },
    },
  };
}
