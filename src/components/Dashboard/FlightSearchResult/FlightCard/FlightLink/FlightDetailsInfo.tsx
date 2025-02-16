import React from "react";
import { IoIosAirplane } from "react-icons/io";
import FlightPath from "./FlightPath";
import LayoverInfo from "./LayoverInfo";

// interface FlightDetailsInfoProps {
//   from: string;
//   to: string;
//   date: string;
//   airline: string;
//   flightNumber: string;
//   aircraft: string;
//   operatedBy: string;
//   classType: string;
//   availableSeats: number;
//   departureTime: string;
//   departureDate: string;
//   departureAirport: string;
//   departureTerminal: string;
//   arrivalTime: string;
//   arrivalDate: string;
//   arrivalAirport: string;
//   arrivalTerminal: string;
//   baggage: string;
//   checkIn: string;
//   cabin: string;
//   logo: string;
// }

const FlightDetailsInfo: React.FC<FlightDetailsInfoProps> = ({
  // from,
  // to,
  // date,
  // airline,
  // flightNumber,
  // aircraft,
  // operatedBy,
  // classType,
  // availableSeats,
  // departureTime,
  // departureDate,
  // departureAirport,
  // departureTerminal,
  // arrivalTime,
  // arrivalDate,
  // arrivalAirport,
  // arrivalTerminal,
  // baggage,
  // checkIn,
  // cabin,
  // logo,
  flights,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options); // Formats like "Thu, 30 Jan 2025"
  };
  return (
    <div>
      {/* First Header  */}
      <div className="bg-gray_light_3 p-4 flex items-center">
        <p className="font-medium flex items-center gap-2 text-lg">
          {flights.flights[0].flightSegments[0].departure.airport.airportCode}{" "}
          <IoIosAirplane className="text-2xl" />
          {
            flights.flights[0].flightSegments.at(-1)?.arrival?.airport
              .airportCode
          }{" "}
          <span className="text-gray">|</span>
          {formatDate(flights.flights[0]?.flyDate)}
          <span className="text-gray">|</span>{" "}
          <span className="font-semibold">
            {flights.stops === 0
              ? "Non-Stop"
              : flights.stops === 1
              ? "1 Stop"
              : `${flights.stops} Stops`}
          </span>
        </p>
      </div>
      <div className="border border-gray_light_3 p-4 pt-0  rounded-b-lg  w-full">
        {flights.flights.map((flight, flightIndex) => (
          <div key={flightIndex}>
            {flight.flightSegments.map((flightSegment, index) => (
              <div key={index}>
                <div className="flex  items-center gap-[0.375rem] text-lg  mt-4">
                  <img
                    src={`${import.meta.env.VITE_AIRLINE_LOGO_URL}/${
                      flightSegment.airline.code
                    }.png`}
                    alt={`${import.meta.env.VITE_AIRLINE_LOGO_URL}/${
                      flightSegment.airline.name
                    } logo`}
                    className="w-[2.5rem] h-[1.5rem] xl:w-[3.625rem] xl:h-[2.063rem]"
                  />
                  <div className="  flex  items-center   gap-2 divide-gray">
                    <span className="font-semibold px-1 ">
                      {flights.validatingCarrier}
                    </span>
                    <span className="text-gray">|</span>
                    <p className="px-1">
                      {flightSegment.airline.code}{" "}
                      {flightSegment.airline.flightNo}
                    </p>{" "}
                    <span className="text-gray">|</span>{" "}
                    <p className="px-1">251</p>
                    <span className="text-gray">|</span>
                    <p className="px-1">{flightSegment.cabinType} </p>
                    <span className="text-gray">|</span>
                    <p className="text-red-500 px-1 font-medium">
                      {flightSegment.numberOfSeats} Seates Left
                    </p>
                  </div>
                </div>
                <FlightPath
                  departureTime={flightSegment.departure.depTime}
                  departureDate={flightSegment.departure.depDate}
                  departureAirport={` ${
                    flightSegment.departure.airport.terminal
                      ? ` ${flightSegment.departure.airport.terminal} ,`
                      : ""
                  } ${flightSegment.departure.airport.airportName}`}
                  arrivalTime={flightSegment.arrival.arrTime}
                  arrivalDate={flightSegment.arrival.arrDate}
                  arrivalAirport={` ${
                    flightSegment.arrival.airport.terminal
                      ? ` ${flightSegment.arrival.airport.terminal} ,`
                      : ""
                  } ${flightSegment.arrival.airport.airportName}`}
                  duration={flightSegment.elapsedTime}
                />
                {/* {flightSegment?.layoverTime !== null  ? (
                  <LayoverInfo
                    layoverTime={flightSegment?.layoverTime}
                    location={flightSegment.arrival.airport.cityName}
                    showTerminalChange={true}
                  />
                ) : (
                  ""
                )} */}
                {flightSegment.layoverTime !== "" ? (
                  <LayoverInfo
                    layoverTime={flightSegment.layoverTime}
                    location={flightSegment.arrival.airport.cityName}
                    showTerminalChange={true}
                  />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDetailsInfo;
