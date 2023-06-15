import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="group flex items-center gap-2 border-2 border-gray-300 focus-within:border-black text-gray-600 focus-within:text-black rounded-md px-2 transition-all duration-700">
      <input
        type="text"
        placeholder="Titles, authors or labels"
        className="p-2 outline-none"
      />
      <BiSearch size={24} />
    </div>
  );
}
