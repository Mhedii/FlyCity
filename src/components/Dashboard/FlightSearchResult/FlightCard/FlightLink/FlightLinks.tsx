import { useState } from "react";
import Button from "../../../../Shared/Button";
import Baggage from "../Baggage";
import FareSummary from "../FareSummary";
import FlightDetailsInfo from "./FlightDetailsInfo";
import Cancellation from "../Cancellation";

interface FlightLinksProps {
  links: string[];
}

const FlightLinks: React.FC<FlightLinksProps> = ({ flights }) => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const links = [
    "Flight Details",
    "Fare Summary",
    "Baggage",
    "Cancellation",
    "Fare terms & policy",
  ];
  const toggleSection = (link: string) => {
    if (selectedLink === link && open) {
      setOpen(false);
      setSelectedLink(null);
    } else {
      setOpen(true);
      setSelectedLink(link);
    }
  };
  const renderSectionContent = () => {
    switch (selectedLink) {
      case "Flight Details":
        return (
          <FlightDetailsInfo
            // from="Dhaka"
            // to="Chittagong"
            // date="30 Jan 2025"
            // airline="Biman Bangladesh Airlines"
            // logo="/assets/images/FlightSchedules/garuda_airlines.png"
            // flightNumber="147"
            // aircraft="Boeing 777-300"
            // operatedBy="BG"
            // classType="Y"
            // availableSeats={5}
            // departureTime="18:45"
            // departureDate="Thu, 30 Jan 2025"
            // departureAirport="Hazrat Shahjalal Int."
            // departureTerminal="Terminal -"
            // arrivalTime="19:45"
            // arrivalDate="Thu, 30 Jan 2025"
            // arrivalAirport="Patenga"
            // arrivalTerminal="Terminal -"
            // baggage="Adult"
            // checkIn="20 Kg(s)"
            // cabin="7 Kg(s)"
            flights={flights}
          />
        );
      case "Flight Fare":
        return <p className="text-gray-600">Details about Flight Fare...</p>;
      case "Fare Summary":
        return (
          <FareSummary
            // baseFare={423}
            // taxes={6}
            // other={0}
            // price={429}
            // qty={1}
            // discount={42}
            // currency="MYR"
            flightsTotalFare={flights.totalFare}
            flightsFare={flights.fares}
          />
        );
      case "Baggage":
        return (
          <Baggage
            flight={"KUL-SIN"}
            traveller={"Adult"}
            cabin={0}
            checkin={7}
          />
        );
      case "Cancellation":
        return <Cancellation />;
      // Add other cases as needed
      default:
        return (
          <p className="text-gray-600">Select a section to view details.</p>
        );
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between px-6 text-lg text-primary pb-4 ">
        <div className="  hidden xl:flex gap-6">
          {links.map((link, index) => (
            <div className="flex items-center">
              <button
                key={index}
                onClick={() => toggleSection(link)}
                className={`font-semibold flex items-center gap-1 transition-colors duration-300 ${
                  selectedLink === link && open
                    ? "text-red-600"
                    : "text-gray-800"
                }`}
              >
                {link}
              </button>
              {index < links.length - 1 && <span className="px-4">|</span>}
            </div>
          ))}
        </div>
        <Button
          text="CHOOSE FLIGHT"
          className="font-semibold text-xs xl:text-lg "
        />
      </div>

      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          open ? " max-h-auto p-4  shadow-sm rounded-lg bg-white" : "max-h-0"
        }`}
      >
        {/* {open &&
          (selectedLink === "Flight Details" ? (
            <FlightDetailsInfo
              from="Dhaka"
              to="Chittagong"
              date="30 Jan 2025"
              airline="Biman Bangladesh Airlines"
              logo="/assets/images/FlightSchedules/garuda_airlines.png"
              flightNumber="147"
              aircraft="Boeing 777-300"
              operatedBy="BG"
              classType="Y"
              availableSeats={5}
              departureTime="18:45"
              departureDate="Thu, 30 Jan 2025"
              departureAirport="Hazrat Shahjalal Int."
              departureTerminal="Terminal -"
              arrivalTime="19:45"
              arrivalDate="Thu, 30 Jan 2025"
              arrivalAirport="Patenga"
              arrivalTerminal="Terminal -"
              baggage="Adult"
              checkIn="20 Kg(s)"
              cabin="7 Kg(s)"
            />
          ) : (
            <p className="text-gray-600">Details about {selectedLink}...</p>
          ))} */}
        {open && renderSectionContent()}
      </div>
    </div>
  );
};

export default FlightLinks;
