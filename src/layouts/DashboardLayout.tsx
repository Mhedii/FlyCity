import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";
const DashboardLayout: React.FC = () => {
  return (
    // <div className="flex flex-col md:flex-row h-screen">
    //   <Sidebar />
    //   <div className="flex-1 flex flex-col ">
    //     <Navbar />
    //     <main className="flex-grow overflow-auto  bg-gray_light_3 pl-[2.125rem] pe-8 pt-[7rem]">
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col ">
          <main className="flex-grow overflow-auto  bg-gray_light_3 pl-[2.125rem] pe-8 pt-[7rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
