import { IoIosAirplane } from "react-icons/io";

interface FlightPathProps {
  departureTime: string;
  departureDate: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalDate: string;
  arrivalAirport: string;
  duration: string;
}

const FlightPath: React.FC<FlightPathProps> = ({
  departureTime,
  departureDate,
  departureAirport,
  arrivalTime,
  arrivalDate,
  arrivalAirport,
  duration,
}) => {
  return (
    <div className="grid grid-cols-12 justify-between mt-4">
      {/* Departure Info */}
      <div className="col-span-5">
        <div className="text-start">
          <p className="text-lg font-bold">{departureTime}</p>
          <div>
            <p className="text-sm">{departureDate}</p>
            <p className="text-sm">Terminal: {departureAirport}</p>
          </div>
        </div>
      </div>

      {/* Flight Path with Airplane */}
      <div className="col-span-2 flex flex-col items-center justify-center">
        <div className="relative w-[15rem] h-10">
          <svg
            className="absolute top-1 left-0 w-full h-full"
            viewBox="0 0 420 160"
          >
            <path
              d="M5,140 Q225,0 415,140"
              stroke="#A0AAC0"
              strokeWidth="1.5"
              fill="transparent"
            />
            <circle cx="5" cy="140" r="6" fill="black" />
            <circle cx="415" cy="140" r="6" fill="black" />
          </svg>
          <IoIosAirplane className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-2xl" />
        </div>
        <div className="mt-[-0.5rem] text-xs text-gray">{duration}</div>
      </div>

      {/* Arrival Info */}
      <div className="col-span-5 text-end">
        <p className="text-lg font-bold">{arrivalTime}</p>
        <div>
          <p className="text-sm">{arrivalDate}</p>
          <p className="text-sm">Terminal: {arrivalAirport}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightPath;
