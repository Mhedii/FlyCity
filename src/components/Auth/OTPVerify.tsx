import React, { useEffect, useState } from "react";
import Button from "../Shared/Button";
import AuthCard from "./AuthCard";
import { getAppData, resendOTP, sendOTP } from "../../api/authService";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

interface OTPVerifyProps {
  setIsOTPSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}
const OTPVerify: React.FC<OTPVerifyProps> = ({
  setIsOTPSuccessful,
  username,
}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const [errors, setErrors] = useState<{ message?: string }>({});
  const navigate = useNavigate();
  useEffect(() => {
    let timer: number | undefined;
    if (resendTimer > 0) {
      timer = setInterval(
        () => setResendTimer((prev) => prev - 1),
        1000
      ) as unknown as number;
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        const nextField = document.getElementById(
          `otp-${index + 1}`
        ) as HTMLInputElement;
        nextField?.focus();
      }

      if (!value && index > 0) {
        const prevField = document.getElementById(
          `otp-${index - 1}`
        ) as HTMLInputElement;
        prevField?.focus();
      }
    }
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("Text");
    if (/^\d{6}$/.test(paste)) {
      const newOtp = paste.split("").map((digit) => digit);
      setOtp(newOtp);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (!otpString || !username) {
      console.error("OTP or username is missing.");
      return;
    }
    try {
      const response = await sendOTP(username, otpString);
      console.log(response);
      if (response?.isSuccess && response?.token) {
        localStorage.setItem("token", response.token);
        const decodedCode: CustomJwtPayload = jwtDecode(response.token);

        if (decodedCode?.AppId) {
          localStorage.setItem("app-id", decodedCode.AppId);
        }
        const appData = await getAppData(response?.token);
        try {
          if (appData.isSuccess) {
            localStorage.setItem("app-data", JSON.stringify(appData));
          }
          console.log("Login Successful:", response);
          navigate("/search");
          // navigate(response.url || "/flight");
        } catch (error) {
          console.error("Error fetching app data:", error);
        }
      } else {
        setErrors({
          message:
            "OTP verification failed: " +
            (response?.messages || "Unknown error"),
        });
      }
    } catch (error) {
      setErrors({ message: "Error during OTP verification: " + error });
    }
  };
  const handleResendOTP = async () => {
    try {
      const response = await resendOTP(username);
      if (response?.isSuccess) {
        setResendTimer(60);
      } else {
        setErrors({
          message:
            "Resend OTP Failed: " + (response?.messages || "Unknown error"),
        });
      }
    } catch (error) {
      setErrors({ message: "Error during Resend OTP: " + error });
    }
  };
  return (
    <AuthCard title="Verify Now" errors={errors?.message}>
      <div className="flex  justify-between xl:justify-center gap-3 mb-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={(e) => handlePaste(e)}
            className="w-[2rem] h-[2rem] xl:w-[3.625rem] xl:h-[3.625rem]  bg-gray_light_3 text-center text-xl rounded-lg focus:outline-gray"
          />
        ))}
      </div>
      {resendTimer === 0 ? (
        <div className="flex justify-center">
          <p
            className="font-semibold text-lg text-primary"
            onClick={handleResendOTP}
          >
            Resend
          </p>
        </div>
      ) : (
        // <button className="text-center text-primary font-bold flex justify-center w-full">
        //   Resend
        // </button>
        <p className="text-center text-gray-600 mb-3">
          Resend code in{" "}
          <span className="text-primary font-semibold">{resendTimer} sec.</span>
        </p>
      )}

      <Button
        onClick={handleVerify}
        text="Verify"
        className="text-base xl:text-[1.625rem] w-full mt-[1rem]  h-[48px] lg:[54px] xl:h-[66px]"
      />

      <Button
        text="Cancel"
        className="text-base bg-gray_light_3 text-black xl:text-[1.625rem] w-full mt-[2.125rem] md:mt-[1rem] xl:mt-[2.125rem] h-[48px] lg:[54px] xl:h-[66px] mb-[2.375rem]"
        bg="bg-gray_light_3"
        textColor="text-black"
        onClick={() => setIsOTPSuccessful(false)}
      />
    </AuthCard>
  );
};

export default OTPVerify;
