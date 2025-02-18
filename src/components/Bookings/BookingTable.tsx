import React from "react";
import BookingRow from "./BookingRow";

interface BookingTableProps {
  bookings: any[];
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg  border border-gray_light_4">
      <table className="min-w-full table  ">
        <thead className=" ">
          <tr className="bg-skyblue h-[5rem] border-none">
            <th className="p-2 pl-[1.25rem] font-medium text-base  ">
              Reference No.
            </th>
            <th className="p-2  font-medium text-base">Source</th>
            <th className="p-2  font-medium text-base">Route</th>
            <th className="p-2  font-medium text-base">Pax Details</th>
            <th className="p-2  font-medium text-base">Customer Pay</th>
            <th className="p-2  font-medium text-base">Agent Pay</th>
            <th className="p-2  font-medium text-base">Created By</th>
            <th className="p-2  font-medium text-base">Date & Time</th>
            <th className="p-2  font-medium text-base">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow key={booking.reference} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
