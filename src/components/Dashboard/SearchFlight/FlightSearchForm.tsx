import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import Button from "../../Shared/Button";
import FlightDestinationSet from "./FlightDestinationSet";

interface DropdownOption {
  label: string;
  options: string[];
}
const MAX_FLIGHT_SETS = 5;

const FlightSearchForm: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<string>("oneway");
  const [selectedFareOption, setSelectedFareOption] =
    useState<string>("rugularfare");
  const [flights, setFlights] = useState<number[]>([1]);
  const [flightData, setFlightData] = useState<{ from: string; to: string }[]>([
    { from: "JFK", to: "DHK" },
  ]);
  const locationOptions = [
    { label: "JFK", value: "JFK", subText: "New York, USA" },
    { label: "DHK", value: "DHK", subText: "Dhaka, Bangladesh" },
    { label: "LHR", value: "LHR", subText: "London, UK" },
    { label: "DXB", value: "DXB", subText: "Dubai, UAE" },
  ];

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
  const handleLocationChange = (
    index: number,
    type: "from" | "to",
    value: string
  ) => {
    const updatedFlightData = [...flightData];
    updatedFlightData[index][type] = value;
    setFlightData(updatedFlightData);
  };
  const handleAddFlight = () => {
    if (flights.length < MAX_FLIGHT_SETS) {
      setFlights((prev) => [...prev, prev.length + 1]);
      setFlightData((prev) => [...prev, { from: "JFK", to: "DHK" }]);
    }
  };

  const handleRemoveFlight = (index: number) => {
    setFlights((prev) => prev.filter((_, i) => i !== index));
    setFlightData((prev) => prev.filter((_, i) => i !== index));
  };
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

      <div className="space-y-6">
        {(selectedTrip === "multiway" ? flights : flights.slice(0, 1)).map(
          (flight, index) => (
            <FlightDestinationSet
              key={index}
              showReturn={selectedTrip !== "oneway"}
              onRemove={() => handleRemoveFlight(index)}
              allowRemove={selectedTrip === "multiway" && flights.length > 1}
              selectedFrom={flightData[index].from}
              selectedTo={flightData[index].to}
              locationOptions={locationOptions}
              onLocationChange={(type, value) =>
                handleLocationChange(index, type, value)
              }
            />
          )
        )}
      </div>
      <div className="   w-full  flex gap-[3.313rem] items-center   mt-[2.563rem] justify-end">
        {selectedTrip === "multiway" && (
          <div className="w-5/12 ">
            <button
              className={`text-primary  bg-gray_light_4  rounded-xl px-[2.594rem] py-[1.125rem] gap-2 flex items-center ${
                flights.length >= MAX_FLIGHT_SETS ? "opacity-50" : ""
              } `}
              disabled={flights.length >= MAX_FLIGHT_SETS}
              onClick={handleAddFlight}
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
