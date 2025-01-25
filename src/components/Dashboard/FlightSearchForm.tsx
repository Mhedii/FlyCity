import React, { useState } from "react";
import DashboardInfoCard from "../Shared/DashboardInfoCard";

const FlightSearchForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("oneway");

  const options = [
    { label: "One way", value: "oneway" },
    { label: "Round way", value: "roundway" },
    { label: "Multi way", value: "multiway" },
  ];

  return (
    <div>
      <div className="flex gap-[3.375rem] mb-[2.438rem]">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex gap-[1.063rem] items-center cursor-pointer   "
          >
            <input
              type="radio"
              name="journey-type"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => setSelectedOption(option.value)}
              className="radio radio-primary"
            />

            <span className="text-[1.188rem] text-gray ">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between w-full items-center gap-6">
        <DashboardInfoCard
          label="From"
          mainText="JFK"
          subText="New York"
          description="John F. Kennedy Inter..."
          className="flex-1  "
        />
        <div className="mt-[2%] ">
          <img
            src="/assets/images/SwitchDestination.png"
            className="w-8 h-8"
            alt=""
          />
        </div>
        <DashboardInfoCard
          label="From"
          mainText="DHK"
          subText="Dhaka"
          description="Hazrat Shahjalal Inter..."
          className="flex-1"
        />
        <DashboardInfoCard
          label="Departure"
          mainText="06"
          subText="November"
          description="Friday,2024"
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default FlightSearchForm;
