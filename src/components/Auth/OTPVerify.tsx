import React, { useEffect, useState } from "react";
import Button from "../Shared/Button";
import AuthCard from "./AuthCard";

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

  // useEffect(() => {
  //   const timer =
  //     resendTimer > 0 &&
  //     setInterval(() => setResendTimer(resendTimer - 1), 1000);
  //   return () => clearInterval(timer );
  // }, [resendTimer]);
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
    console.log(otpString, username);
    // if (!validateForm()) return;

    // setLoading(true);
    // setIsOTPSuccessful(true);
    // setIsForgotPassword(false);
    // console.log(formData);
    // try {
    //   const response = await loginUser(formData.email, formData.password);
    //   console.log("Login Successful:", response);

    //   // Redirect to OTP verification page
    //   //   navigate("/registra");
    // } catch (error) {
    //   setErrors({ email: "Invalid email or password" });
    // } finally {
    //   setLoading(false);
    // }
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
            className="w-[2rem] h-[2rem] xl:w-[3.625rem] xl:h-[3.625rem]  bg-gray_light_3 text-center text-xl rounded-lg focus:ring-2 focus:ring-primary focus:outline-gray"
          />
        ))}
      </div>
      <p className="text-center text-gray-600 mb-3">
        Resend code in{" "}
        <span className="text-primary font-semibold">{resendTimer} sec.</span>
      </p>
      <Button
        onClick={() => handleVerify}
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
