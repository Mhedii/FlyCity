import { IoIosAirplane } from "react-icons/io";

interface FlightFareDetailsProps {
  grossFare: number;
  netFare: number;
  currency: string;
  onChooseFlight: () => void;
}

const FlightFareDetails: React.FC<FlightFareDetailsProps> = ({
  grossFare,
  netFare,
  currency,
}) => {
  return (
    <div className="flex xl:justify-between   w-full xl:w-auto items-center  text-base xl:text-[1.375rem]">
      <div className="flex xl:block gap-2 xl:gap-0 mt-2 xl:mt-0">
        <div className=" xl:pl-[1.359rem] flex xl:gap-1">
          <span className="font-semibold text-primary hidden xl:block ">
            Gross Fare :{" "}
          </span>
          <span className="line-through decoration-red-500 ">
            {currency} {grossFare.toLocaleString()}
          </span>
        </div>
        <div className="py-[1rem]">
          <IoIosAirplane className="text-primary text-4xl hidden xl:block " />
        </div>
        <div className=" xl:pl-[1.359rem] flex xl:gap-1">
          <span className="font-semibold text-[#0A8249] hidden xl:block">
            Net Fare :{" "}
          </span>
          <span className="font-semibold xl:font-normal">
            {currency} {netFare.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightFareDetails;
