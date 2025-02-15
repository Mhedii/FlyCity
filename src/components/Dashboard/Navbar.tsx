import React, { useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router";
import ProfileDropdown from "../Home/Header/ProfileDropdown";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<appData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem("app-data");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
      // setIsLoading(false);
    }, 1000);
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleSidebarButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpen(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-lg font-semibold">
  //         <span className="loading loading-ring loading-lg"></span>
  //       </p>
  //     </div>
  //   );
  // }
  return (
    <header className="lg:pl-[2.063rem] px-[0.75rem] lg:px-6 pb-[1rem] lg:pb-[1.875rem]  py-[1.875rem]">
      <div className=" flex  items-center justify-between ">
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray  opacity-20 z-40" />
        )}
        <div>
          {isSidebarOpen && (
            <div
              className=" fixed lg:hidden overflow-y-scroll top-0 left-0 w-[80%] md:w-[40%] lg:w-[30%] h-full bg-white z-50 flex flex-col p-4 transition-all duration-300 ease-in-out"
              ref={sidebarRef}
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className=" text-xl self-end "
              >
                <IoMenuOutline className={`text-primary text-4xl mt-[1rem] `} />
              </button>

              {userData && userData.menuItems && (
                <Sidebar menuItems={userData.menuItems} />
              )}
            </div>
          )}
        </div>
        <IoMenuOutline
          className={`text-primary text-4xl lg:hidden `}
          onClick={handleSidebarButtonClick}
        />
        <div className="    flex grow md:grow lg:grow-0 xl:flex-grow items-center ">
          <div className="ml-[15%] md:ml-0  mt-[-1rem]  flex  justify-center lg:justify-start w-full  ">
            <Link to="/">
              <img
                src="/assets/images/logo.svg"
                className="h-[3rem] w-[7.5rem] lg:h-[4.298rem] lg:w-[7.5rem]"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <div className=" lg:ml-[7rem] xl:ml-[10rem] flex-auto hidden lg:flex justify-start">
          <SearchBox
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

        <div className="  flex justify-end items-center gap-4 ">
          <button className="lg:bg-gray_light_4 rounded-full   ">
            <img
              src="/assets/images/CustomerServiceIcon.png"
              className="w-6 h-6 lg:m-3"
              alt=""
            />
          </button>
          <button className="lg:bg-gray_light_4 rounded-full ">
            <img
              src="/assets/images/NotificationIcon.png"
              alt=""
              className=" w-6 h-6 lg:m-3  "
            />
          </button>

          <div className="hidden bg-gray_light_4 lg:flex gap-[0.188rem] items-center p-[10px]   rounded-xl text-xs xl:text-[0.875rem]">
            <img src="/assets/images/Money.png" alt="" className="w-6 h-6" />
            <span className="">My Balance </span>
            <span className="ml-2 text-primary font-medium">SAR 500.00</span>
          </div>

          <div className="relative" ref={dropdownRef}>
            <img
              src="/assets/images/profileImage.png"
              alt="Profile"
              className="lg:w-[3.5rem] xl:w-[4.375rem] lg:h-[3.5rem] xl:h-[4.375rem] w-12 h-12 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {isDropdownOpen && userData?.user && (
              <ProfileDropdown userData={userData?.user} />
            )}
          </div>
        </div>
      </div>
      {/* <div className="mt-[1.5rem] flex-1 flex lg:hidden justify-center ">
        <SearchBox
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      </div> */}
    </header>
  );
};

export default Navbar;
