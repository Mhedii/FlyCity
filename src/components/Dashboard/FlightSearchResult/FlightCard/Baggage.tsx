/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IoIosAirplane } from "react-icons/io";

// interface FareBreakdownProps {
//   flight: string;
//   traveller: string;
//   checkin: number;
//   cabin: number;
// }

const Baggage: React.FC<any> = ({ flightsBaggage }) => {
  const baggageData = flightsBaggage.flatMap((fare: any) =>
    fare.passengerFares.flatMap((passengerFare: any) => passengerFare.baggages)
  );

  // Group the baggage by segmentInfoId (Sector)
  const groupedBaggage = baggageData.reduce((acc: any, baggage: any) => {
    if (!acc[baggage.segmentInfoId]) {
      acc[baggage.segmentInfoId] = [];
    }
    acc[baggage.segmentInfoId].push(baggage);
    return acc;
  }, {} as Record<string, Array<(typeof baggageData)[0]>>);
  return (
    <div className="border border-gray_light_3 rounded-sm p-4 ">
      <div className=" ">
        <table className="w-full text-left mt-2 border border-gray_light_3 rounded-lg ">
          <thead className="bg-gray_light_3">
            <tr className="text-gray font-medium border-b border-gray_light_3">
              <th className="py-2 font-semibold text-base pl-4">Sector</th>
              <th className="py-2 font-semibold text-base ">Checkin</th>
              <th className="py-2 font-semibold text-base ">CABIN</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedBaggage).map((segmentId) => {
              const segmentBaggage = groupedBaggage[segmentId];
              return (
                <tr key={segmentId} className="border-b border-gray_light_3">
                  <td className="py-2 pl-4">
                    <p className="font-medium flex items-center gap-2">
                      {segmentId.split("-")[0]}{" "}
                      <IoIosAirplane className="text-2xl" />{" "}
                      {segmentId.split("-")[1]}
                    </p>
                  </td>

                  {/* Check-in baggage column (ProvisionType "A") */}
                  <td className="py-2 text-sm">
                    {segmentBaggage
                      .filter(
                        (baggage: Baggage) => baggage.provisionType === "A"
                      )
                      .map((baggage: Baggage, idx: number) => (
                        <p key={idx} className="text-sm">
                          {baggage.provisionType}: {baggage.pieceCount} P
                        </p>
                      ))}
                    {/* Fallback for when there is no checked-in baggage */}
                    {segmentBaggage.filter(
                      (baggage: Baggage) => baggage.provisionType === "A"
                    ).length === 0 && (
                      <p className="text-sm">No checked-in baggage</p>
                    )}
                  </td>

                  {/* Cabin baggage column (ProvisionType "B") */}
                  <td className="py-2 text-sm">
                    {segmentBaggage
                      .filter(
                        (baggage: Baggage) => baggage.provisionType === "B"
                      )
                      .map((baggage: Baggage, idx: number) => (
                        <p key={idx} className="text-sm">
                          {baggage.provisionType}: {baggage.description}
                        </p>
                      ))}
                    {/* Fallback for when there is no cabin baggage */}
                    {segmentBaggage.filter(
                      (baggage: Baggage) => baggage.provisionType === "B"
                    ).length === 0 && (
                      <p className="text-sm">No cabin baggage</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Baggage;
