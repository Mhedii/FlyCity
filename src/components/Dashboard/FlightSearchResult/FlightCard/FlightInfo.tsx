import FlightDetails from "./FlightDetails";
import FlightFareDetails from "./FlightFareDetails";

const FlightInfo: React.FC<FlightFareProps> = ({
  grossFare,
  netFare,
  currency,
  flightInfo,
  onChooseFlight,
}) => {
  return (
    <div className="px-[1.313rem] xl:pt-[1.938rem] xl:pb-[1.813rem] pt-[1rem] grid grid-cols-12 items-center ">
      <div className="col-span-12 xl:col-span-8   ">
        <div className="col-span-12 xl:col-span-8">
          {flightInfo?.flights.map((flight, flightIndex) => (
            <div key={flightIndex}>
              <FlightDetails
                airline={flightInfo.validatingCarrier}
                departure={flight.flightInfoId}
                arrival={flight.flightInfoId}
                duration={flight.totalElapsedTime}
                isDirect={flightInfo.stops}
                flights={flight}
              />
            </div>
          ))}
          <hr className="text-gray_light_3 my-2 xl:hidden" />
          {/* <FlightDetails
            airline={airline}
            departure={departure}
            arrival={arrival}
            duration={duration}
            isDirect={isDirect}
            flights={flights}
            flightInfo={flightInfo}
          />

          <hr className="text-gray_light_3 my-2 xl:hidden" /> */}
          {/* <div className="xl:mt-[2.563rem]">
            <FlightDetails
              airline={airline}
              flights={flights}
              departure={departure}
              arrival={arrival}
              duration={duration}
              isDirect={isDirect}
            />
          </div> */}
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 justify-end flex">
        <FlightFareDetails
          grossFare={grossFare}
          netFare={netFare}
          currency={currency}
          onChooseFlight={onChooseFlight}
        />
      </div>
    </div>
  );
};

export default FlightInfo;
