import StatusBadge from "./StatusBadge";

interface BookingProps {
  reference: string;
  source: string;
  route: string;
  paxDetails: string;
  customerPay: string;
  agentPay: string;
  createdBy: string;
  dateTime: string;
  status: string;
}

const BookingTableRow = (props: BookingProps) => {
  return (
    <tr className={`border-b border-gray_light_3 `}>
      <td className="px-4 py-2 text-blue-600 underline">{props.reference}</td>
      <td className="px-4 py-2">{props.source}</td>
      <td className="px-4 py-2">{props.route}</td>
      <td className="px-4 py-2">{props.paxDetails}</td>
      <td className="px-4 py-2">{props.customerPay}</td>
      <td className="px-4 py-2">{props.agentPay}</td>
      <td className="px-4 py-2">{props.createdBy}</td>
      <td className="px-4 py-2">{props.dateTime}</td>
      <td className="px-4 py-2">
        <StatusBadge status={props.status} />
      </td>
    </tr>
  );
};

export default BookingTableRow;
