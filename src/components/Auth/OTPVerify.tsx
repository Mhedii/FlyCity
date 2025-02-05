import React, { useState, useEffect } from "react";
import AuthCard from "./AuthCard"; // Import the AuthCard component
import Button from "../Shared/Button";
import { useNavigate } from "react-router";

interface OTPVerifyProps {
  setIsOTPSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
}
// const OTPVerify: React.FC<> = ({ setIsOTPSuccessful }) => {
const OTPVerify: React.FC<OTPVerifyProps> = ({ setIsOTPSuccessful }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      resendTimer > 0 &&
      setInterval(() => setResendTimer(resendTimer - 1), 1000);
    return () => clearInterval(timer as NodeJS.Timeout);
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
    if (/^\d{4}$/.test(paste)) {
      const newOtp = paste.split("").map((digit) => digit);
      setOtp(newOtp);
    }
  };
  const handleVerify = async () => {
    navigate("/flight");
  };
  return (
    <AuthCard title="Verify Now">
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
            className="w-[3.5rem] h-[3.5rem] xl:w-[5.125rem] xl:h-[4.625rem]  bg-gray_light_3 text-center text-xl rounded-lg focus:ring-2 focus:ring-primary focus:outline-gray"
          />
        ))}
      </div>
      <p className="text-center text-gray-600 mb-3">
        Resend code in{" "}
        <span className="text-primary font-semibold">{resendTimer} sec.</span>
      </p>
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
