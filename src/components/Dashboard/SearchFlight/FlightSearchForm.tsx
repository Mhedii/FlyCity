import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import Button from "../../Shared/Button";
import DashboardInfoCard from "../../Shared/DashboardInfoCard";
import { BsXLg } from "react-icons/bs";

interface DropdownOption {
  label: string;
  options: string[];
}

const FlightSearchForm: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<string>("oneway");
  const [selectedFareOption, setSelectedFareOption] =
    useState<string>("rugularfare");

  const trip_types = [
    { label: "One way", value: "oneway" },
    { label: "Round way", value: "roundway" },
    { label: "Multi way", value: "multiway" },
  ];
  const fare_type = [
    { label: "Regular Fare", value: "rugularfare" },
    { label: "Umrah Fare", value: "umrahfare" },
    { label: "NOC", value: "noc" },
  ];
  const dropdownData: DropdownOption[] = [
    {
      label: "1 Passenger",
      options: [
        "1 Passenger",
        "2 Passenger",
        "3 Passenger",
        "4 Passenger",
        "5 Passenger",
        "6 Passenger",
        "7 Passenger",
        "8 Passenger",
      ],
    },
    { label: "Economy", options: ["Economy", "Business", "Business Plus"] },
    {
      label: "Preferred Airline",
      options: [
        "Emirates",
        "Item Y",
        "Item Z",
        "American Airlines",
        "Delta Airlines",
        "United Airlines",
        "Qatar Airways",
        "British Airways",
      ],
    },
  ];
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.some(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <div className="flex justify-between mb-[2.438rem]">
        <div className="flex gap-[3.375rem]  ">
          {trip_types.map((option) => (
            <label
              key={option.value}
              className="flex gap-[1.063rem] items-center cursor-pointer   "
            >
              <input
                type="radio"
                name="journey-type"
                value={option.value}
                checked={selectedTrip === option.value}
                onChange={() => setSelectedTrip(option.value)}
                className="radio radio-primary"
              />

              <span className="text-[1.188rem] text-gray ">{option.label}</span>
            </label>
          ))}
        </div>
        <div className="flex gap-[1.563rem]">
          {dropdownData.map((dropdown, index) => (
            <div
              key={index}
              className="relative"
              ref={(el) => (dropdownRefs.current[index] = el)}
            >
              <div
                role="button"
                className="flex justify-between items-center border-b border-gray_light_3 cursor-pointer w-[14.188rem] 2xl:w-[13rem]"
                onClick={() =>
                  setOpenDropdown((prev) => (prev === index ? null : index))
                }
              >
                <span className="text-black_1 text-[1.375rem]">
                  {dropdown.label}
                </span>
                <IoIosArrowDown className="text-primary" size={20} />
              </div>

              {openDropdown === index && (
                <ul className="absolute left-0 mt-1 bg-base-100 rounded-box shadow z-[10] w-[12rem] p-2">
                  {dropdown.options.map((item, idx) => (
                    <li key={idx}>
                      <a className="block px-3 py-2 rounded hover:bg-skyblue cursor-pointer">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between w-full items-center gap-6">
          <DashboardInfoCard
            label="From"
            mainText="JFK"
            subText="New York"
            description="John F. Kennedy Inter..."
            className="flex-1  "
          />
          <div className="mt-[2%] ">
            <img
              src="/assets/images/SwitchDestination.png"
              className="w-8 h-8"
              alt=""
            />
          </div>
          <DashboardInfoCard
            label="From"
            mainText="DHK"
            subText="Dhaka"
            description="Hazrat Shahjalal Inter..."
            className="flex-1"
          />
          <DashboardInfoCard
            label="Departure"
            mainText="06"
            subText="November"
            description="Friday,2024"
            className="flex-1"
          />
          {selectedTrip === "roundway" && (
            <DashboardInfoCard
              label="Return"
              mainText="07"
              subText="November"
              description="Saturday,2024"
              className="flex-1"
            />
          )}
        </div>
        {selectedTrip === "multiway" && (
          <button className="absolute top-[50%] right-[-2.375rem] ">
            <BsXLg className="bg-red-200 text-red-600  rounded-full p-1 text-2xl" />
          </button>
        )}
      </div>
      <div className=" w-full  flex gap-[3.313rem] items-center   mt-[2.563rem] justify-end">
        {selectedTrip === "multiway" && (
          <div className="w-4/12">
            <button
              className={`text-primary  bg-gray_light_4  rounded-xl px-[2.594rem] py-[1.125rem] gap-2 flex items-center  `}
            >
              <span>
                <IoMdAdd />
              </span>
              Add Flight
            </button>
          </div>
        )}
        <div className="flex gap-[1.563rem]  items-center">
          {fare_type.map((option) => (
            <label
              key={option.value}
              className="flex gap-[1.063rem] items-center cursor-pointer"
            >
              <input
                type="radio"
                name="fare-type"
                value={option.value}
                checked={selectedFareOption === option.value}
                onChange={() => setSelectedFareOption(option.value)}
                className="radio radio-primary"
              />

              <span className="text-[1.188rem] text-gray ">{option.label}</span>
            </label>
          ))}
        </div>
        <Button
          text="Search"
          className="h-[4.375rem] px-[4.969rem] py-[0.969rem] text-[1.625rem] leading-none"
        />
      </div>
    </div>
  );
};

export default FlightSearchForm;
