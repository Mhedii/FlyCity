import { environment } from "./../components/Shared/environment";
type Passenger = {
  PassengerType: "ADT" | "CHD" | "INF";
  Quantity: number;
};

type OriginDestination = {
  DepartureAirport: string;
  ArrivalAirport: string;
  FlyDate: string;
};

type ParsedQuery = {
  OriginDestinationOptions: OriginDestination[];
  Passengers: Passenger[];
  ApiId: number;
  CabinClass: string;
  FareType: string;
  // PreferredAirline?: string;
};

export const parseQueryToObject = (
  query: string,
  apiId: number
): ParsedQuery => {
  // console.log(apiId, query);
  const params = new URLSearchParams(query);
  const origin = params.get("origin");
  const destination = params.get("dest");
  const flyDate = params.get("flyDate");
  const returnDate = params.get("returnDate");
  const tripType = params.get("tripType");
  const fareType = params.get("fareType");
  const tripClass = params.get("tripClass");
  // const airline = params.get("airlines");
  if (!origin || !destination || !flyDate) {
    throw new Error(
      "Missing required parameters: origin, destination, or flyDate"
    );
  }

  const cabinClasses: Record<string, string> = {
    "1": "Economy",
    "2": "PremiumEconomy",
    "3": "Business",
    "4": "FirstClass",
  };

  const passengers: Passenger[] = [];
  const passengerTypes: Record<string, "ADT" | "CHD" | "INF"> = {
    adult: "ADT",
    child: "CHD",
    infant: "INF",
  };

  for (const key of Object.keys(passengerTypes)) {
    const quantity = parseInt(params.get(key) || "0", 10);
    if (quantity > 0) {
      passengers.push({
        PassengerType: passengerTypes[key],
        Quantity: quantity,
      });
    }
  }

  // Setting up trip options
  const OriginDestinationOptions: OriginDestination[] = [
    {
      DepartureAirport: origin,
      ArrivalAirport: destination,
      FlyDate: flyDate,
    },
  ];

  if (tripType === "2" && returnDate) {
    OriginDestinationOptions.push({
      DepartureAirport: destination,
      ArrivalAirport: origin,
      FlyDate: returnDate,
    });
  }
  const fareTypeId = fareType ? parseInt(fareType, 10) : 1; // Default to 1

  // Find the matched fare from the list, comparing numbers correctly
  const matchedFare = environment.SearchOptions.flight.fare_type.find(
    (fare) => fare.value === fareTypeId
  );
  const FareTypeCode = matchedFare ? matchedFare.code : "ADT";
  return {
    OriginDestinationOptions,
    Passengers: passengers,
    ApiId: apiId,
    FareType: FareTypeCode,
    // FareType: "ADT",
    CabinClass: cabinClasses[tripClass || "1"],
    // PreferredAirline: airline,
  };
};
