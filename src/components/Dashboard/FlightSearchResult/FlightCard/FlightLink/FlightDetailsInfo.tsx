import React from "react";
// import { FaPlane } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
// import { LuDot } from "react-icons/lu";
import FlightPath from "./FlightPath";
import LayoverInfo from "./LayoverInfo";

interface FlightDetailsInfoProps {
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

const FlightDetailsInfo: React.FC<FlightDetailsInfoProps> = ({
  // from,
  // to,
  // date,
  // airline,
  // flightNumber,
  aircraft,
  // operatedBy,
  // classType,
  availableSeats,
  // departureTime,
  departureDate,
  // departureAirport,
  // departureTerminal,
  // arrivalTime,
  // arrivalDate,
  // arrivalAirport,
  // arrivalTerminal,
  // baggage,
  // checkIn,
  // cabin,
  logo,
}) => {
  return (
    <div>
      <div className="bg-gray_light_3 p-4 flex items-center">
        <p className="font-medium flex items-center gap-2">
          DAC <IoIosAirplane className="text-2xl" /> YEG{" "}
          <span className="text-gray">|</span>
          {departureDate}
          <span className="text-gray">|</span>{" "}
          <span className="font-semibold">2 Stops</span>
        </p>
      </div>
      <div className="border border-gray_light_3 p-4 rounded-b-lg  w-full">
        <div className="flex  items-center gap-[0.375rem] text-lg ">
          <img
            src={logo}
            alt={`${aircraft} logo`}
            className="w-[2.5rem] h-[1.5rem] xl:w-[3.625rem] xl:h-[2.063rem]"
          />
          <div className="  flex  items-center   gap-2 divide-gray">
            <span className="font-semibold px-1 ">Qatar Airways</span>
            <span className="text-gray">|</span>
            <p className="px-1">QR 739</p> <span className="text-gray">|</span>{" "}
            <p className="px-1">251</p>
            <span className="text-gray">|</span>
            <p className="px-1">Econoly - N </p>
            <span className="text-gray">|</span>
            <p className="text-red-500 px-1 font-medium">
              {availableSeats} Seates Left
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-12  justify-between mt-4">
          <div className="col-span-5">
            <div className="text-start">
              <p className="text-lg font-bold">{departureTime}</p>
              <div className="">
                <p className=" text-sm">{departureDate}</p>
                <p className=" text-sm">
                  Terminal: 1, Hazrat Shahjalal International Airport (DAC)
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div className="flex flex-col items-center justify-center  ">
                <div className="relative w-[15rem] h-10">
                  <svg
                    className="absolute top-1 left-0 w-[15rem] h-full  "
                    viewBox="0 0 420 160 "
                  >
                    <path
                      d="M5,140 Q225,0 415,140"
                      stroke="#A0AAC0"
                      strokeWidth="1.5"
                      fill="transparent"
                      width={250}
                    />
                    <circle cx="5" cy="140" r="8" fill="black" />
                    <circle cx="415" cy="140" r="8" fill="black" />
                  </svg>
                  <IoIosAirplane className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-2xl" />
                </div>

                <div className="mt-[-0.5rem] text-xs text-gray">6h 15m</div>
              </div>
            </div>
          </div>

          <div className="col-span-5  ">
            <div className="text-end">
              <p className="text-lg font-bold">{departureTime}</p>
              <div className="">
                <p className=" text-sm">{departureDate}</p>
                <p className=" text-sm">
                  Terminal: B, Los Angeles International Airport (LAX)
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <FlightPath
          departureTime="10:30 AM"
          departureDate="Feb 12, 2025"
          departureAirport="1, Hazrat Shahjalal International Airport (DAC)"
          arrivalTime="4:45 PM"
          arrivalDate="Feb 12, 2025"
          arrivalAirport="B, Los Angeles International Airport (LAX)"
          duration="6h 15m"
        />

        <LayoverInfo
          layoverTime="4h 30m"
          location="New York"
          showTerminalChange={true}
        />
        <FlightPath
          departureTime="10:30 AM"
          departureDate="Feb 12, 2025"
          departureAirport="1, Hazrat Shahjalal International Airport (DAC)"
          arrivalTime="4:45 PM"
          arrivalDate="Feb 12, 2025"
          arrivalAirport="B, Los Angeles International Airport (LAX)"
          duration="6h 15m"
        />

        {/* <h2 className="text-xl font-semibold text-primary">
        {from} to {to}, {date}
      </h2>

      <div className="flex items-start gap-4 mt-2">
        <img src={logo} alt={airline} className=" " />
        <div>
          <p className="font-semibold flex items-center">
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
      </div> */}
      </div>
    </div>
  );
};

export default FlightDetailsInfo;
