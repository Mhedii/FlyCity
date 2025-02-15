import { RootState } from "../../store";

export const selectFlights = (state: RootState) => state.flights.flights;
export const selectFilteredFlights = (state: RootState) =>
  state.flights.filteredFlights;
