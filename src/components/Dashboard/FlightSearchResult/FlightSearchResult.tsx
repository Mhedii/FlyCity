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
import { useSelector } from "react-redux";
import {
  selectBaggagePolicy,
  selectFareType,
  selectFlightType,
  selectLayover,
  selectPriceRange,
  selectRefundability,
  selectSchedule,
  selectStops,
} from "../../../redux/features/Filters/FilterSelectors";
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
  const { search } = useLocation();
  // const [airlines, setAirlines] = useState(airlinesData);
  const [airlines, setAirlines] = useState(
    airlinesData.map((a) => ({ ...a, checked: false }))
  );
  const [selectedFilter, setSelectedFilter] = useState("cheapest");
  const [flightData, setFlightData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [earliestTime, setEarliestTime] = useState("--:--");
  const [fastestTime, setFastestTime] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);

  const fareType = useSelector(selectFareType);
  const refundability = useSelector(selectRefundability);
  const flightType = useSelector(selectFlightType);
  const stops = useSelector(selectStops);
  const baggagePolicy = useSelector(selectBaggagePolicy);
  const selectedSchedule = useSelector(selectSchedule);
  const selectedLayover = useSelector(selectLayover);
  const priceRange = useSelector(selectPriceRange);

  const toggleAirline = (id: string) => {
    setAirlines((prev) =>
      prev.map((airline) =>
        airline.id === id ? { ...airline, checked: !airline.checked } : airline
      )
    );
  };
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleModify = () => {
    console.log("Modify clicked");
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
    const fetchFlights = async () => {
      setLoading(true);
      setError("");

      const token = getAuthToken();
      const appData = getAppDataFromLocalStorage();
      const flightApis = appData?.data.agentInfo?.flightApis || [];

      if (!token || flightApis.length === 0) {
        setError("Authentication failed or no available APIs.");
        setLoading(false);
        return;
      }

      try {
        const allFlights = await Promise.all(
          flightApis.map(async (apiId) => {
            const queryParams = await parseQueryToObject(search, apiId);
            const response = await flightSearch(queryParams, token);
            return response?.results || [];
          })
        );

        setFlightData(allFlights.flat());
      } catch (err) {
        setError("Error fetching flights.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchFlights();
  }, [search]);
  const convertToMinutes = (timeString) => {
    let totalMinutes = 0;
    const dayMatch = timeString.match(/(\d+)d/);
    const hourMatch = timeString.match(/(\d+)h/);
    const minuteMatch = timeString.match(/(\d+)m/);

    if (dayMatch) totalMinutes += parseInt(dayMatch[1]) * 24 * 60; // convert days to minutes
    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60; // convert hours to minutes
    if (minuteMatch) totalMinutes += parseInt(minuteMatch[1]); // add minutes directly

    return totalMinutes;
  };

  const filteredFlights = flightData
    .filter((flight) => {
      //1.  Airline Filter (if airlines are selected)
      const selectedAirlines = airlines.filter((airline) => airline.checked);
      if (
        selectedAirlines.length > 0 &&
        !selectedAirlines.some(
          (airline) => airline.id === flight.validatingCarrierCode
        )
      ) {
        return false;
      }

      // 2. Fare Type Filter
      if (
        fareType.length > 0 &&
        !fareType.includes(flight.fares[0]?.fareInfoTitle)
      ) {
        return false;
      }

      //3.  Refundability Filter
      if (refundability && flight.totalFare.refundable !== refundability) {
        return false;
      }

      // 4. Flight Type Filter
      if (flightType && flight.flightType !== flightType) {
        return false;
      }

      // 5. Stops Filter

      if (
        Array.isArray(stops) && stops.length > 0
          ? !stops.includes(flight.stops)
          : flight.stops < stops
      ) {
        return false;
      }

      //6. Baggage Policy Filter

      const baggageWeights =
        flight.fares[0]?.passengerFares[0]?.baggages.map((bag) => bag.weight) ||
        [];
      if (
        baggagePolicy.length > 0 &&
        !baggagePolicy.some((weight) => baggageWeights.includes(weight))
      ) {
        return false;
      }
      //7. Price Range Filter
      if (
        flight.totalFare.totalFare < priceRange.min ||
        flight.totalFare.totalFare > priceRange.max
      ) {
        return false;
      }

      return true; // If all filters pass, include the flight
    })
    .sort((a, b) => {
      if (selectedFilter === "cheapest")
        return a.totalFare.totalFare - b.totalFare.totalFare;
      if (selectedFilter === "earliest") {
        return a.flights[0].flightSegments[0].departure.depTime.localeCompare(
          b.flights[0].flightSegments[0].departure.depTime
        );
      }
      if (selectedFilter === "fastest")
        // return a.flights[0].totalElapsedTime - b.flights[0].totalElapsedTime;
        return (
          convertToMinutes(a.flights[0].totalElapsedTime) -
          convertToMinutes(b.flights[0].totalElapsedTime)
        );
      // return a.flights[0].totalElapsedTime
      //   .toString()
      //   .localeCompare(b.flights[0].totalElapsedTime.toString());

      return 0;
    });

  const formatDuration = (minutes: number) => {
    console.log("Minutes", minutes);
    if (minutes <= 0 || isNaN(minutes)) return "--:--";

    const days = Math.floor(minutes / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
    const mins = minutes % 60;

    if (days > 0) return `${days}d ${hours}h ${mins}m`;
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  useEffect(() => {
    if (filteredFlights.length === 0) {
      setCheapestPrice(0);
      setEarliestTime("--:--");
      setFastestTime(0);
      return;
    }

    // Compute Cheapest Price
    const minPrice = Math.min(
      ...filteredFlights.map((flight) => flight.totalFare.totalFare)
    );

    // Compute Earliest Departure Time
    const earliestDepTime =
      filteredFlights
        .map((flight) => flight.flights[0].flightSegments[0].departure.depTime)
        .sort()[0] || "--:--";

    // Compute Fastest Flight Time
    const minDuration = Math.min(
      ...filteredFlights.map((flight) => {
        // Ensure to parse the duration if it's in a string format like "01h 00m"
        const duration = flight.flights[0].totalElapsedTime;
        const match = duration.match(/(\d+)h (\d+)m/);
        if (match) {
          const hours = parseInt(match[1], 10);
          const minutes = parseInt(match[2], 10);
          return hours * 60 + minutes; // Convert to total minutes
        }
        return 0;
      })
    );

    console.log("Min", minDuration);
    setCheapestPrice(minPrice);
    setEarliestTime(earliestDepTime);
    setFastestTime(minDuration);
  }, [filteredFlights]); // Runs whenever filteredFlights changes

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
            { label: "Cheapest", value: "cheapest", price: cheapestPrice },
            { label: "Earliest", value: "earliest", time: earliestTime },
            {
              label: "Fastest",
              value: "fastest",
              time: formatDuration(fastestTime),
            },
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
                { label: "Cheapest", value: "cheapest", price: cheapestPrice },
                { label: "Earliest", value: "earliest", time: earliestTime },
                {
                  label: "Fastest",
                  value: "fastest",
                  time: formatDuration(fastestTime),
                },
              ]}
              selected={selectedFilter}
              onSelect={handleFilterChange}
              onModify={handleModify}
            />
            <AirlineSlider airlines={airlines} onToggle={toggleAirline} />
            <div className=" flex justify-between items-center  xl:mt-[1.944rem] mb-[1.188rem]">
              {filteredFlights && filteredFlights.length > 0 && (
                // {filteredFlights && filteredFlights.results.length > 0 && (
                <p className="font-semibold lg:font-bold text-base  xl:text-[2.063rem]">
                  {filteredFlights.length} Available Flights
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
              {filteredFlights && filteredFlights.length > 0
                ? filteredFlights.map((flight: any, index: number) => (
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
