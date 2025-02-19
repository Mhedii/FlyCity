import React from "react";
import Button from "../../../Shared/Button";
import FlightSearchForm from "../../SearchFlight/FlightSearchForm";

interface FilterOption {
  label: string;
  value: string;
  price?: number;
  time?: string;
}

interface FilterByAmountProps {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  onModify: () => void;
  isModifyOpen: boolean;
  handleModifyToggle: () => void;
}

const FilterByAmount: React.FC<FilterByAmountProps> = ({
  options,
  selected,
  onSelect,
  onModify,
  isModifyOpen,
  handleModifyToggle,
}) => {
  return (
    <div className=" bg-white grid grid-cols-12  items-center gap-4 lg:gap-[1.875rem] py-2 lg:py-6 lg:pl-[3.125rem] lg:pe-[1.313rem] px-[1rem]  rounded-xl">
      <div className="col-span-12 lg:col-span-10 gap-2 lg:gap-6 flex">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`px-3 lg:leading-[3rem] py-1 rounded-xl text-base lg:text-[1.625rem] w-full text-start  ${
              selected === option.value
                ? "bg-skyblue text-primary font-medium"
                : "bg-gray_light_3 "
            }`}
          >
            <span>{option.label} </span>

            {/* {option.price.toLocaleString()} */}
            {option.value === "cheapest"
              ? `${option.price?.toLocaleString()}`
              : option.time}
          </button>
        ))}
      </div>
      {isModifyOpen ? (
        <button
          className="text-xl font-bold flex justify-end col-span-2"
          onClick={handleModifyToggle}
        >
          ✖
        </button>
      ) : (
        <Button
          text="Modify"
          onClick={onModify}
          className=" col-span-12 lg:col-span-2 h-full text-[1.188rem] font-semibold  w-full"
        />
      )}

      {isModifyOpen && (
        <div
          className={`col-span-12 bg-white   rounded-lg mt-4 overflow-y-auto overflow-x-hidden  ${
            isModifyOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Modify Search</h2>
          </div>
          <div className=" w-full">
            <FlightSearchForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterByAmount;
