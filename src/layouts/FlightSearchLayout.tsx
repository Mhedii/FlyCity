import React from "react";
import { Outlet } from "react-router-dom";
import FlightSearchResultSidebar from "../components/Dashboard/FlightSearchResult/Sidebar/FlightSearchResultSidebar";
import Navbar from "../components/Dashboard/Navbar";
const FlightSearchLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden xl:block">
          <FlightSearchResultSidebar />
        </div>

        <div className="flex-1 flex flex-col ">
          <main className="flex-grow overflow-auto  bg-gray_light_3 px-[0.5rem] lg:pl-[2.125rem] lg:pe-8 pt-[2rem] lg:pt-[1.313rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchLayout;
