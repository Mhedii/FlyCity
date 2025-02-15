/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
export const getAirportList = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
      accept: "application/json",
    },
  };
  try {
    const response = await axios.get(
      "/airport-data/otaresources/airports.min.json",
      config
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Fetch To error Airport List:",
      error?.response || error.message
    );
    return {
      success: false,
      message: error?.response?.message || "Fetch To error airportdata",
      data: null,
    };
  }
};
// import axios from "axios";

// export const getAirportList = async () => {
//   console.log("Fetching airport list...");
//   console.log("API URL:", import.meta.env.VITE_AIRPORT_JSON_URL);

//   try {
//     const response = await axios.get(
//       "/airport-data/otaresources/airports.min.json",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       }
//     );

//     console.log("Airport list fetched:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error fetching airport list:", error);

//     if (error.response) {
//       console.error("Response Data:", error.response.data);
//       console.error("Response Status:", error.response.status);
//       console.error("Response Headers:", error.response.headers);
//     } else if (error.request) {
//       console.error("Request made but no response received:", error.request);
//     } else {
//       console.error("Error setting up the request:", error.message);
//     }

//     return {
//       success: false,
//       message: "Failed to fetch airport data",
//       data: null,
//     };
//   }
// };
