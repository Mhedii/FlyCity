import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../redux/features/Filters/FilterSlice";
import flightsReducer from "../redux/features/Flights/FlightsSlice";
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    flights: flightsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
