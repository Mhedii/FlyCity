import React from "react";

interface FareBreakdownProps {
  flight: string;
  traveller: string;
  checkin: number;
  cabin: number;
}

const Baggage: React.FC<FareBreakdownProps> = ({
  flight,
  traveller,
  cabin,
  checkin,
}) => {
  return (
    <div className="border border-gray_light_3 rounded-sm p-4 ">
      <div className=" ">
        <table className="w-full text-left mt-2">
          <thead>
            <tr className="text-gray font-medium border-b border-gray_light_3">
              <th className="py-2 font-semibold text-sm">FLIGHT</th>
              <th className="py-2 font-semibold text-sm ">TRAVELLER</th>
              <th className="py-2 font-semibold text-sm ">CHECK-IN</th>
              <th className="py-2 font-semibold text-sm ">CABIN</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" text-gray">
              <td className="py-2 text-xs">{flight}</td>
              <td className="py-2 text-xs ">{traveller}</td>
              <td className="py-2 text-xs ">{checkin} KG</td>
              <td className="py-2 text-xs ">{cabin} KG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Baggage;
