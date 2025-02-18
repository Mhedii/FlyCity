import React from "react";
import StatusBadge from "./StatusBadge";

interface BookingRowProps {
  booking: any;
}

const BookingRow: React.FC<BookingRowProps> = ({ booking }) => {
  return (
    <tr className=" h-[5rem] border-none">
      <td className="p-2 pl-[1.25rem] border-t border-gray_light_4 text-[0.875rem] text-primary ">
        {booking.reference}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.source}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.route}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.paxDetails}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.customerPay}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.agentPay}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.createdBy}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        {booking.dateTime}
      </td>
      <td className="p-2 border-t border-gray_light_4 text-[0.875rem] ">
        <StatusBadge status={booking.status} />
      </td>
    </tr>
  );
};

export default BookingRow;
