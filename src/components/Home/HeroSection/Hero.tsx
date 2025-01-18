import React from "react";
import HeroBg from "/assets/images/Hero_bg.png";
import Button from "../../Shared/Button";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from "react-router";
import FormInput from "../../Shared/FormInput";

const Hero: React.FC = () => {
  return (
    <div className="mb-[6.375rem]">
      <section className="relative  flex flex-col md:flex-row    mx-[1rem] lg:mx-[6rem] xl:mx-[13rem] 2xl:mx-[15.75rem]">
        <div className="w-full  flex justify-center relative ">
          <img
            src={HeroBg}
            alt="Hero Background"
            className="w-full h-[41.688rem] "
          />
        </div>
        <div className="relative">
          <div className="absolute -bottom-7 right-[2.25rem] w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] h-[36.5rem] bg-black opacity-10 rounded-3xl z-0"></div>
          <div className=" bg-white    px-[3.313rem] pt-[3.563rem] shadow-xl rounded-3xl w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] h-[35.938rem]   md:ml-auto absolute bottom-0 right-[4.563rem] z-10 ">
            <h2 className="text-[2.313rem] font-bold leading-[3.25rem]  mb-[2.625rem]">
              Welcome Back!
            </h2>

            <form className="flex flex-col ">
              <div className="mb-[2.563rem]">
                <FormInput label="Enter Email" type="email" name="email" />
              </div>
              <FormInput
                label="Enter Password"
                type="password"
                name="password"
                icon={<TbEyeClosed />}
              />

              <div className="flex justify-between items-center text-[1.188rem]  mt-5">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span className="">Remember me</span>
                </label>
                <a href="#" className=" text-primary font-semibold underline">
                  Forgot Password
                </a>
              </div>

              <Button
                text="Login"
                className="  text-[1.625rem] w-full mt-[2.125rem] h-[66px] "
              />
            </form>

            <p className="text-[1.188rem]  mt-[2.313rem] ml-3 leading-none">
              Already have an account?{" "}
              <Link
                to="/registration"
                className="text-primary font-semibold underline "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
