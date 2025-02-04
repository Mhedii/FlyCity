import BookingTableHeader from "./BookingTableHeader";
import BookingTableRow from "./BookingTableRow";
import Pagination from "./Pagination";

const bookingData = [
  {
    reference: "FC3523543132",
    source: "VQ",
    route: "DAC-SPD",
    paxDetails: "2 ADT ATM COLAMCOUS +1",
    customerPay: "SAR 9504",
    agentPay: "SAR 9504",
    createdBy: "John Liam",
    dateTime: "07/12/24, 15:44",
    status: "Confirmed",
  },
  {
    reference: "FC3523543132",
    source: "VQ",
    route: "DAC-SPD",
    paxDetails: "2 ADT ATM COLAMCOUS +1",
    customerPay: "SAR 9504",
    agentPay: "SAR 9504",
    createdBy: "John Liam",
    dateTime: "07/12/24, 15:44",
    status: "On Process",
  },
  {
    reference: "FC3523543132",
    source: "VQ",
    route: "DAC-SPD",
    paxDetails: "2 ADT ATM COLAMCOUS +1",
    customerPay: "SAR 9504",
    agentPay: "SAR 9504",
    createdBy: "John Liam",
    dateTime: "07/12/24, 15:44",
    status: "Cancelled",
  },
];

const BookingTable = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <BookingTableHeader />
      <div className="overflow-x-auto  border-2 border-gray_light_3   rounded-xl ">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-skyblue font-medium ">
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Reference
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">Source</th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">Route</th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Pax Details
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Customer Pay
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Agent Pay
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Created By
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">
                Date/Time
              </th>
              <th className=" px-[1.25rem] py-[1.25rem] text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <BookingTableRow key={index} {...booking} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default BookingTable;
