import Head from "next/head";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import NavigationBar from "../components/Layout/NavigationBar";
import SearchNovels from "../components/IndexPage/SearchNovels";
import SearchedNovels from "../components/IndexPage/SearchedNovels";

import { darkMode } from "../stores/darkmode";

import { Rancho } from "next/font/google";

const nanum = Rancho({ weight: "400", subsets: ["latin"] });

export default function Index() {
  const darkModeValue = useRecoilValue(darkMode);

  return (
    <>
      <Head>
        <title>Spitfire's Novel Pub</title>
      </Head>
      <main
        style={{
          backgroundColor: darkModeValue.bgColor,
        }}
        className={`px-2 md:px-[5%] lg:px-[15%]`}
      >
        <NavigationBar />
        <SearchNovels />
        <SearchedNovels />

        <div className="pt-4 pb-2 flex justify-center items-center">
          <h2>
            <span
              style={{
                color: darkModeValue.textPrimary,
              }}
              className="text-sm"
            >
              made by{" "}
            </span>
            <Link
              href={"https://github.com/adan-ayaz-stan"}
              style={nanum.style}
              className="font-bold text-2xl text-red-700 hover:underline"
            >
              Adan Ayaz
            </Link>
          </h2>
        </div>
      </main>
    </>
  );
}
