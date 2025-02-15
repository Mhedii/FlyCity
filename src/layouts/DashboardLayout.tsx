import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";
const DashboardLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<appData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem("app-data");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">
          <span className="loading loading-ring loading-lg"></span>
        </p>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden xl:block">
          {userData && userData.menuItems && (
            <Sidebar menuItems={userData.menuItems} />
          )}
        </div>
        <div className="flex-1 flex flex-col ">
          <main className="flex-grow overflow-auto  bg-gray_light_3 px-[0.75rem] lg:pl-[2.125rem] lg:pe-8 pt-[1rem] lg:pt-[2rem]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
