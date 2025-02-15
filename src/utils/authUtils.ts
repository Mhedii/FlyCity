import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

export const getDecodedToken = (): CustomJwtPayload | null => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;
  try {
    return jwtDecode<CustomJwtPayload>(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
export const getAuthToken = (): string | null => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    return null;
  }
  return token;
};
export const getAppDataFromLocalStorage = (): object | null => {
  const appData = localStorage.getItem("app-data");
  if (!appData) {
    return null;
  }
  const data = JSON.parse(appData);
  return { data };
};

export const getAppId = (): number | null => {
  const appId = Number(localStorage.getItem("app-id"));
  if (!appId) {
    return null;
  }
  return appId;
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("app-data");
};
