import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdAdd } from "react-icons/io";
import Button from "../../Shared/Button";
import FlightDestinationSet from "./FlightDestinationSet";
import PassengerDropdown from "./PassengerDropdown";
import { useNavigate } from "react-router";
import { environment } from "../../Shared/environment";

interface PassengerCounts {
  adults: number;
  children: number;
  kids: number;
  infants: number;
}
const MAX_FLIGHT_SETS = 5;

const FlightSearchForm: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<number>(1);
  const [selectedFareOption, setSelectedFareOption] = useState<number>(1);
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
  const [selectedEconomyIndex, setSelectedEconomyIndex] = useState<number>(1);
  const [airlineSearch, setAirlineSearch] = useState<string>("");
  // const [airportInfo, setAirportInfo] = useState<string[]>([]);
  const [filteredAirlines, setFilteredAirlines] = useState<string[]>([]);
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  const envData = environment.SearchOptions.flight;

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
      setFlightData((prev) => [...prev, { from: "DAC", to: "DXB" }]);
    }
  };

  const handleRemoveFlight = (index: number) => {
    setFlights((prev) => prev.filter((_, i) => i !== index));
    setFlightData((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSearch = () => {
    const formattedDepartureDate = departureDate.toISOString().split("T")[0];
    const formattedReturnDate = returnDate.toISOString().split("T")[0];
    // const query = `origin=${flightData[0].from}&dest=${flightData[0].to}&flyDate=${formattedDepartureDate}&returnDate=${formattedReturnDate}&tripType=${selectedTrip}&fareType=${selectedFareOption}&tripClass=${selectedEconomyIndex}&adult=${passengerCounts.adults}&child=${passengerCounts.children}&infant=${passengerCounts.infants}&airlines=${airlineSearch}`;
    // const query = [
    //   `origin=${flightData[0].from}`,
    //   `dest=${flightData[0].to}`,
    //   `flyDate=${formattedDepartureDate}`,
    //   `returnDate=${formattedReturnDate}`,
    //   selectedTrip ? `tripType=${selectedTrip}` : null,
    //   selectedFareOption ? `fareType=${selectedFareOption}` : null,
    //   selectedEconomyIndex ? `tripClass=${selectedEconomyIndex}` : null,
    //   passengerCounts.adults ? `adult=${passengerCounts.adults}` : null,
    //   passengerCounts.children ? `child=${passengerCounts.children}` : null,
    //   passengerCounts.infants ? `infant=${passengerCounts.infants}` : null,
    //   airlineSearch ? `airlines=${airlineSearch}` : null,
    // ]
    //   .filter(Boolean) // Remove any null or undefined values
    //   .join("&");
    // navigate(`/search/flight?${query}`);
    const queryParams: string[] = [];
    if (selectedTrip === 3) {
      flightData.forEach((flight, index) => {
        queryParams.push(`origin=${flight.from}`);
        queryParams.push(`dest=${flight.to}`);
        queryParams.push(`flyDate=${formattedDepartureDate[index]}`);
      });
    } else {
      // One-way & Round-trip
      queryParams.push(`origin=${flightData[0].from}`);
      queryParams.push(`dest=${flightData[0].to}`);
      queryParams.push(`flyDate=${formattedDepartureDate[0]}`);

      if (selectedTrip === 2) {
        // Round-trip: Add return date
        queryParams.push(`returnDate=${formattedReturnDate}`);
      }
    }

    // Common query params
    const commonParams = [
      selectedTrip ? `tripType=${selectedTrip}` : null,
      selectedFareOption ? `fareType=${selectedFareOption}` : null,
      selectedEconomyIndex ? `tripClass=${selectedEconomyIndex}` : null,
      passengerCounts.adults ? `adult=${passengerCounts.adults}` : null,
      passengerCounts.children ? `child=${passengerCounts.children}` : null,
      passengerCounts.infants ? `infant=${passengerCounts.infants}` : null,
      airlineSearch ? `airlines=${airlineSearch}` : null,
    ].filter(Boolean);

    const queryString = [...queryParams, ...commonParams].join("&");
    navigate(`/search/flight?${queryString}`);
  };
  useEffect(() => {
    setFilteredAirlines(
      envData.airlines.filter((airline) =>
        airline.toLowerCase().includes(airlineSearch.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [airlineSearch]);
  // useEffect(() => {
  //   const airlines = localStorage.getItem("app-airport-list");
  //   setAirportInfo(airlines ? JSON.parse(airlines) : []);
  // }, []);

  const handleEconomySelect = (id: number, label: string) => {
    setSelectedEconomyIndex(id - 1);
    setSelectedEconomy(label);
    setOpenDropdown(null);
  };

  return (
    <div>
      <div className=" flex-col  items-end xl:flex-row flex justify-between mb-[1.5rem] xl:mb-[2.438rem]">
        <div className="flex flex-row items-end  gap-1 w-full md:gap-4 xl:gap-[3.375rem]  ">
          {envData.trip_types.map((option) => (
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

          {envData.dropdownData.map((dropdown, index) => (
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
                  {/* {selectedEconomyIndex !== null ? selectedEconomyIndex + 1 : "Select"} */}
                </span>
                <IoIosArrowDown className="text-primary" size={20} />
              </div>

              {openDropdown === index + 1 && (
                <ul className="absolute   left-0 mt-1 bg-white rounded-lg shadow z-[10] w-[10rem] xl:w-[12rem] p-2">
                  {dropdown.options.map((item, idx) => (
                    <li
                      key={idx}
                      className={` cursor-pointer ${
                        selectedEconomyIndex === item.id - 1
                          ? "rounded bg-skyblue"
                          : ""
                      }`}
                      onClick={() => handleEconomySelect(item.id, item.label)}
                    >
                      <a className="block px-3 py-2 rounded my-1 hover:bg-skyblue cursor-pointer text-xs xl:text-base">
                        {item.label}
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
        {(selectedTrip === 3 ? flights : flights.slice(0, 1)).map(
          (_, index) => (
            <FlightDestinationSet
              key={index}
              showReturn={selectedTrip === 2}
              onRemove={() => handleRemoveFlight(index)}
              allowRemove={selectedTrip === 3 && flights.length > 1}
              selectedFrom={flightData[index].from}
              selectedTo={flightData[index].to}
              locationOptions={envData.locationOptions}
              departureDate={departureDate}
              returnDate={returnDate}
              setDepartureDate={setDepartureDate}
              setReturnDate={setReturnDate}
              onLocationChange={(type, value) =>
                handleLocationChange(index, type, value)
              }
            />
          )
        )}
      </div>
      <div
        className={`    w-full  flex flex-col lg:flex-row gap-[3.313rem] items-center   mt-[1.25rem] lg:mt-[2.563rem]  ${
          selectedTrip === 3
            ? "justify-center md:justify-between"
            : "justify-center md:justify-end"
        }`}
      >
        {selectedTrip === 3 && (
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
            {envData.fare_type.map((option) => (
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
