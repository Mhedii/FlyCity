// // src/hooks/useAuth.ts
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../api/authApi";

// const useAuth = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const login = async (email: string, password: string) => {
//     setLoading(true);
//     setError(null);

//     // try {
//     //   const data = await loginUser(email, password);
//     //   localStorage.setItem("token", data.token); // Store token
//     //   navigate(`/otp-verification?userId=${data.user_id}`); // Redirect to OTP page
//     // } catch (err: any) {
//     //   setError(err.message);
//     // } finally {
//     //   setLoading(false);
//     // }
//   };

//   return { login, loading, error };
// };

// export default useAuth;
