interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColors: Record<string, string> = {
    Confirmed: "bg-green-100 text-green-700",
    "On Process": "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-semibold ${
        statusColors[status] || "bg-gray-200 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
