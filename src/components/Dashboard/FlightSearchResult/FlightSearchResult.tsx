import { useEffect, useState } from "react";
import AirlineSlider from "./Filters/AirlineSlider";
import FilterByAmount from "./Filters/FilterByAmount";
import FlightCard from "./FlightCard/FlightCard";
import { CiFilter } from "react-icons/ci";
import FilterByAmountMiniDevice from "./Filters/FilterByAmountMiniDevice";
import FlightFiltersModal from "./Filters/FlightFiltersModal";
import LineLoading from "../../Shared/LineLoading";
import { useLocation } from "react-router";
import { parseQueryToObject } from "../../../utils/parseQueryToObject";
import {
  getAppDataFromLocalStorage,
  getAuthToken,
} from "../../../utils/authUtils";
import { flightSearch } from "../../../api/flightService";
import ShimmerCard from "./ShimmerEffect/ShimmerCard";
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
  const [airlines, setAirlines] = useState(airlinesData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);
  const { search } = useLocation();
  const [selectedFilter, setSelectedFilter] = useState("fastest");
  const [flightData, setFlightData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleModify = () => {
    console.log("Modify clicked");
  };

  const toggleAirline = (id: string) => {
    setAirlines((prev) =>
      prev.map((airline) =>
        airline.id === id ? { ...airline, checked: !airline.checked } : airline
      )
    );
  };

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
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(search);
  //   const data = queryParams.get("data"); // Assuming 'data' is the query parameter
  //   if (data) {
  //     try {
  //       const parsedData = JSON.parse(decodeURIComponent(data));
  //       setFlightData(parsedData);
  //     } catch (error) {
  //       console.error("Error parsing data:", error);
  //     }
  //   }
  // }, [search]);
  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const data = queryParams.get("data"); // Assuming 'data' is the query parameter
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data));
        setFlightData(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [search]);
  // useEffect(() => {
  //   const fetchFlights = async () => {
  //     setError("");
  //     const token = getAuthToken();
  //     const queryParams = parseQueryToObject(search); // Convert query params into an object

  //     if (!token) {
  //       setError("Authentication token not found.");
  //       setLoading(false);
  //       return;
  //     }
  //     console.log("asd", queryParams);
  //     // const appData = getAppDataFromLocalStorage();
  //     // const flightApis = appData?.data.agentInfo.flightApi;
  //     try {
  //       setLoading(true);
  //       const response = await flightSearch(queryParams, token);

  //       if (response) {
  //         setFlightData(response);
  //       } else {
  //         setError(response.message);
  //       }
  //     } catch (err) {
  //       setError("An error occurred while fetching flights.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFlights();
  // }, [search]);

  useEffect(() => {
    const fetchFlights = async () => {
      setError("");
      setLoading(true);

      const token = getAuthToken();
      const appData = getAppDataFromLocalStorage();
      const flightApis = appData?.data.agentInfo?.flightApis;

      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      if (!Array.isArray(flightApis) || flightApis.length === 0) {
        setError("No flight APIs available.");
        setLoading(false);
        return;
      }

      console.log("Fetching flight data from APIs:", flightApis);

      let allFlights: string[] = [];

      await Promise.all(
        flightApis.map(async (apiId) => {
          try {
            const queryParams = await parseQueryToObject(search, apiId);
            const response = await flightSearch(queryParams, token);

            console.log("API Response:", response);
            console.log("API Response Results:", response?.results);

            if (
              Array.isArray(response?.results) &&
              response.results.length > 0
            ) {
              allFlights = [...allFlights, ...response.results]; // Merge results into temporary array
            }
          } catch (err) {
            console.error(`Error fetching flights from API ${apiId}:`, err);
          }
        })
      );
      setFlightData(allFlights); // Set all merged flight data at once
      setLoading(false);
    };

    fetchFlights();
  }, [search]);

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
      <div className="hidden xl:block ">
        {loading && <LineLoading />}
        {loading ? (
          Array(3)
            .fill(0)
            .map((_, index) => <ShimmerCard key={index} />)
        ) : (
          <>
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
            <div className=" flex justify-between items-center  xl:mt-[1.944rem] mb-[1.188rem]">
              {flightData && flightData.length > 0 && (
                // {flightData && flightData.results.length > 0 && (
                <p className="font-semibold lg:font-bold text-base  xl:text-[2.063rem]">
                  {flightData.length} Available Flights
                </p>
              )}

              <button
                className="flex gap-1 items-center  xl:hidden bg-white py-1 px-2 rounded-lg"
                onClick={() => setIsFilterOpen(true)}
              >
                <span>
                  <CiFilter />
                </span>
                All Filters
              </button>
            </div>
            <div>
              {error && <p className="text-red-500">{error}</p>}
              {flightData && flightData.length > 0
                ? flightData.map((flight: any, index: number) => (
                    // {flightData && flightData.results.length > 0
                    //   ? flightData.results.map((flight: any, index: number) => (
                    <FlightCard
                      key={index}
                      flightInfo={flight}
                      onChooseFlight={() => console.log("Flight chosen!")}
                    />
                  ))
                : !loading && <p>No flights found.</p>}
            </div>

            <div className="xl:hidden">
              <FlightFiltersModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightSearchResult;
