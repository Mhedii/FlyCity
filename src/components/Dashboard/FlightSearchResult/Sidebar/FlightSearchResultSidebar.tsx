import React from "react";
import FilterGroup from "./FilterGroup";
import FilterSchedules from "./FlightSchedules";
import PriceRangeSlider from "./PriceRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBaggagePolicy,
  selectFareType,
  selectFlightType,
  selectPriceRange,
  selectRefundability,
  selectStops,
} from "../../../../redux/features/Filters/FilterSelectors";
import {
  setBaggagePolicy,
  setFareType,
  setFlightType,
  setPriceRange,
  setRefundability,
  setStops,
} from "../../../../redux/features/Filters/FilterSlice";

const FlightSearchResultSidebar: React.FC = () => {
  const handleFilterChange = (selectedValues: string[]) => {
    console.log("Selected values:", selectedValues);
  };
  const handlePriceChange = (values: { min: number; max: number }) => {
    console.log("Selected Price Range:", values);
  };
  const dispatch = useDispatch();

  const fareType = useSelector(selectFareType);
  const refundability = useSelector(selectRefundability);
  const flightType = useSelector(selectFlightType);
  const stops = useSelector(selectStops);
  const baggagePolicy = useSelector(selectBaggagePolicy);
  const priceRange = useSelector(selectPriceRange);
  return (
    <aside
      className={`px-[1rem]  pb-[1rem] xl:pb-0 rounded-md xl:rounded-none xl:pl-[2.063rem] xl:pe-[0.875rem] w-full md:w-[21.625rem] h-full flex flex-col bg-gray_light_3`}
    >
      <nav className="  justify-center grid">
        <FilterSchedules />
        <PriceRangeSlider
          title="Price Range"
          min={0}
          max={10000}
          defaultMinValue={50}
          defaultMaxValue={10000}
          popularityData={[10, 30, 50, 70, 90, 60, 40, 20]}
          // onChange={handlePriceChange}
          onChange={(values) => dispatch(setPriceRange(values))}
        />
        <FilterGroup
          title="Fare Type"
          type="checkbox"
          options={[
            { label: "Agent Fare", value: "agent_fare" },
            { label: "Gross Fare", value: "gross_fare" },
          ]}
          // onChange={handleFilterChange}
          onChange={(values) => dispatch(setFareType(values))}
        />
        <FilterGroup
          title="Refundability"
          type="radio"
          options={[
            { label: "Refundable", value: true },
            { label: "No Refundable", value: false },
          ]}
          // onChange={handleFilterChange}
          onChange={(values) => dispatch(setRefundability(values[0]))}
        />
        <FilterGroup
          title="Flight Type"
          type="radio"
          options={[
            { label: "Regular Flight", value: "regular" },
            { label: "Multi Flight", value: "multi" },
          ]}
          // onChange={handleFilterChange}
          onChange={(values) => dispatch(setFlightType(values[0]))}
        />
        <FilterGroup
          title="Number of Stops"
          type="checkbox"
          options={[
            { label: "Non-Stop", value: 0 },
            { label: "1 Stop", value: 1 },
            { label: "2 Stops", value: 2 },
            { label: "3+ Stops", value: 3 },
          ]}
          onChange={(values) => dispatch(setStops(values))}
          // onChange={handleFilterChange}
        />
        <FilterGroup
          title="Baggage Policy"
          type="checkbox"
          options={[
            { label: "20 kgs", value: 20 },
            { label: "30 kgs", value: 30 },
          ]}
          // onChange={handleFilterChange}
          onChange={(values) => dispatch(setBaggagePolicy(values))}
        />
      </nav>
    </aside>
  );
};

export default FlightSearchResultSidebar;
