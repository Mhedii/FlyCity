import React, { useEffect, useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import DashboardInfoCard from "../../Shared/DashboardInfoCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [departureDate, setDepartureDate] = useState<Date>(new Date()); // Default to today's date
  const [returnDate, setReturnDate] = useState<Date>(new Date());

  const handleSelectLocation = (type: "from" | "to", value: string) => {
    onLocationChange(type, value);
    setShowLocationDropdown(null);
  };

  const handleSwap = () => {
    onLocationChange("from", selectedTo);
    onLocationChange("to", selectedFrom);
    setRotateImage((prev) => !prev);
  };
  const handleDateChange = (date: Date, type: "departure" | "return") => {
    if (type === "departure") {
      setDepartureDate(date);
    } else {
      setReturnDate(date);
    }
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
      className="relative flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-6"
      ref={containerRef}
    >
      <div className="flex-1  w-full lg:w-auto ">
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

      <div className="lg:mt-[2%]">
        <img
          src="/assets/images/SwitchDestination.png"
          className={`w-8 h-8 transition-transform duration-300 cursor-pointer ${
            rotateImage ? "rotate-180" : ""
          }`}
          alt="Switch"
          onClick={handleSwap}
        />
      </div>

      <div className="flex-1  mt-[-1.5rem] lg:mt-0 w-full lg:w-auto">
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

      <div className="flex-1  w-full lg:w-auto">
        <div className="relative">
          <DashboardInfoCard
            label="Departure"
            mainText={String(
              departureDate.getDate() < 10
                ? `0${departureDate.getDate()}`
                : departureDate.getDate()
            )}
            subText={departureDate.toLocaleDateString("en-US", {
              month: "long",
            })}
            description={departureDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
            })}
            className="flex-1"
            onClick={() => setShowLocationDropdown("departure")}
          />
          {showLocationDropdown === "departure" && (
            <div className="absolute mt-2 z-20">
              <DatePicker
                selected={departureDate}
                onChange={(date) => handleDateChange(date as Date, "departure")}
                className="  bg-white rounded-lg shadow  w-full max-h-48"
                dateFormat="dd/MM/yyyy"
                inline
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setDate(new Date().getDate() + 90))
                }
              />
            </div>
          )}
        </div>
      </div>

      {showReturn && (
        <div className="flex-1  w-full lg:w-auto">
          <div className="relative ">
            <DashboardInfoCard
              label="Return"
              mainText={String(
                departureDate.getDate() < 10
                  ? `0${departureDate.getDate()}`
                  : departureDate.getDate()
              )}
              subText={returnDate.toLocaleDateString("en-US", {
                month: "long",
              })}
              description={returnDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
              })}
              className="flex-1"
              onClick={() => setShowLocationDropdown("return")}
            />
            {showLocationDropdown === "return" && (
              <div className="absolute z-20 mt-2">
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => handleDateChange(date as Date, "return")}
                  className=" bg-white rounded-lg shadow w-full max-h-48"
                  dateFormat="dd/MM/yyyy"
                  inline
                  minDate={new Date()}
                  maxDate={
                    new Date(new Date().setDate(new Date().getDate() + 90))
                  }
                />
              </div>
            )}
          </div>
          {allowRemove && (
            <div className="w-full  lg:w-5/12 mt-[1rem]">
              <button
                className={`lg:hidden  text-white  font-semibold  justify-center w-full lg:w-auto bg-red-500   rounded-xl px-[2.594rem]  py-[1rem] lg:py-[1.125rem] gap-2 flex items-center`}
                onClick={onRemove}
              >
                <span>{/* <IoMdAdd /> */}</span>
                Remove
              </button>
            </div>
          )}
        </div>
      )}
      {allowRemove && (
        <button
          onClick={onRemove}
          className="hidden  lg:block absolute top-[50%] right-[-2.375rem]"
        >
          <BsXLg className="bg-red-200 text-red-600 rounded-full p-1 text-2xl" />
        </button>
      )}
    </div>
  );
};

export default FlightDestinationSet;
