import { Link } from "react-router";
import Button from "../Shared/Button";
import FormInput from "../Shared/FormInput";
import AuthCard from "./AuthCard";
interface ForgotPassProps {
  setIsForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOTPSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
}
const ForgotPassword: React.FC<ForgotPassProps> = ({
  setIsForgotPassword,
  setIsOTPSuccessful,
}) => {
  return (
    <AuthCard
      title="Forgot Password"
      className=""
      footer={
        <p className="text-[14px] xl:text-base 2xl:text-[1.188rem]  text-center flex  justify-center  md:ml-3 leading-none">
          Go Back To{" "}
          <Link
            to=""
            onClick={() => setIsForgotPassword(false)}
            className="text-primary font-semibold underline ml-1"
          >
            Login
          </Link>
        </p>
      }
    >
      <form className="flex flex-col">
        <div className="mb-[33px] md:mb-[1rem] xl:mb-[2.563rem]">
          <FormInput label="Enter Email" type="email" name="email" />
        </div>
        <Button
          text="Send Code"
          className="text-base xl:text-[1.625rem] w-full  h-[48px] lg:[54px] xl:h-[66px]"
          onClick={() => setIsOTPSuccessful(true)}
        />
      </form>
      {/* <p className="text-[#0A8249] text-[1.188rem] py-[0.625rem] justify-center flex bg-[#0A8249]">
        OTP has been sent to your email
      </p> */}
    </AuthCard>
  );
};

export default ForgotPassword;
