import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as json from 'jsonwebtoken'
import { BiBookOpen } from "react-icons/bi";
import dataset from "../../myNovels.json";

export default function Ranking() {
  const [data, setData] = useState(dataset);

  return (
    <div className="mt-4 flex flex-col gap-2 py-12">
      <h1>
        Public Searched Novels <br />
        <span className="text-[12px]">Latest searched appear first</span>
      </h1>
      <hr />

      <div className="col-span-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-1fr gap-2 p-2">
        {data.map((ele, ind) => {
          return (
            <Link
              href={"/search/" + ele.link}
              className="col-span-1 p-2 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-700"
              key={"weekly-featured" + ind + 1}
            >
              <div className="relative h-40 w-full mb-2">
                <Image
                  src={ele.img}
                  alt="novel-image"
                  fill
                  className="object-contain lg:object-cover rounded"
                />
              </div>

              <p className="text-sm truncate">{ele.title}</p>
              <p className="flex items-center gap-1 text-gray-600 text-[13px] truncate">
                <BiBookOpen className="inline" />
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
