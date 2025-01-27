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
  onChooseFlight,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="line-through text-gray-500">
          Gross Fare: {currency} {grossFare.toLocaleString()}
        </div>
        <div className="font-bold text-green-500">
          Net Fare: {currency} {netFare.toLocaleString()}
        </div>
      </div>
      <button
        onClick={onChooseFlight}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        CHOOSE FLIGHT
      </button>
    </div>
  );
};

export default FlightFareDetails;
