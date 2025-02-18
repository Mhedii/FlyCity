import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <div className="flex items-center bg-gray_light_4 rounded-[0.75rem]    w-[18.5rem] h-[3.75rem]">
      <CiSearch className="text-primary text-2xl mx-[0.886rem]" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent outline-none text-black_1"
      />
    </div>
  );
};

export default SearchBar;
