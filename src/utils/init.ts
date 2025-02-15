import { getAirportList } from "../api/initService";

export const initializeAppData = async () => {
  const airportList = localStorage.getItem("app-airport-list");

  if (!airportList) {
    const response = await getAirportList();
    localStorage.setItem("app-airport-list", response);
  } else {
    console.log("Airport list already exists in localStorage");
  }
};
