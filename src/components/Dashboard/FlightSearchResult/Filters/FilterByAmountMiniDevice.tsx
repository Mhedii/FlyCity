import React from "react";

interface FilterOption {
  label: string;
  value: string;
  price: number;
}

interface FilterByAmountMiniDeviceProps {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  onModify: () => void;
}

const FilterByAmountMiniDevice: React.FC<FilterByAmountMiniDeviceProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className="   bg-white rounded-badge grid grid-cols-12  items-center py-2 px-[1rem] mx-[1.5rem] shadow-[0_0_5px_rgba(0,0,0,0.5)]">
      <div className="col-span-12  flex">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`px-4  py-2 rounded-badge flex items-center text-xs w-full text-center justify-center ${
              selected === option.value
                ? "bg-primary  text-white font-medium"
                : ""
            }`}
          >
            {option.label} <br />
            {option.price.toLocaleString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterByAmountMiniDevice;
