import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[1.875rem] pe-[1.938rem] bg-white ">
      <div className="flex items-center w-full md:w-auto">
        <input
          type="text"
          placeholder="Search PNR..."
          className="w-full md:w-auto border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div>My Balance: SAR 500.00</div>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
