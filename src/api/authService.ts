/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient } from "./apiConfig";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/auth/agent/token", {
      username: email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error("Login Error:", error?.response?.data || error.message);
    return {
      success: false,
      message: error?.response?.data?.message || "Login failed",
    };
  }
};

export const sendOTP = async (email: string, code: string) => {
  try {
    const response = await apiClient.post("/auth/agent/verifycode", {
      verifyUsername: email,
      VerificationCode: code,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "OTP Verification Error:",
      error?.response?.data || error.message
    );
    return {
      success: false,
      message: error?.response?.data?.message || "OTP verification failed",
      data: null,
    };
  }
};

export const resendOTP = async (email: string) => {
  try {
    const response = await apiClient.post("/auth/agent/sendcode", {
      verifyUsername: email,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Resend OTP Verification Error:",
      error?.response?.data || error.message
    );
    return {
      success: false,
      message:
        error?.response?.data?.message || "Resend OTP verification failed",
      data: null,
    };
  }
};
export const resetPassword = async (email: string) => {
  try {
    const response = await apiClient.post(`/auth/agent/forgotpassword`, {
      email,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Reset Password Error:",
      error?.response?.data || error.message
    );
  }
};
