import { useState } from "react";
import AirlineSlider from "./Filters/AirlineSlider";
import FilterByAmount from "./Filters/FilterByAmount";
import FlightCard from "./FlightCard/FlightCard";
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

  const toggleAirline = (id: string) => {
    setAirlines((prev) =>
      prev.map((airline) =>
        airline.id === id ? { ...airline, checked: !airline.checked } : airline
      )
    );
  };

  return (
    <div>
      <div className=" ">
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
      <p className="font-bold text-[2.063rem] mt-[1.944rem] mb-[1.188rem]">
        160 Available Flights
      </p>
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
    </div>
  );
};

export default FlightSearchResult;
