import React from "react";
import { FaHotel, FaUsers } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";
import { IoMdAirplane } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { TabName } from "../Shared/types/TabTypes";

interface TabMenuProps {
  activeTab: TabName;
  onTabChange: (tabName: TabName) => void;
}
const TabMenu: React.FC<TabMenuProps> = ({ activeTab, onTabChange }) => {
  const tabs: { name: TabName; icon: React.ReactNode }[] = [
    { name: "Flight", icon: <IoMdAirplane /> },
    { name: "Group Flight", icon: <FaUsers /> },
    { name: "PNR Import", icon: <ImArrowDown /> },
    { name: "Hotel", icon: <FaHotel /> },
    { name: "Visa", icon: <TbWorld /> },
  ];
  return (
    <>
      <div className="  pt-[0.688rem] grid grid-cols-2 md:grid-cols-3  lg:flex-nowrap pb-2 lg:flex lg:flex-grow justify-between items-start">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`lg:w-fit py-[0.75rem] lg:py-[1.125rem] gap-2 lg:gap-4 px-[1rem] lg:px-[1.75rem] rounded-xl flex items-center  leading-none ${
              activeTab === tab.name
                ? " bg-primary xl:text-[1.625rem] text-white font-bold"
                : ""
            }`}
            onClick={() => onTabChange(tab.name)}
          >
            <span
              className={`text-2xl ${
                activeTab === tab.name
                  ? "text-yellow text-xl lg:text-3xl"
                  : "text-primary"
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
