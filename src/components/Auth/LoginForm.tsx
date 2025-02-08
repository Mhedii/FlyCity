import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/authService";
import Button from "../Shared/Button";
import FormInput from "../Shared/FormInput";
interface LoginProps {
  setIsForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOTPSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: (value: string) => void;
}
const LoginForm: React.FC<LoginProps> = ({
  setIsOTPSuccessful,
  setIsForgotPassword,
  setUsername,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    message?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await loginUser(formData.email, formData.password);
      console.log("Login Response:", response);

      if (response.isSuccess) {
        // Proceed to OTP verification or dashboard
        setIsOTPSuccessful(true);
        setUsername(formData.email);
        setIsForgotPassword(false);
      } else {
        setErrors({ message: response.messages?.[0] || "Login failed" });
      }
    } catch {
      setErrors({ message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };
  const handleCard = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsOTPSuccessful(false);
    setIsForgotPassword(true);
  };
  return (
    <div className="relative top-[2.851rem] md:top-0">
      <div className="absolute  -bottom-4 md:-bottom-7 right-[-0.75rem] md:right-[2.25rem] w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] h-[28rem] md:h-[25rem] xl:h-[36.5rem] bg-black opacity-10 rounded-3xl z-0"></div>
      <div className=" bg-white left-0 md:left-auto  px-2 md:px-[1rem] xl:px-[2rem] 2xl:px-[3.313rem] pt-3 xl:pt-[3.563rem]  rounded-3xl w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem]  xl:h-[35.938rem]   md:ml-auto relative md:absolute bottom-0 right-[4.563rem] z-10 ">
        <h2 className="text-[24px] md:text-[1.7rem] xl:text-[2.313rem] font-bold leading-[3.25rem]  mb-[11px] md:mb-[1.25rem] xl:mb-[2.625rem]">
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-[33px] md:mb-[1rem] xl:mb-[2.563rem]">
            <FormInput
              label="Enter Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <FormInput
            label="Enter Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            // icon={<TbEyeClosed />}
            error={errors.password}
          />

          {errors.message && (
            <p className="text-red-600   px-[1rem] rounded-xl mt-[1.25rem] text-[1.188rem] py-[0.625rem] justify-center text-center flex bg-red-600 bg-opacity-20">
              {errors.message}
            </p>
          )}
          <div className="flex justify-between items-center text-[14px] xl:text-base 2xl:text-[1.188rem]  mt-5">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <span className="">Remember me</span>
            </label>
            <Link
              to=""
              onClick={handleCard}
              className=" text-primary font-semibold underline"
            >
              Forgot Password
            </Link>
          </div>
          <Button
            text={loading ? "Logging in..." : "Login"}
            className="text-base xl:text-[1.625rem] w-full mt-[2.125rem] md:mt-[1rem] xl:mt-[2.125rem] h-[48px] lg:[54px] xl:h-[66px]"
            disabled={loading && true}
          />
        </form>

        <p className="text-[14px] xl:text-base 2xl:text-[1.188rem] pb-6 pd:mb-0  mt-[31px] md:mt-[0.75rem] xl:mt-[2.313rem] flex justify-center md:justify-normal  md:ml-3 leading-none">
          Already have an account?{" "}
          <Link
            to="/registration"
            className="text-primary font-semibold underline "
          >
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
