import React, { useState, useEffect } from "react";

interface PassengerCounts {
  adults: number;
  children: number;
  kids: number;
  infants: number;
}

interface PassengerDropdownProps {
  initialCounts: PassengerCounts;
  onChange: (counts: PassengerCounts) => void;
  setTotalPassengers: (total: number) => void;
  setOpenDropdown: (value: number) => void;
}

const PassengerDropdown: React.FC<PassengerDropdownProps> = ({
  initialCounts,
  onChange,
  setTotalPassengers,
  setOpenDropdown,
}) => {
  const [counts, setCounts] = useState<PassengerCounts>(initialCounts);
  const MAX_PASSENGERS = 9;

  const handleIncrement = (type: keyof PassengerCounts) => {
    setCounts((prev) => {
      const totalPassengers =
        prev.adults + prev.children + prev.kids + (type === "adults" ? 1 : 0);

      if (totalPassengers >= MAX_PASSENGERS) return prev;

      if (type === "infants" && prev.infants >= prev.adults) return prev;

      return { ...prev, [type]: prev[type] + 1 };
    });
  };

  const handleDecrement = (type: keyof PassengerCounts) => {
    setCounts((prev) => {
      if (type === "adults" && prev.adults <= 1) {
        return prev;
      }
      if (type === "adults" && prev[type] > 0) {
        if (prev.infants >= prev.adults) {
          return {
            ...prev,
            adults: prev.adults - 1,
            infants: prev.infants - 1,
          };
        }
        return { ...prev, [type]: prev[type] - 1 };
      }
      if (prev[type] > 0) {
        return { ...prev, [type]: prev[type] - 1 };
      }
      return prev;
    });
  };
  const isIncrementDisabled = (type: keyof PassengerCounts) => {
    const totalPassengers =
      counts.adults +
      counts.children +
      counts.kids +
      (type === "adults" ? 1 : 0);
    return (
      totalPassengers >= MAX_PASSENGERS ||
      (type === "infants" && counts.infants >= counts.adults)
    );
  };

  const isDecrementDisabled = (type: keyof PassengerCounts) => {
    return counts[type] <= 0;
  };
  useEffect(() => {
    onChange(counts);
    setTotalPassengers(
      counts.adults + counts.children + counts.kids + counts.infants
    );
  }, [counts, onChange, setTotalPassengers]);

  return (
    <div className="absolute bg-white rounded-md shadow-lg w-80 p-4 z-50">
      {[
        { label: "Adults", subLabel: "12 years & above", type: "adults" },
        { label: "Children", subLabel: "2 to under 12", type: "children" },
        { label: "Infants", subLabel: "Under 2 years", type: "infants" },
      ].map(({ label, subLabel, type }) => (
        <div key={type} className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm lg:text-base font-medium text-black">
              {label}
            </p>
            <p className="text-xs lg:text-sm text-gray">{subLabel}</p>
          </div>
          <div className="flex items-center">
            <button
              className={`px-3 py-1  rounded-l-md ${
                isDecrementDisabled(type as keyof PassengerCounts)
                  ? "bg-skyblue"
                  : "bg-primary text-white"
              }`}
              onClick={() => handleDecrement(type as keyof PassengerCounts)}
              disabled={isDecrementDisabled(type as keyof PassengerCounts)}
            >
              -
            </button>
            <span className="text-xs lg:text-base px-3 w-[2rem] flex justify-center items-center ">
              {counts[type as keyof PassengerCounts]}
            </span>

            <button
              className={` px-3 py-1  rounded-r-md ${
                isIncrementDisabled(type as keyof PassengerCounts)
                  ? "bg-skyblue"
                  : "bg-primary text-white"
              }`}
              onClick={() => handleIncrement(type as keyof PassengerCounts)}
              disabled={isIncrementDisabled(type as keyof PassengerCounts)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button
        className="w-full py-2 bg-primary text-white rounded-md mt-4 text-sm lg:text-base"
        onClick={() => setOpenDropdown(1)}
      >
        Done
      </button>
    </div>
  );
};

export default PassengerDropdown;
