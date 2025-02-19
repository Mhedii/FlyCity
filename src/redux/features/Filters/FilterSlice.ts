/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  fareType: string[];
  refundability: string;
  flightType: string;
  stops: string[];
  baggagePolicy: string[];
  priceRange: { min: number; max: number };
  schedule: string[]; // Added for schedule
  layover: string[];
}

const initialState: FiltersState = {
  fareType: [],
  refundability: "",
  flightType: "",
  stops: [],
  baggagePolicy: [],
  priceRange: { min: 0, max: 100000 },
  schedule: [], // Initialize schedule as empty array
  layover: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFareType: (state, action: PayloadAction<string[]>) => {
      state.fareType = action.payload;
    },
    setRefundability: (state, action: PayloadAction<string>) => {
      state.refundability = action.payload;
    },
    setFlightType: (state, action: PayloadAction<string>) => {
      state.flightType = action.payload;
    },
    setStops: (state, action: PayloadAction<string[]>) => {
      state.stops = action.payload;
    },
    setBaggagePolicy: (state, action: PayloadAction<string[]>) => {
      state.baggagePolicy = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
    },
    setSchedule(state, action: PayloadAction<any[]>) {
      state.schedule = action.payload;
    },
    setLayover(state, action: PayloadAction<string[]>) {
      state.layover = action.payload;
    },
  },
});

export const {
  setFareType,
  setRefundability,
  setFlightType,
  setStops,
  setBaggagePolicy,
  setPriceRange,
  setSchedule,
  setLayover,
} = filtersSlice.actions;

export default filtersSlice.reducer;
