import { RootState } from "../../store";

export const selectFareType = (state: RootState) => state.filters.fareType;
export const selectRefundability = (state: RootState) =>
  state.filters.refundability;
export const selectFlightType = (state: RootState) => state.filters.flightType;
export const selectStops = (state: RootState) => state.filters.stops;
export const selectSchedule = (state: RootState) => state.filters.schedule;
export const selectLayover = (state: RootState) => state.filters.layover;
export const selectBaggagePolicy = (state: RootState) =>
  state.filters.baggagePolicy;
export const selectPriceRange = (state: RootState) => state.filters.priceRange;
