import React from "react";

const SearchBox: React.FC = () => {
  return (
    <input
      type="text"
      className="border border-gray-300 rounded-lg p-2 w-full"
      placeholder="Search PNR..."
    />
  );
};

export default SearchBox;
