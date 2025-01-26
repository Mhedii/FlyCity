import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBoxProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex items-center bg-gray_light_4 rounded-[0.75rem]    w-[18.5rem] h-[3.75rem]">
      <CiSearch className="text-primary text-2xl mx-[0.886rem]" />
      <input
        type="text"
        placeholder="Search PNR..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-transparent outline-none text-black_1"
      />
    </div>
  );
};

export default SearchBox;
