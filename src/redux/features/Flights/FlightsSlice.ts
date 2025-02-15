import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  stops: number;
  baggage: string;
  refundable: boolean;
}

interface FlightsState {
  flights: Flight[];
  filteredFlights: Flight[];
}

const initialState: FlightsState = {
  flights: [],
  filteredFlights: [],
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlights: (state, action: PayloadAction<Flight[]>) => {
      state.flights = action.payload;
    },
    setFilteredFlights: (state, action: PayloadAction<Flight[]>) => {
      state.filteredFlights = action.payload;
    },
  },
});

export const { setFlights, setFilteredFlights } = flightsSlice.actions;
export default flightsSlice.reducer;
