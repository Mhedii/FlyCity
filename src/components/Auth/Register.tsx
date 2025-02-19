import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Button from "../Shared/Button";
import FormInput from "../Shared/FormInput";
import registration from "/assets/images/registration.png";
import ReCAPTCHA from "react-google-recaptcha";
const Register: React.FC = () => {
  return (
    <div className="px-[1.313rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[15.75rem] mt-[1.563rem]">
      <h2 className="text-[24px] md:text-[2.313rem] font-bold ">
        Register Your Account
      </h2>
      <div className="   lg:hidden mt-2 justify-center items-center  flex w-full">
        <img src={registration} alt="Register Illustration" className="" />
      </div>
      <div className="w-full  rounded-lg  grid grid-cols-12   mt-[2rem] lg:mt-[4rem] xl:mt-[6.375rem] pb-[5rem] lg:mb-[9rem]">
        <form className="w-full md:space-y-[1.5rem] xl:space-y-[3.063rem]  col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem] md:mb-0">
            <FormInput label="First Name" type="text" name="firstname" />
            <FormInput label="Last Name" type="text" name="lastname" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem]">
            <FormInput label="Email" type="email" name="Email" />
            <FormInput
              label="Confirm Email"
              type="email"
              name="confirm_email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem]">
            <FormInput label="Agency Name" type="text" name="agency_name" />
            <FormInput
              label="Country"
              type="dropdown"
              name="country"
              icon={<IoIosArrowDown />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem]">
            <FormInput label="City name" type="text" name="city_name" />
            <FormInput label="ZIP/postal code" type="text" name="zip" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem]">
            <FormInput label="Address line 1" type="text" name="address_1" />
            <FormInput label="Address line 2" type="text" name="address_2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mb-[1.5rem]">
            <FormInput
              label="Password"
              type="password"
              name="password"
              icon={<MdOutlineRemoveRedEye />}
            />
            <FormInput
              label="Confirm password"
              type="password"
              name="confirm_password"
              icon={<MdOutlineRemoveRedEye />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
            <FormInput label="ID copy" type="file" name="id_copy" />
            <FormInput label="CR copy" type="file" name="cr_copy" />
            {/* <FormInput label="ID copy" type="password" name="id_copy" />
            <FormInput label="CR copy" type="password" name="cr_copy" /> */}
          </div>

          <div className="flex items-center gap-[0.438rem] text-[14px] my-6 md:my-0 md:text-base xl:text-[1.188rem] ">
            <input type="checkbox" required />
            <label className="">
              I accept the terms of sharing the specified information with Fly
              City
            </label>
          </div>
          <div className="flex justify-center ">
            <ReCAPTCHA
              sitekey={`${import.meta.env.VITE_RECAPTHA_API_KEY}`}
              className=" w-[22.125rem] h-[5.313rem] text-center flex justify-center md:scale-[120%] "
            />
          </div>

          <div className="text-center mt-3">
            <Button
              text="Submit"
              className="px-[8.125rem]  h-[48px] md:h-[66px] text-base md:text-[1.625rem] rounded-full leading-none"
            ></Button>
          </div>
        </form>
        <div className=" hidden lg:block ml-[3.125rem] justify-center items-center col-span-6">
          <img
            src={registration}
            alt="Register Illustration"
            className="xl:w-[41.063rem] xl:h-[27.419rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
{
  /* <FormInput
            label="Email Address"
            type="email"
            name="email"
            value="asd"
            icon="
            "
            // onChange={handleChange}
            required
          />
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />

          <FormInput
            label="Password"
            type="password"
            // type={passwordVisible ? "text" : "password"}
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            required
            icon={<FiPhone />}
          />

          <FormInput
            label="Country"
            type="dropdown"
            name="country"
            value={formData.country}
            onChange={handleChange}
            options={["Saudi Arabia", "United States", "India"]}
            placeholder="Select your country"
            required
          />

          <FormInput
            label="Phone Number"
            type="tel"
            name="phone"
        
            required
            icon={<FiPhone />}
          /> */
}
