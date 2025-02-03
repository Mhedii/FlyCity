import { IoIosAirplane } from "react-icons/io";

const FlightDetails: React.FC<
  Omit<FlightInfoProps, "grossFare" | "netFare" | "currency" | "onChooseFlight">
> = ({ airline, departure, arrival, duration, isDirect }) => {
  return (
    <div className="grid grid-cols-12 xl:flex justify-between items-center w-full">
      <div className="col-span-12">
        <div className="flex items-center gap-[0.375rem]">
          <img
            src={airline.logoUrl}
            alt={`${airline.name} logo`}
            className="w-[2.5rem] h-[1.5rem] xl:w-[3.625rem] xl:h-[2.063rem]"
          />
          <div className="font-bold text-sm xl:text-[1.5rem]">
            {airline.name}
          </div>
        </div>
        <div className="flex items-center gap-[1.063rem] pt-2">
          <div className="text-xs xl:text-[1.188rem] text-gray">
            {airline.flightNumber}
          </div>
          <span className="bg-primary font-normal text-white text-xs xl:text-[0.875rem] px-[0.5rem] xl:px-[1.125rem] py-1 rounded-md">
            {airline.classType}
          </span>
        </div>
      </div>
      <div className="mt-2 xl:mt-0  justify-between xl:justify-normal col-span-12 flex gap-[1.5rem] items-center">
        <div>
          <div className="font-bold leading-none text-sm xl:text-[2.313rem]">
            {departure.time}
          </div>
          <div className="text-gray text-xs xl:text-[1.188rem]">
            {departure.airport}
          </div>
        </div>

        <div className="text-4xl  text-primary flex items-center flex-col">
          <div className="relative flex items-center px-[1rem] justify-between mt-4 xl:mt-0 pb-4 xl:pb-0">
            <IoIosAirplane className="absolute left-0" />
            <div className="border w-[10rem] md:w-[13rem] border-black_1"></div>
            <IoIosAirplane className="absolute right-0" />
          </div>
          <div className="text-xs xl:text-[1.188rem] text-gray flex xl:pt-2">
            <p>{duration}</p>
            <span className="mx-1">•</span>
            <span>{isDirect ? "Direct" : "Connecting"}</span>
          </div>
        </div>
        <div>
          <div className="font-bold leading-none text-sm xl:text-[2.313rem]">
            {arrival.time}
          </div>
          <div className="text-gray text-xs xl:text-[1.188rem]">
            {arrival.airport}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightDetails;
