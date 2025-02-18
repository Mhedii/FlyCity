import FlightInfo from "./FlightInfo";
import FlightLinks from "./FlightLink/FlightLinks";
interface FlightCardProps {
  onChooseFlight: () => void;
  searchId: string;
  flightInfo: FlightSearchResult;
}
const FlightCard: React.FC<FlightCardProps> = ({
  onChooseFlight,
  flightInfo,
  searchId,
}) => {
  return (
    <div className=" rounded-xl  mb-[2.063rem] bg-white">
      <FlightInfo
        flightInfo={flightInfo}
        // grossFare={flightInfo.totalFare.subTotalFare}
        // netFare={flightInfo.totalFare.totalFare}
        // currency={flightInfo.totalFare.currency}
        onChooseFlight={onChooseFlight}
      />

      <hr className="my-2 xl:my-4 text-gray_light_2 hidden xl:block" />
      {/* {features.length > 0 && <FlightFeatures features={features} />}
      <hr className="my-2 xl:my-4 text-gray_light_2 hidden xl:block" />
*/}
      <FlightLinks flights={flightInfo} searchId={searchId} />
    </div>
  );
};

export default FlightCard;
