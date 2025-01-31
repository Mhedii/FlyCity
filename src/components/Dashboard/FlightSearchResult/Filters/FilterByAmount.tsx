import React from "react";
import Button from "../../../Shared/Button";

interface FilterOption {
  label: string;
  value: string;
  price: number;
}

interface FilterByAmountProps {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  onModify: () => void;
}

const FilterByAmount: React.FC<FilterByAmountProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className=" bg-white grid grid-cols-12  items-center gap-[1.875rem] py-6 pl-[3.125rem] pe-[1.313rem]  rounded-xl">
      <div className="col-span-10 gap-6 flex">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`px-3 leading-[3rem] py-1 rounded-xl text-[1.625rem] w-full text-start ${
              selected === option.value
                ? "bg-skyblue text-primary font-medium"
                : "bg-gray_light_3 "
            }`}
          >
            {option.label} {option.price.toLocaleString()}
          </button>
        ))}
      </div>

      <Button
        text="Modify"
        className=" col-span-2 h-full text-[1.188rem] font-semibold  w-full"
      />
    </div>
  );
};

export default FilterByAmount;
