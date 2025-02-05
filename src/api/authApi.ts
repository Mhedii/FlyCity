import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const formData = { username: email, password: password };
  const config = {
    headers: {
      "Content-type": "application/json",
      accept: "application/json",
    },
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL_DEVELOPMENT}/auth/agent/token`,
      formData,
      config
    );
    console.log(response);
    // if (response.data.success) {
    //   return response.data;
    // } else {
    //   return response.data;
    // }
  } catch {
    console.log("Login Failed");
    // throw new Error(error?.response?.data?.message || "Login failed");
  }
};
export const sendOTP = async (email: string, code: string) => {
  const formData = { verifyUsername: email, VerificationCode: code };
  const config = {
    headers: {
      "Content-type": "application/json",
      accept: "application/json",
    },
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL_DEVELOPMENT}/auth/agent/verifycode`,
      formData,
      config
    );
    console.log(response);
    // if (response.data.success) {
    //   return response.data;
    // } else {
    //   return response.data;
    // }
  } catch {
    console.log("Login Failed");
    // throw new Error(error?.response?.data?.message || "Login failed");
  }
};
