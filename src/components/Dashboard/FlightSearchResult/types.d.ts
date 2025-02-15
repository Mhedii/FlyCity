interface Airport {
  code: string;
  name: string;
  city: string;
  terminal?: string;
}

interface Airline {
  code: string;
  name: string;
  flightNumber: string;
}

interface FlightSegment {
  airline: Airline;
  departure: {
    time: string;
    date: string;
    airport: Airport;
  };
  arrival: {
    time: string;
    date: string;
    airport: Airport;
  };
  cabinType: string;
  seatsAvailable: number;
  layoverTime: string;
  duration: string;
}

interface Flight {
  id: string;
  segments: FlightSegment[];
  totalDuration: string;
}

interface FareDetails {
  baseFare: number;
  totalFare: number;
  currency: string;
}

interface FlightsInfo {
  flights: Flight[];
  stops: number;
  validatingCarrier: string;
  fare: FareDetails;
  totalFare: string[];
}

interface FlightDetailsProps {
  flights: FlightsInfo;
}

interface FlightInfoProps {
  airline: Airline | string;
  departure: {
    time: string;
    airport: string;
  };
  arrival: {
    time: string;
    airport: string;
  };
  flights: Flight;
  duration: string;
  isDirect: number;
  features?: string[];
  fare: FareDetails;
  links?: string[];
  onSelect: () => void;
}

interface FlightLinksProps {
  flights: FlightsInfo;
}
interface FlightsTotalFare {
  ait: string;
  currency: string;
  subTotalFare: number;
  totalFare: number;
}

interface FlightFareProps {
  grossFare: number;
  netFare: number;
  currency: string;
  flightInfo: { airline: string };
  onChooseFlight: () => void;
}
