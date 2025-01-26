import React from "react";
import { FaUsers } from "react-icons/fa";
import { FiBook, FiSettings } from "react-icons/fi";
import { IoMdAirplane } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
const Sidebar: React.FC = () => {
  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, link: "/" },
    { label: "Search Flight", icon: <IoMdAirplane />, link: "/search-flight" },
    { label: "Group Flight", icon: <FaUsers />, link: "/search-flight" },
    { label: "My Booking", icon: <FiBook />, link: "/bookings" },
    { label: "Settings", icon: <FiSettings />, link: "/settings" },
  ];

  return (
    <aside className="w-full md:w-[21.625rem] bg-white  h-auto md:h-full">
      <div className="pt-[1.913rem] pl-[2.063rem] pe-[0.875rem]">
        <img
          src="/assets/images/logo.svg"
          className="h-[4.298rem] w-[7.5rem]"
          alt=""
        />
        <nav className="pt-[3.413rem]">
          <div className="flex gap-[10px] items-center mb-[1.563rem]">
            <IoMenuOutline className="text-primary w-8 h-8" />
            <p className="text-2xl font-bold">Menu</p>
          </div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="pl-8 py-[1.313rem] flex items-center gap-[0.684rem] rounded-xl hover:bg-skyblue text-base  hover:font-medium hover:text-primary"
            >
              <span className="w-8 h-8 text-primary flex items-center text-2xl">
                {item.icon}
              </span>

              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
