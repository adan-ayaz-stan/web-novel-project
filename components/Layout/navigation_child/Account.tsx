import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Account() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"https://placehold.co/40x40/png"}
        width={24}
        height={24}
        alt="account-profile-image"
        className="h-12 w-12 rounded-full border-2"
      />
      {/* If account is not logged in, we show the sign up button */}
      <Link
        href={"/auth/signUp"}
        className="p-3 px-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full text-white font-bold"
      >
        Sign Up
      </Link>
    </div>
  );
}
