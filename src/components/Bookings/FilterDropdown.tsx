import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterDropdownProps {
  setFilterStatus: (status: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ setFilterStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative " ref={dropdownRef}>
      <select
        className={`px-4 py-2 cursor-pointer bg-gray_light_4 w-[20.875rem] h-[3.75rem] rounded-xl pr-[1.156rem] appearance-none border-none   focus:outline-gray `}
        onChange={(e) => setFilterStatus(e.target.value)}
        onClick={handleToggle}
      >
        <option value="All Booking">All Booking</option>
        <option value="Confirmed">Confirmed</option>
        <option value="OnProcess">On Process</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Dropdown icon */}
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  );
};

export default FilterDropdown;
