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
  features?: string[];
  grossFare: number;
  netFare: number;
  currency: string;
  links?: string[];
  onChooseFlight: () => void;
}
