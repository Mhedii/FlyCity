// interface Airport {
//   code: string;
//   name: string;
//   city: string;
//   terminal?: string;
// }

// interface Airline {
//   code: string;
//   name: string;
//   flightNumber: string;
// }

// interface FlightSegment {
//   airline: Airline;
//   departure: {
//     time: string;
//     date: string;
//     airport: Airport;
//   };
//   arrival: {
//     time: string;
//     date: string;
//     airport: Airport;
//   };
//   cabinType: string;
//   seatsAvailable: number;
//   layoverTime: string;
//   duration: string;
// }

// interface Flight {
//   id: string;
//   segments: FlightSegment[];
//   totalDuration: string;
// }

// interface FareDetails {
//   baseFare: number;
//   totalFare: number;
//   currency: string;
// }

// interface FlightsInfo {
//   flights: Flight[];
//   stops: number;
//   validatingCarrier: string;
//   fare: FareDetails;
//   totalFare: string[];
// }

// interface FlightDetailsProps {
//   flights: FlightsInfo;
// }

// interface FlightInfoProps {
//   airline: Airline | string;
//   departure: {
//     time: string;
//     airport: string;
//   };
//   arrival: {
//     time: string;
//     airport: string;
//   };
//   flights: Flight;
//   duration: string;
//   isDirect: number;
//   features?: string[];
//   fare: FareDetails;
//   links?: string[];
//   onSelect: () => void;
// }

// interface FlightLinksProps {
//   flights: FlightsInfo;
// }
// interface FlightsTotalFare {
//   ait: string;
//   currency: string;
//   subTotalFare: number;
//   totalFare: number;
// }

// interface FlightFareProps {
//   grossFare: number;
//   netFare: number;
//   currency: string;
//   flightInfo: { airline: string };
//   onChooseFlight: () => void;
// }

interface Airport {
  airportCode: string;
  airportName: string;
  terminal?: string;
  gate: string;
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
}

interface Airline {
  code: string;
  name: string;
  flightNo?: string;
  aircraftType?: string;
  aircraftTypeCode?: string;
}

interface FlightSegment {
  id: string;
  airline: Airline;
  departure: {
    depTime: string;
    depDate: string;
    airport: Airport;
  };
  arrival: {
    arrTime: string;
    arrDate: string;
    airport: Airport;
  };
  duration: string;
  durationMinutes: number;
  layoverTime?: string;
  layoverTimeInMinutes?: number;
  cabinType: string;
  seatsAvailable: number;
  bookingClass: string;
  stops: number;
  elapsedTime: string;
  numberOfSeats: number;
}

interface Flight {
  id: string;
  flightInfoId?: string;
  cabinClass?: string;
  flightSegments: FlightSegment[];
  totalDuration: string;
  totalStops: number;
  validatingCarrier: string;
  totalElapsedTime: string;
  flyDate: string;
}

interface PassengerFare {
  passengerType: "ADT" | "CHD" | "INF"; // Adult, Child, Infant
  quantity: number;
  refundable: boolean;
  baseFare: number;
  taxes: number;
  subTotal: number;
  totalFare: number;
  currency: string;
  baggages: Baggage[];
}

interface Baggage {
  airlineCode: string;
  provisionType: "A" | "B";
  pieceCount: number;
  unit: "KG" | "LB";
  weight: number;
  description: string;
}

interface TotalFare {
  currency: string;
  subTotalFare: number;
  totalFare: number;
  serviceCharge: number;
  otherCharges?: number;
  refundable: boolean;
}

interface FareDetails {
  fareTitle: string;
  validatingCarrier: string;
  passengerFares: PassengerFare[];
  totalFare: TotalFare;
  fareInfoTitle: string;
}

interface FlightSearchResult {
  resultID: string;
  searchId: string;
  flights: Flight[];
  fares: FareDetails[];
  stops: number;
  totalFare: TotalFare;
  validatingCarrierCode: string;
  validatingCarrier: string;
}
type FilterType = "cheapest" | "earliest" | "fastest";
