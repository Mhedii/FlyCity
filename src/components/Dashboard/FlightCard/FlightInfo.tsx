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
}

const FlightInfo: React.FC<FlightInfoProps> = ({
  airline,
  departure,
  arrival,
  duration,
  isDirect,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src={airline.logoUrl}
          alt={`${airline.name} logo`}
          className="w-12 h-12"
        />
        <div>
          <div className="font-bold">{airline.name}</div>
          <div className="text-sm text-gray-500">{airline.flightNumber}</div>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
            {airline.classType}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-xl">{departure.time}</div>
        <div className="text-gray-500">{departure.airport}</div>
      </div>
      <div className="text-center">
        <div>{duration}</div>
        <div>{isDirect ? "Direct" : "Connecting"}</div>
      </div>
      <div className="text-center">
        <div className="font-bold text-xl">{arrival.time}</div>
        <div className="text-gray-500">{arrival.airport}</div>
      </div>
    </div>
  );
};

export default FlightInfo;
