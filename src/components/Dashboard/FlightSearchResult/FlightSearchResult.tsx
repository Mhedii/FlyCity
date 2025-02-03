import { useEffect, useState } from "react";
import AirlineSlider from "./Filters/AirlineSlider";
import FilterByAmount from "./Filters/FilterByAmount";
import FlightCard from "./FlightCard/FlightCard";
import { CiFilter } from "react-icons/ci";
import FilterByAmountMiniDevice from "./Filters/FilterByAmountMiniDevice";
import FlightFiltersModal from "./Filters/FlightFiltersModal";
const airlinesData = [
  {
    id: "biman",
    name: "Biman Bangladesh",
    logo: "/assets/images/FlightSchedules/biman_bangladesh.png",
    checked: false,
  },
  {
    id: "srilankan",
    name: "Srilankan Airlines",
    logo: "/assets/images/FlightSchedules/srilankan_airlines.png",
    checked: false,
  },
  {
    id: "qatar",
    name: "Qatar Airways",
    logo: "/assets/images/FlightSchedules/biman_bangladesh.png",
    checked: false,
  },
  {
    id: "emirates",
    name: "Emirates",
    logo: "/assets/images/FlightSchedules/srilankan_airlines.png",
    checked: false,
  },
];

const FlightSearchResult = () => {
  const [selectedFilter, setSelectedFilter] = useState("fastest");

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleModify = () => {
    console.log("Modify clicked");
  };

  const [airlines, setAirlines] = useState(airlinesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleAirline = (id: string) => {
    setAirlines((prev) =>
      prev.map((airline) =>
        airline.id === id ? { ...airline, checked: !airline.checked } : airline
      )
    );
  };
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      if (currentScrollY <= initialPosition + 50) {
        setIsVisible(true);
      }
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const filterElement = document.querySelector(".filter-component");

    if (filterElement) {
      setInitialPosition(
        filterElement.getBoundingClientRect().top + window.scrollY
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={` filter-component block lg:hidden fixed z-50 bottom-2 transition-opacity duration-300   w-full ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <FilterByAmountMiniDevice
          options={[
            { label: "Cheapest", value: "cheapest", price: 13000 },
            { label: "Earliest", value: "earliest", price: 15000 },
            { label: "Fastest", value: "fastest", price: 17000 },
          ]}
          selected={selectedFilter}
          onSelect={handleFilterChange}
          onModify={handleModify}
        />
      </div>
      <div className="hidden lg:block ">
        <FilterByAmount
          options={[
            { label: "Cheapest", value: "cheapest", price: 13000 },
            { label: "Earliest", value: "earliest", price: 15000 },
            { label: "Fastest", value: "fastest", price: 17000 },
          ]}
          selected={selectedFilter}
          onSelect={handleFilterChange}
          onModify={handleModify}
        />
        <AirlineSlider airlines={airlines} onToggle={toggleAirline} />
      </div>
      <div className=" flex justify-between items-center  xl:mt-[1.944rem] mb-[1.188rem]">
        <p className="font-semibold lg:font-bold text-base  lg:text-[2.063rem]">
          160 Available Flights
        </p>

        <button
          className="flex gap-1 items-center  lg:hidden bg-white py-1 px-2 rounded-lg"
          onClick={() => setIsFilterOpen(true)}
        >
          <span>
            <CiFilter />
          </span>
          All Filters
        </button>
      </div>
      {Array.from({ length: 5 }, () => (
        <FlightCard
          airline={{
            name: "Garuda Indonesia",
            logoUrl: "/assets/images/FlightSchedules/garuda_airlines.png",
            flightNumber: "VO 963",
            classType: "Business",
          }}
          departure={{
            time: "06:00",
            airport: "JKTC",
          }}
          arrival={{
            time: "07:00",
            airport: "SUB",
          }}
          duration="1h 40m"
          isDirect={true}
          features={[
            "Checked in: 20kg",
            "Carry in: 7kg",
            "In-flight entertainment",
            "In-flight meal",
            "Power & USB port",
          ]}
          grossFare={79423}
          netFare={79423}
          currency="SAR"
          links={[
            "Flight Details",
            "Fare Summary",
            "Baggage",
            "Cancellation",
            "Fare terms & policy",
          ]}
          onChooseFlight={() => console.log("Flight chosen!")}
        />
      ))}
      <FlightFiltersModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default FlightSearchResult;
