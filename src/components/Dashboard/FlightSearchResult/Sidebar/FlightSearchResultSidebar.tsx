import React from "react";
import FilterGroup from "./FilterGroup";
import FilterSchedules from "./FlightSchedules";
import PriceRangeSlider from "./PriceRangeSlider";

const FlightSearchResultSidebar: React.FC = () => {
  const handleFilterChange = (selectedValues: string[]) => {
    console.log("Selected values:", selectedValues);
  };
  const handlePriceChange = (values: { min: number; max: number }) => {
    console.log("Selected Price Range:", values);
  };
  return (
    <aside
      className={`px-[1rem]  pb-[1rem] xl:pb-0 rounded-md xl:rounded-none xl:pl-[2.063rem] xl:pe-[0.875rem] w-full md:w-[21.625rem] h-full flex flex-col bg-gray_light_3`}
    >
      <nav className="  justify-center grid">
        <FilterSchedules />
        <PriceRangeSlider
          title="Price Range"
          min={0}
          max={500}
          defaultMinValue={50}
          defaultMaxValue={100}
          popularityData={[10, 30, 50, 70, 90, 60, 40, 20]} // Example popularity data
          onChange={handlePriceChange}
        />
        <FilterGroup
          title="Fare Type"
          type="checkbox"
          options={[
            { label: "Agent Fare", value: "agent_fare" },
            { label: "Gross Fare", value: "gross_fare" },
          ]}
          onChange={handleFilterChange}
        />
        <FilterGroup
          title="Refundability"
          type="radio"
          options={[
            { label: "Refundable", value: "refundable" },
            { label: "No Refundable", value: "no_refundable" },
          ]}
          onChange={handleFilterChange}
        />
        <FilterGroup
          title="Flight Type"
          type="radio"
          options={[
            { label: "Regular Flight", value: "regular" },
            { label: "Multi Flight", value: "multi" },
          ]}
          onChange={handleFilterChange}
        />
        <FilterGroup
          title="Number of Stops"
          type="checkbox"
          options={[{ label: "Non-Stop", value: "non_stop" }]}
          onChange={handleFilterChange}
        />
        <FilterGroup
          title="Baggage Policy"
          type="checkbox"
          options={[
            { label: "20 kgs", value: "20_kgs" },
            { label: "30 kgs", value: "30_kgs" },
          ]}
          onChange={handleFilterChange}
        />
      </nav>
    </aside>
  );
};

export default FlightSearchResultSidebar;
