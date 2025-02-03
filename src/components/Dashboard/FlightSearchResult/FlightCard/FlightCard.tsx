import React from "react";
import FlightFeatures from "./FlightFeatures";
import FlightInfo from "./FlightInfo";
import FlightLinks from "./FlightLink/FlightLinks";

const FlightCard: React.FC<FlightInfoProps> = ({
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
    <div className=" rounded-xl  mb-[2.063rem] bg-white">
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

      <hr className="my-2 xl:my-4 text-gray_light_2 hidden xl:block" />
      {features.length > 0 && <FlightFeatures features={features} />}
      <hr className="my-2 xl:my-4 text-gray_light_2 hidden xl:block" />

      {links.length > 0 && (
        <>
          <FlightLinks links={links} />
        </>
      )}
    </div>
  );
};

export default FlightCard;
