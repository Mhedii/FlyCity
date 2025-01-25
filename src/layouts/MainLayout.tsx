import React from "react";
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
