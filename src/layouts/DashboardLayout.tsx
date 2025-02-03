import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";
const DashboardLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col ">
          <main className="flex-grow overflow-auto  bg-gray_light_3 px-[0.75rem] lg:pl-[2.125rem] lg:pe-8 pt-[1rem] lg:pt-[7rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
