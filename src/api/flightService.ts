/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient } from "./apiConfig";

export const flightSearch = async (
  query: Record<string, any>,
  token: string
) => {
  try {
    const response = await apiClient.post("/flights/search", query, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Flight Search Error:",
      error?.response?.data || error.message
    );

    return {
      success: false,
      message: error?.response?.data?.message || "Flight search failed",
      data: null,
    };
  }
};
export const revalidateFlightFare = async (
  token: string,
  result: Record<string, any>,
  searchId: string
) => {
  try {
    const response = await apiClient.post(
      "/flights/revalidatefare",
      {
        searchId: searchId,
        result: result,
        apiId: result.apiId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message || "Revalidarte Fare failed",
      data: null,
    };
  }
};
