import React, { useEffect, useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import DashboardInfoCard from "../../Shared/DashboardInfoCard";

interface FlightCardProps {
  showReturn: boolean;
  onRemove?: () => void;
  allowRemove?: boolean;
  selectedFrom: string;
  selectedTo: string;
  locationOptions: { label: string; value: string; subText: string }[];
  onLocationChange: (type: "from" | "to", value: string) => void;
}

const FlightDestinationSet: React.FC<FlightCardProps> = ({
  showReturn,
  onRemove,
  allowRemove,
  selectedFrom,
  selectedTo,
  locationOptions,
  onLocationChange,
}) => {
  const [showLocationDropdown, setShowLocationDropdown] = useState<
    string | null
  >(null);
  const [rotateImage, setRotateImage] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleSelectLocation = (type: "from" | "to", value: string) => {
    onLocationChange(type, value);
    setShowLocationDropdown(null);
  };
  const handleSwap = () => {
    onLocationChange("from", selectedTo);
    onLocationChange("to", selectedFrom);
    setRotateImage((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="relative flex justify-between items-center gap-6"
      ref={containerRef}
    >
      <div className="flex-1">
        <div className="relative">
          <DashboardInfoCard
            label="From"
            mainText={selectedFrom}
            subText={
              locationOptions.find((opt) => opt.value === selectedFrom)
                ?.subText || ""
            }
            description="Select Departure Location"
            className="flex-1"
            onClick={() => setShowLocationDropdown("from")}
          />
          {showLocationDropdown === "from" && (
            <ul
              className="absolute left-0 mt-1 bg-white  rounded-lg shadow z-10 w-full max-h-48 overflow-auto "
              ref={dropdownRef}
            >
              {locationOptions.map((option) => (
                <li
                  key={option.value}
                  className="px-3 py-2 hover:bg-skyblue cursor-pointer"
                  onClick={() => handleSelectLocation("from", option.value)}
                >
                  {option.label} - {option.subText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-[2%]">
        <img
          src="/assets/images/SwitchDestination.png"
          className={`w-8 h-8 transition-transform duration-300 cursor-pointer ${
            rotateImage ? "rotate-180" : ""
          }`}
          alt="Switch"
          onClick={handleSwap}
        />
      </div>

      <div className="flex-1">
        <div className="relative">
          <DashboardInfoCard
            label="To"
            mainText={selectedTo}
            subText={
              locationOptions.find((opt) => opt.value === selectedTo)
                ?.subText || ""
            }
            description="Select Arrival Location"
            className="flex-1"
            onClick={() => setShowLocationDropdown("to")}
          />
          {showLocationDropdown === "to" && (
            <ul
              className="absolute left-0 mt-1 bg-white  rounded-lg shadow z-10 w-full max-h-48 overflow-auto "
              ref={dropdownRef}
            >
              {locationOptions.map((option) => (
                <li
                  key={option.value}
                  className="px-3 py-2 hover:bg-skyblue cursor-pointer"
                  onClick={() => handleSelectLocation("to", option.value)}
                >
                  {option.label} - {option.subText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <DashboardInfoCard
        label="Departure"
        mainText="06"
        subText="November"
        description="Friday, 2024"
        className="flex-1"
      />
      {showReturn && (
        <DashboardInfoCard
          label="Return"
          mainText="07"
          subText="November"
          description="Saturday, 2024"
          className="flex-1"
        />
      )}
      {allowRemove && (
        <button
          onClick={onRemove}
          className="absolute top-[50%] right-[-2.375rem]"
        >
          <BsXLg className="bg-red-200 text-red-600 rounded-full p-1 text-2xl" />
        </button>
      )}
    </div>
  );
};

export default FlightDestinationSet;
