import React from "react";

interface StatusBadgeProps {
  status: string;
}

const statusColors: { [key: string]: string } = {
  Confirmed: "bg-green-200 text-green-600 ",
  "On Process": "bg-yellow bg-opacity-30 text-yellow",
  Cancelled: "bg-red-200 text-red-600",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  console.log(status);
  return (
    <span
      className={`px-3 py-1 rounded-[6px] text-sm  ${
        statusColors[status] || "bg-red-500 text-white "
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
