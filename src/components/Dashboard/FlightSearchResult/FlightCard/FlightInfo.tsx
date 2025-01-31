import { IoIosAirplane } from "react-icons/io";
import FlightFareDetails from "./FlightFareDetails";

interface FlightInfoProps {
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
  grossFare: number;
  netFare: number;
  currency: string;
  onChooseFlight: () => void;
}

const FlightInfo: React.FC<FlightInfoProps> = ({
  airline,
  departure,
  arrival,
  duration,
  isDirect,
  grossFare,
  netFare,
  currency,
  onChooseFlight,
}) => {
  return (
    <div className="px-[1.313rem] pt-[1.938rem] pb-[1.813rem] grid grid-cols-12 items-center ">
      <div className="col-span-8   ">
        <div className="flex justify-between  items-center w-full">
          <div className="">
            <div className="flex items-center gap-[0.375rem]">
              <img
                src={airline.logoUrl}
                alt={`${airline.name} logo`}
                className="w-[3.625rem] h-[2.063rem]"
              />

              <div className="font-bold text-[1.5rem]">{airline.name}</div>
            </div>
            <div className="flex items-center gap-[1.063rem] pt-2">
              <div className="text-[1.188rem] text-gray">
                {airline.flightNumber}
              </div>
              <span className="bg-primary font-normal text-white text-[0.875rem] px-[1.125rem] py-1 rounded-md">
                {airline.classType}
              </span>
            </div>
          </div>
          <div className="flex gap-[1.5rem] items-center">
            <div className="">
              <div className=" font-bold leading-none text-[2.313rem]">
                {departure.time}
              </div>
              <div className="text-gray text-[1.188rem]">
                {departure.airport}
              </div>
            </div>
            <div className="text-4xl text-primary flex items-center flex-col">
              <div className=" relative flex items-center px-[1rem] justify-between">
                <IoIosAirplane className="absolute left-0" />
                <div className=" border w-[13rem]   border-black_1 "></div>
                <IoIosAirplane className="absolute right-0" />
              </div>

              <div className="text-[1.188rem] text-gray flex">
                <p>{duration}</p>
                <span className="mx-1">•</span>
                <span>{isDirect ? "Direct" : "Connecting"}</span>
              </div>
              <div></div>
            </div>
            <div className="">
              <div className="font-bold leading-none text-[2.313rem]">
                {arrival.time}
              </div>
              <div className="text-gray text-[1.188rem]">{arrival.airport}</div>
            </div>
          </div>
        </div>
        <div className="mt-[2.563rem] flex justify-between  items-center w-full">
          <div className="">
            <div className="flex items-center gap-[0.375rem]">
              <img
                src={airline.logoUrl}
                alt={`${airline.name} logo`}
                className="w-[3.625rem] h-[2.063rem]"
              />

              <div className="font-bold text-[1.5rem]">{airline.name}</div>
            </div>
            <div className="flex items-center gap-[1.063rem]  pt-2">
              <div className="text-[1.188rem] text-gray">
                {airline.flightNumber}
              </div>
              <span className="bg-primary font-normal text-white text-[0.875rem] px-[1.125rem] py-1 rounded-md">
                {airline.classType}
              </span>
            </div>
          </div>
          <div className="flex gap-[1.5rem] items-center">
            <div className="">
              <div className=" font-bold leading-none text-[2.313rem]">
                {departure.time}
              </div>
              <div className="text-gray text-[1.188rem]">
                {departure.airport}
              </div>
            </div>
            <div className="text-4xl text-primary flex items-center flex-col">
              <div className=" relative flex items-center px-[1rem] justify-between">
                <IoIosAirplane className="absolute left-0" />
                <div className=" border w-[13rem]   border-black_1 "></div>
                <IoIosAirplane className="absolute right-0" />
              </div>

              <div className="text-[1.188rem] text-gray flex">
                <p>{duration}</p>
                <span className="mx-1">•</span>
                <span>{isDirect ? "Direct" : "Connecting"}</span>
              </div>
              <div></div>
            </div>
            <div className="">
              <div className="font-bold leading-none text-[2.313rem]">
                {arrival.time}
              </div>
              <div className="text-gray text-[1.188rem]">{arrival.airport}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 justify-end flex">
        <FlightFareDetails
          grossFare={grossFare}
          netFare={netFare}
          currency={currency}
          onChooseFlight={onChooseFlight}
        />
      </div>
    </div>
  );
};

export default FlightInfo;
