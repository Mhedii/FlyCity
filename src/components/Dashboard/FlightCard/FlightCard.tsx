import React from "react";
import FlightInfo from "./FlightInfo";
import FlightFareDetails from "./FlightFareDetails";
import FlightLinks from "./FlightLinks";
import FlightFeatures from "./FlightFeatures";

interface FlightCardProps {
  airline: {
    name: string;
    logoUrl: string;
    flightNumber: string;
    classType: string;
  };
  departure: {
    time: string;
    airport: string;
  };
  arrival: {
    time: string;
    airport: string;
  };
  duration: string;
  isDirect: boolean;
  features?: string[];
  grossFare: number;
  netFare: number;
  currency: string;
  links?: string[];
  onChooseFlight: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  departure,
  arrival,
  duration,
  isDirect,
  features = [],
  grossFare,
  netFare,
  currency,
  links = [],
  onChooseFlight,
}) => {
  return (
    <div className=" rounded-xl  p-4 bg-white">
      <FlightInfo
        airline={airline}
        departure={departure}
        arrival={arrival}
        duration={duration}
        isDirect={isDirect}
      />
      <hr className="my-4" />
      {features.length > 0 && <FlightFeatures features={features} />}
      <hr className="my-4" />
      <FlightFareDetails
        grossFare={grossFare}
        netFare={netFare}
        currency={currency}
        onChooseFlight={onChooseFlight}
      />
      {links.length > 0 && (
        <>
          <hr className="my-4" />
          <FlightLinks links={links} />
        </>
      )}
    </div>
  );
};

export default FlightCard;
