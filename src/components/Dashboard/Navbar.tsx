import React, { useState } from "react";
import SearchBox from "./SearchBox";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex-1"></div>

      <div className="flex-1 flex justify-center">
        <SearchBox
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <button className="bg-gray_light_4 rounded-full  ">
          <img
            src="/assets/images/CustomerServiceIcon.png"
            className="w-6 h-6 m-3"
            alt=""
          />
        </button>
        <button className="bg-gray_light_4 rounded-full ">
          <img
            src="/assets/images/NotificationIcon.png"
            alt=""
            className="w-6 h-6 m-3"
          />
        </button>

        <div className="bg-gray_light_4 flex gap-[0.188rem] items-center p-[10px]   rounded-xl text-[0.875rem]">
          <img src="/assets/images/Money.png" alt="" className="w-6 h-6" />
          <span className="">My Balance </span>
          <span className="ml-2 text-primary font-medium">SAR 500.00</span>
        </div>

        {/* Profile Image */}
        <img
          src="/assets/images/profileImage.png"
          alt="Profile"
          className="w-[4.375rem] h-[4.375rem] rounded-full "
        />
      </div>
    </header>
  );
};

export default Navbar;
