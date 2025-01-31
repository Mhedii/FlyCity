import React from "react";

interface FlightDetailsProps {
  from: string;
  to: string;
  date: string;
  airline: string;
  flightNumber: string;
  aircraft: string;
  operatedBy: string;
  classType: string;
  availableSeats: number;
  departureTime: string;
  departureDate: string;
  departureAirport: string;
  departureTerminal: string;
  arrivalTime: string;
  arrivalDate: string;
  arrivalAirport: string;
  arrivalTerminal: string;
  baggage: string;
  checkIn: string;
  cabin: string;
  logo: string;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({
  from,
  to,
  date,
  airline,
  flightNumber,
  aircraft,
  operatedBy,
  classType,
  availableSeats,
  departureTime,
  departureDate,
  departureAirport,
  departureTerminal,
  arrivalTime,
  arrivalDate,
  arrivalAirport,
  arrivalTerminal,
  baggage,
  checkIn,
  cabin,
  logo,
}) => {
  return (
    <div className="border border-gray_light_3 p-4 rounded-lg  w-full">
      <h2 className="text-xl font-semibold text-primary">
        {from} to {to}, {date}
      </h2>

      <div className="flex items-start gap-4 mt-2">
        <img src={logo} alt={airline} className=" " />
        <div>
          <p className="font-semibold text-gray-900">
            {airline} <span className="">BG | {flightNumber}</span>
          </p>
          <p className=" text-sm">Aircraft: {aircraft}</p>
          <p className=" text-sm">Operated by: {operatedBy}</p>
          <p className=" text-sm">Economy ({classType})</p>
          <p className=" text-sm">Available seats: {availableSeats}</p>
        </div>
      </div>

      <div className="flex justify-between items-start mt-4">
        <div className="text-start">
          <p className="text-lg font-bold">{departureTime}</p>
          <div className="text-gray">
            <p className=" text-sm">{departureDate}</p>
            <p className=" text-sm">{departureAirport}</p>
            <p className=" text-sm">{departureTerminal}</p>
          </div>
        </div>

        <div className="text-center">
          <p className=" text-sm text-gray">1 hour 0 minute</p>
        </div>
        <div className="text-start">
          <p className="text-lg font-bold">{arrivalTime}</p>
          <div className="text-gray">
            <p className=" text-sm">{arrivalDate}</p>
            <p className=" text-sm">{arrivalAirport}</p>
            <p className=" text-sm">{arrivalTerminal}</p>
          </div>
        </div>
        <p className="flex flex-col text-center text-lg font-bold">
          Baggage{" "}
          <span className="text-gray font-normal text-sm">{baggage}</span>
        </p>
        <p className="flex flex-col text-center text-lg font-bold">
          Check-In{" "}
          <span className="text-gray font-normal text-sm">{checkIn}</span>
        </p>
        <p className="flex flex-col text-center text-lg font-bold">
          Cabin <span className="text-gray font-normal text-sm">{cabin}</span>
        </p>
      </div>
    </div>
  );
};

export default FlightDetails;
