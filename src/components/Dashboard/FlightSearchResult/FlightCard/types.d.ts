// Airport Information
interface Airport {
  airportCode: string;
  airportName: string;
  terminal?: string;
  cityName: string;
}

// Airline Information
interface Airline {
  code: string;
  name: string;
  flightNumber: string;
}

// Flight Segment
interface FlightSegment {
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
  cabinType: string;
  numberOfSeats: number;
  layoverTime: string;
  elapsedTime: string;
}

// Flight
interface Flight {
  id: string;
  flightSegments: FlightSegment[];
  totalDuration: string; // Example: "3h 45m"
}

// Flight Information
interface FlightsInfo {
  flights: Flight[];
  stops: number;
  validatingCarrier: string;
}

// Fare Information
interface FareInfo {
  baseFare: number;
  totalFare: number;
  currency: string;
}

// Main Flight Information Type
interface FlightInfoType {
  flights: Flight[];
  validatingCarrier: string;
  stops: number;
  fare: FareInfo;
}

// Flight Info Props
interface FlightInfoProps {
  flightInfo: FlightInfoType;
  grossFare: number;
  netFare: number;
  currency: string;
  onChooseFlight: () => void;
}

// Flight Details Props
interface FlightDetailsProps {
  airline: string;
  flights: Flight;
  duration: string;
  isDirect: boolean;
}

// Flight Card Props
interface FlightCardProps {
  onChooseFlight: () => void;
  flightInfo: FlightInfoType;
}
