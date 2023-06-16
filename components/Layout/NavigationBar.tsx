import React from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "./navigation_child/SearchBar";
import Account from "./navigation_child/Account";

import { BiCompass, BiMenuAltRight } from "react-icons/bi";

import logo from "../../assets/svg/logo.svg";
import { Rancho } from "next/font/google";

const linksData = [
  {
    title: "Browse",
    icon: <BiCompass size={28} />,
    linkTo: "/browse",
  },
  {
    title: "Rankings",
    icon: <BiMenuAltRight size={28} />,
    linkTo: "/rankings",
  },
];

const nanum = Rancho({ weight: "400", subsets: ["latin"] });

export default function NavigationBar() {
  return (
    <div className="flex justify-center items-center py-4">
      <h2 style={nanum.style} className="text-3xl underline">
        {"<<"} Spitfire's Novel Site {">>"}
      </h2>
    </div>
  );

  // return (
  //   <div className="flex justify-center items-center gap-2 p-3 py-2">
  //     {/* Logo */}
  //     <Image src={logo} alt="site-logo" height={84} width={84} />
  //     {/* Links Data */}

  //     {linksData.map((ele, ind) => {
  //       return (
  //         <Link
  //           href={ele.linkTo}
  //           className="flex gap-1 items-center p-2"
  //           key={"navigation-bar-link-" + ind + 121}
  //         >
  //           <span>{ele.icon}</span>
  //           <span>{ele.title}</span>
  //         </Link>
  //       );
  //     })}

  //     {/* Search bar */}
  //     <SearchBar />
  //     {/* Library Link */}
  //     <Link href={"/library"}>Library</Link>

  //     {/* Account Component */}
  //     <Account />
  //   </div>
  // );
}
