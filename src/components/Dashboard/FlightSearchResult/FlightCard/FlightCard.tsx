import React from "react";
import FlightFeatures from "./FlightFeatures";
import FlightInfo from "./FlightInfo";
import FlightLinks from "./FlightLinks";

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
    <div className=" rounded-xl   bg-white">
      <FlightInfo
        airline={airline}
        departure={departure}
        arrival={arrival}
        duration={duration}
        isDirect={isDirect}
        grossFare={grossFare}
        netFare={netFare}
        currency={currency}
        onChooseFlight={onChooseFlight}
      />

      <hr className="my-4 text-gray_light_2" />
      {features.length > 0 && <FlightFeatures features={features} />}
      <hr className="my-4 text-gray_light_2" />

      {links.length > 0 && (
        <>
          <FlightLinks links={links} />
        </>
      )}
    </div>
  );
};

export default FlightCard;
