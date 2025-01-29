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
    <div className="flex justify-between items-center text-[1.375rem]">
      <div>
        <div className=" pl-[1.359rem]">
          <span className="font-semibold text-primary ">Gross Fare: </span>
          <span className="line-through decoration-red-500 ">
            {currency} {grossFare.toLocaleString()}
          </span>
        </div>
        <div className="py-[1rem]">
          <IoIosAirplane className="text-primary text-4xl " />
        </div>
        <div className=" pl-[1.359rem]">
          <span className="font-semibold text-[#0A8249]">Net Fare: </span>
          {currency} {netFare.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default FlightFareDetails;
