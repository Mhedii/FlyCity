import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import Button from "../../Shared/Button";
import FlightDestinationSet from "./FlightDestinationSet";
import PassengerDropdown from "./PassengerDropdown";
import { useNavigate } from "react-router";

interface DropdownOption {
  label: string;
  options: string[];
}
interface PassengerCounts {
  adults: number;
  children: number;
  kids: number;
  infants: number;
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
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [passengerCounts, setPassengerCounts] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [totalPassengers, setTotalPassengers] = useState<number>(1);
  const [selectedEconomy, setSelectedEconomy] = useState<string>("Economy");
  const [airlineSearch, setAirlineSearch] = useState<string>("");
  const [filteredAirlines, setFilteredAirlines] = useState<string[]>([]);
  const navigate = useNavigate();
  const locationOptions = [
    { label: "JFK", value: "JFK", subText: "New York, USA" },
    { label: "DHK", value: "DHK", subText: "Dhaka, Bangladesh" },
    { label: "LHR", value: "LHR", subText: "London, UK" },
    { label: "DXB", value: "DXB", subText: "Dubai, UAE" },
  ];
  const airlines = [
    "Emirates",
    "American Airlines",
    "Delta Airlines",
    "United Airlines",
    "Qatar Airways",
    "British Airways",
  ];
  const trip_types = [
    { label: "One way", value: "oneway" },
    { label: "Round way", value: "roundway" },
    { label: "Multi way", value: "multiway" },
  ];
  const fare_type = [
    { label: "Regular Fare", value: "rugularfare" },
    { label: "Umrah Fare", value: "umrahfare" },
    { label: "NDC", value: "ndc" },
  ];
  const dropdownData: DropdownOption[] = [
    {
      label: "Economy",
      options: ["Economy", "Premium Economy", "Business", "First Class"],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideDropdown = dropdownRefs.current.some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      if (!clickedInsideDropdown) {
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
  const handleSearch = () => {
    const searchData = {
      tripType: selectedTrip,
      fareOption: selectedFareOption,
      passengerCounts,
      flightData: selectedTrip === "multiway" ? flightData : [flightData[0]],
    };

    console.log("Search Data:", searchData);
    navigate("/flight-search");
  };
  useEffect(() => {
    setFilteredAirlines(
      airlines.filter((airline) =>
        airline.toLowerCase().includes(airlineSearch.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [airlineSearch]);

  const handleEconomySelect = (option: string) => {
    setSelectedEconomy(option);
    setOpenDropdown(null);
  };

  return (
    <div>
      <div className=" flex-col  items-end xl:flex-row flex justify-between mb-[1.5rem] xl:mb-[2.438rem]">
        <div className="flex flex-row items-end  gap-1 w-full md:gap-4 xl:gap-[3.375rem]  ">
          {trip_types.map((option) => (
            <label
              key={option.value}
              className="flex   w-full md:w-auto  gap-1 xl:gap-[1.063rem]  items-center cursor-pointer   "
            >
              <input
                type="radio"
                name="journey-type"
                value={option.value}
                checked={selectedTrip === option.value}
                onChange={() => setSelectedTrip(option.value)}
                className="radio radio-primary radio-sm xl:radio-md"
              />

              <span className="text-xs xl:text-[1.188rem] text-gray ">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        <div className="flex mt-[1rem] xl:mt-0  md:w-full xl:w-auto   items-end justify-between xl:justify-normal flex-wrap md:flex-nowrap gap-[0.5rem] md:gap-[1.563rem]">
          <div
            className="relative   xl:mt-0 "
            ref={(el) => (dropdownRefs.current[0] = el)}
          >
            <div
              role="button"
              className="flex justify-between    items-center border-b border-gray_light_3 cursor-pointer w-[9rem] md:w-[14.188rem] xl:w-[11rem]  2xl:w-[13rem]"
              onClick={() => setOpenDropdown((prev) => (prev === 0 ? null : 0))}
            >
              <span className="text-black_1 text-xs  xl:text-[1.375rem] pb-1 xl:pb-2 ">
                {`${totalPassengers} Passenger${
                  totalPassengers > 1 ? "s" : ""
                }`}
              </span>
              <IoIosArrowDown className="text-primary" size={20} />
            </div>
            {openDropdown === 0 && (
              <PassengerDropdown
                initialCounts={passengerCounts}
                onChange={setPassengerCounts}
                setTotalPassengers={setTotalPassengers}
                setOpenDropdown={setOpenDropdown}
              />
            )}
          </div>

          {dropdownData.map((dropdown, index) => (
            <div
              key={index + 1}
              className="relative "
              ref={(el) => (dropdownRefs.current[index + 1] = el)}
            >
              <div
                role="button"
                className="flex justify-between items-center   border-b border-gray_light_3 cursor-pointer w-[9rem] md:w-[14.188rem] xl:w-[11rem]  2xl:w-[15rem]"
                onClick={() =>
                  setOpenDropdown((prev) =>
                    prev === index + 1 ? null : index + 1
                  )
                }
              >
                <span className="text-black_1 text-xs xl:text-[1.375rem] pb-1  xl:pb-2">
                  {selectedEconomy}
                </span>
                <IoIosArrowDown className="text-primary" size={20} />
              </div>

              {openDropdown === index + 1 && (
                <ul className="absolute   left-0 mt-1 bg-white rounded-lg shadow z-[10] w-[10rem] xl:w-[12rem] p-2">
                  {dropdown.options.map((item, idx) => (
                    <li
                      key={idx}
                      className={` cursor-pointer ${
                        selectedEconomy === item ? "rounded bg-skyblue" : ""
                      }`}
                      onClick={() => handleEconomySelect(item)}
                    >
                      <a className="block px-3 py-2 rounded my-1 hover:bg-skyblue cursor-pointer text-xs xl:text-base">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div
            className="relative w-full  "
            ref={(el) => (dropdownRefs.current[2] = el)}
          >
            <input
              type="text"
              value={airlineSearch}
              onChange={(e) => setAirlineSearch(e.target.value)}
              className="border-b    border-gray_light_3   w-full xl:w-[14.188rem]  text-xs xl:text-[1.375rem]  px-2   focus:outline-none    "
              placeholder="Preferred Airline"
              onClick={() => setOpenDropdown((prev) => (prev === 2 ? null : 2))}
            />
            {airlineSearch && openDropdown === 2 && (
              <ul className="absolute left-0 mt-1 bg-white rounded-lg shadow z-[10] w-[14.188rem] p-2">
                {filteredAirlines.length > 0 ? (
                  filteredAirlines.map((airline) => (
                    <li
                      key={airline}
                      className="block px-3  py-2 rounded cursor-pointer hover:bg-skyblue text-xs lg:text-base"
                      onClick={() => setAirlineSearch(airline)}
                    >
                      {airline}
                    </li>
                  ))
                ) : (
                  <li className="block px-3 py-2 text-gray-500 text-xs lg:text-base">
                    No results found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {(selectedTrip === "multiway" ? flights : flights.slice(0, 1)).map(
          (_, index) => (
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
      <div
        className={`    w-full  flex flex-col lg:flex-row gap-[3.313rem] items-center   mt-[1.25rem] lg:mt-[2.563rem]  ${
          selectedTrip === "multiway"
            ? "justify-center md:justify-between"
            : "justify-center md:justify-end"
        }`}
      >
        {selectedTrip === "multiway" && (
          <div className="w-full  lg:w-5/12 ">
            <button
              className={`text-primary    justify-center w-full lg:w-auto bg-gray_light_4  rounded-xl px-[2.594rem]  py-[1rem] lg:py-[1.125rem] gap-2 flex items-center ${
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
        <div className=" w-full lg:w-auto flex gap-[1.5rem] lg:gap-[3.313rem] flex-col lg:flex-row">
          <div className="flex  gap-[1.563rem]  items-center">
            {fare_type.map((option) => (
              <label
                key={option.value}
                className="flex gap-1 lg:gap-[1.063rem] items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="fare-type"
                  value={option.value}
                  checked={selectedFareOption === option.value}
                  onChange={() => setSelectedFareOption(option.value)}
                  className="radio radio-primary radio-sm lg:radio-md "
                />

                <span className="text-xs lg:text-[1.188rem] text-gray ">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          <Button
            text="Search"
            className="h-[3rem]  lg:h-[4.375rem] px-[4.969rem] py-[0.969rem] text-base lg:text-[1.625rem] leading-none"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
