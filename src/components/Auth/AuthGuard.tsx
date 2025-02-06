import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { removeAuthToken } from "../../utils/authUtils";

const isUserLoggedIn = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  try {
    const decodedCode: CustomJwtPayload = jwtDecode(token);
    if (!decodedCode.exp) return false;
    const expireDate = new Date(decodedCode.exp * 1000);
    return new Date() < expireDate;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    const authStatus = isUserLoggedIn();
    if (!authStatus) {
      removeAuthToken();
      navigate("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (isAuthenticated === null) {
    return null;
  }
  return <>{children}</>;
};

export default AuthGuard;
