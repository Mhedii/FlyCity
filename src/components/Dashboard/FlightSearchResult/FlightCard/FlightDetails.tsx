import { IoIosAirplane } from "react-icons/io";

const FlightDetails: React.FC<
  Omit<FlightInfoProps, "grossFare" | "netFare" | "currency" | "onChooseFlight">
> = ({ airline, duration, isDirect, flights }) => {
  return (
    <div className="grid grid-cols-12 xl:flex justify-between items-center w-full xl:mb-[2.563rem]">
      <div className="col-span-12">
        <div className="flex items-center gap-[0.375rem]">
          <img
            src={`${import.meta.env.VITE_AIRLINE_LOGO_URL}/${
              flights.flightSegments[0].airline.code
            }.png`}
            alt={`${airline} logo`}
            className="w-[2.5rem] h-[1.5rem] xl:w-[3rem] xl:h-[3rem]"
          />
          <div className="font-bold text-sm xl:text-[1.5rem]">{airline}</div>
        </div>
        <div className="flex items-center gap-[1.063rem] pt-2">
          <div className="text-xs xl:text-[1.188rem] text-gray">
            {/* {airline.flightNumber} */}
            {flights.flightSegments[0].airline.code}{" "}
            {flights.flightSegments[0].airline.flightNo}
          </div>
          <span className="bg-primary font-normal text-white text-xs xl:text-[0.875rem] px-[0.5rem] xl:px-[1.125rem] py-1 rounded-md">
            {flights.cabinClass}
            {/* {airline.classType} */}
          </span>
        </div>
      </div>
      <div className="mt-2 xl:mt-0  justify-between xl:justify-normal col-span-12 flex gap-[1.5rem] items-center">
        <div>
          <div className="font-bold leading-none text-sm xl:text-[2.313rem]">
            {/* {departure.time} */}
            {flights?.flightSegments[0].departure.depTime}
          </div>
          <div className="text-gray text-xs xl:text-[1.188rem]">
            {flights?.flightSegments[0].departure.airport.airportCode}
            {/* {departure.airport} */}
          </div>
        </div>

        <div className="text-4xl  text-primary flex items-center justify-between  flex-col">
          <div className="relative flex items-center px-[1rem] justify-between mt-4 xl:mt-0 pb-4 xl:pb-0">
            <IoIosAirplane className="absolute left-0" />
            <div className="border w-[10rem] md:w-[13rem] border-black_1"></div>
            <IoIosAirplane className="absolute right-0" />
          </div>
          <div className="text-xs xl:text-[1.188rem] text-gray flex mt-4">
            <p>{duration}</p>
            <span className="mx-1">•</span>
            <span>{isDirect ? "Direct" : "Connecting"}</span>
          </div>
        </div>
        <div>
          <div className="font-bold leading-none text-sm xl:text-[2.313rem]">
            {
              flights?.flightSegments[
                flights.flightSegments.length > 0
                  ? flights.flightSegments.length - 1
                  : 0
              ].arrival.arrTime
            }
            {/* {arrival.time} */}
          </div>
          <div className="text-gray text-xs xl:text-[1.188rem]">
            {/* {arrival.airport} */}
            {
              flights?.flightSegments[
                flights.flightSegments.length > 0
                  ? flights.flightSegments.length - 1
                  : 0
              ].arrival.airport.airportCode
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightDetails;
