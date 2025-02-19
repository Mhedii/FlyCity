/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../../Shared/Button";
import Baggage from "../Baggage";
import FareSummary from "../FareSummary";
import FlightDetailsInfo from "./FlightDetailsInfo";
import Cancellation from "../Cancellation";
import {
  getAuthToken,
  setSelectedItemInSession,
} from "../../../../../utils/authUtils";
import { revalidateFlightFare } from "../../../../../api/flightService";
import { useNavigate } from "react-router";

const FlightLinks: React.FC<any> = ({ flights, searchId }) => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const navigate = useNavigate();
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
        return <FlightDetailsInfo flights={flights} />;
      case "Flight Fare":
        return <p className="text-gray-600">Details about Flight Fare...</p>;
      case "Fare Summary":
        return (
          <FareSummary
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
            flightsBaggage={flights.fares}
          />
        );
      case "Cancellation":
        return <Cancellation />;
      default:
        return (
          <p className="text-gray-600">Select a section to view details.</p>
        );
    }
  };
  const handleRevalidateFare = async () => {
    const token = getAuthToken();
    if (token !== null) {
      try {
        setIsLoadingButton(true);
        const response = await revalidateFlightFare(token, flights, searchId);

        if (response.results.length !== 0 && response.results[0].revalidated) {
          setSelectedItemInSession(
            response.results[0].resultID,
            response.results[0]
          );
          navigate(`/search/flight/booking?id=${response.results[0].resultID}`);
        } else {
          setIsLoadingButton(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingButton(false);
      }
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
          // text="CHOOSE FLIGHT"
          text={`${isLoadingButton ? "Loading..." : "CHOOSE FLIGHT"}`}
          className={`font-semibold text-xs xl:text-lg ${
            isLoadingButton && "opacity-70"
          }`}
          onClick={handleRevalidateFare}
        />
      </div>

      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          open ? " max-h-auto p-4  shadow-sm rounded-lg bg-white" : "max-h-0"
        }`}
      >
        {open && renderSectionContent()}
      </div>
    </div>
  );
};

export default FlightLinks;
