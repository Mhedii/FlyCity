import React, { useState } from "react";
import { FaHotel, FaUsers } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { IoMdAirplane } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Flight");
  const tabs = [
    { name: "Flight", icon: <IoMdAirplane /> },
    { name: "Group Flight", icon: <FaUsers /> },
    { name: "PNR Import", icon: <ImArrowDown /> },
    { name: "Hotel", icon: <FaHotel /> },
    { name: "Visa", icon: <TbWorld /> },
  ];
  return (
    <>
      <div className="  pt-[0.688rem] pb-2 flex flex-grow justify-between items-start">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`w-fit py-[1.125rem] gap-4 px-[1.75rem] rounded-xl flex items-center  leading-none ${
              activeTab === tab.name
                ? " bg-primary text-[1.625rem] text-white font-bold"
                : ""
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span
              className={`text-2xl ${
                activeTab === tab.name ? "text-yellow text-3xl" : "text-primary"
              } `}
            >
              {tab.icon}
            </span>
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default TabMenu;
