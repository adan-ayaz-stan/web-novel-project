import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as json from "jsonwebtoken";
import { BiBookOpen } from "react-icons/bi";
import dataset from "../../myNovels.json";
import { useRecoilValue } from "recoil";
import { darkMode } from "../../stores/darkmode";

export default function Ranking() {
  const darkModeValue = useRecoilValue(darkMode);

  const [data, setData] = useState(dataset);

  return (
    <div className="mt-4 flex flex-col gap-2 py-12">
      <h1 className="text-center">
        <span
          style={{
            color: darkModeValue.textPrimary,
          }}
          className="font-bold text-xl"
        >
          Public Searched Novels
        </span>{" "}
        <br />
        <span
          style={{
            color: darkModeValue.textSecondary,
          }}
          className="text-[12px] text-gray-600"
        >
          Latest searched appears first
        </span>
      </h1>
      <hr />

      <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-1fr gap-2 p-2">
        {data.map((ele, ind) => {
          return (
            <Link
              href={"/search/" + ele.link}
              className="col-span-1 p-2 px-4 rounded-xl shadow-md border-2 border-gray-200 hover:border-gray-400 transition-all duration-700"
              key={"weekly-featured" + ind + 1}
            >
              <div className="relative h-40 w-full mb-2">
                <Image
                  src={ele.img}
                  alt="novel-image"
                  fill
                  className="object-contain lg:object-cover rounded-lg"
                />
              </div>
              <p
                style={{
                  color: darkModeValue.textPrimary,
                }}
                className="text-sm truncate"
              >
                {ele.title}
              </p>{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
