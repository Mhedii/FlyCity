import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FiBook, FiSettings } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { IoMenuOutline, IoPerson } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
import { CgSandClock } from "react-icons/cg";
import { BsBank, BsBank2, BsPeopleFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, link: "/" },
    { label: "Search Flight", icon: <IoMdAirplane />, link: "/search-flight" },
    { label: "Group Flight", icon: <FaUsers />, link: "/search-flight" },
    { label: "My Booking", icon: <FiBook />, link: "/bookings" },
    { label: "Partial Issue", icon: <CgSandClock />, link: "/bookings" },
    { label: "Traveler", icon: <IoPerson />, link: "/bookings" },
    { label: "My Account", icon: <BsPeopleFill />, link: "/bookings" },
    { label: "Add Deposit", icon: <BsBank />, link: "/bookings" },
    { label: "Bank List", icon: <BsBank2 />, link: "/bookings" },
    { label: "Report", icon: <AiFillPieChart />, link: "/bookings" },
    { label: "Settings", icon: <FiSettings />, link: "/settings" },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`lg:pl-[2.063rem] pe-[0.875rem]  ${
        isCollapsed ? "w-20 " : "w-full md:w-[17rem] 2xl:w-[21.625rem] "
      } bg-white transition-all duration-300 h-screen  flex flex-col`}
    >
      {/* <div className={` ${isCollapsed ? "justify-center" : ""}`}>
        <img
          src="/assets/images/logo.svg"
          className={`h-[4.298rem] w-[7.5rem] ${
            isCollapsed ? "absolute" : "block"
          } transition-all duration-300`}
          alt="Logo"
        />
      </div> */}

      <nav className="pt-6">
        <div
          className={`hidden lg:flex gap-[10px] items-center mb-[1.563rem]  ${
            isCollapsed ? "justify-center " : ""
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="text-primary  flex items-center justify-center focus:outline-none"
          >
            <IoMenuOutline className={`text-primary text-4xl `} />
          </button>
          {!isCollapsed && <p className="text-2xl font-bold">Menu</p>}
        </div>
        {!isCollapsed && (
          <div className="flex lg:hidden  absolute top-4">
            <img
              src="/assets/images/logo.svg"
              className={`h-[3rem] w-[7.5rem] `}
              alt="Logo"
            />
          </div>
        )}
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`  py-[1.313rem] flex items-center gap-[0.684rem] rounded-xl hover:font-medium hover:text-primary text-base ${
              isCollapsed ? "justify-center" : "pl-8 hover:bg-skyblue "
            }`}
          >
            <span className=" w-8 h-8 text-primary flex items-center text-2xl">
              {item.icon}
            </span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
