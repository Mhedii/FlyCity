import FlightCard from "./FlightCard/FlightCard";

const FlightSearchResult = () => {
  return (
    <div>
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
