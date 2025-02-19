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
  // const origin = params.get("origin");
  // const destination = params.get("dest");
  // const flyDate = params.get("flyDate");
  const origins = params.getAll("origin");
  const destinations = params.getAll("dest");
  const flyDates = params.getAll("flyDate");
  const returnDate = params.get("returnDate");
  const tripType = params.get("tripType");
  const fareType = params.get("fareType");
  const tripClass = params.get("tripClass");
  // const airline = params.get("airlines");
  // if (!origin || !destination || !flyDate) {
  //   throw new Error(
  //     "Missing required parameters: origin, destination, or flyDate"
  //   );
  // }
  if (!origins.length || !destinations.length || !flyDates.length) {
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
  // const OriginDestinationOptions: OriginDestination[] = [
  //   {
  //     DepartureAirport: origin,
  //     ArrivalAirport: destination,
  //     FlyDate: flyDate,
  //   },
  // ];

  const OriginDestinationOptions: OriginDestination[] = [];

  const maxLength = Math.max(
    origins.length,
    destinations.length,
    flyDates.length
  );

  // Generate the OriginDestinationOptions array
  for (let i = 0; i < maxLength; i++) {
    const departureAirport = origins[i] || origins[origins.length - 1]; // Default to last origin if not enough
    const arrivalAirport =
      destinations[i] || destinations[destinations.length - 1]; // Default to last destination if not enough
    const flyDate = flyDates[i] || flyDates[flyDates.length - 1]; // Default to last flyDate if not enough

    // Add to the OriginDestinationOptions
    OriginDestinationOptions.push({
      DepartureAirport: departureAirport,
      ArrivalAirport: arrivalAirport,
      FlyDate: flyDate,
    });
  }
  // if (tripType === "2" && returnDate) {
  //   OriginDestinationOptions.push({
  //     DepartureAirport: destinations[0],
  //     ArrivalAirport: origin,
  //     FlyDate: returnDate,
  //   });
  // }
  if (tripType === "2" && returnDate) {
    OriginDestinationOptions.push({
      DepartureAirport: destinations[destinations.length - 1],
      ArrivalAirport: origins[origins.length - 1],
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
