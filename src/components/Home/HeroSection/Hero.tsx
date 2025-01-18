import React from "react";
import HeroBg from "/assets/images/Hero_bg.png";
import Button from "../../Shared/Button";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from "react-router";
import FormInput from "../../Shared/FormInput";

const Hero: React.FC = () => {
  return (
    <div className="mb-[6.375rem]">
      <section className="relative  flex flex-col md:flex-row    mx-[1.313rem] lg:mx-[6rem] xl:mx-[8rem] 2xl:mx-[15.75rem]">
        <div className="w-full  flex justify-center relative ">
          <img
            src={HeroBg}
            alt="Hero Background"
            className="w-full h-auto md:h-[41.688rem] "
          />
        </div>
        <div className="relative top-[2.851rem] md:top-0">
          <div className="absolute  -bottom-4 md:-bottom-7 right-[-0.75rem] md:right-[2.25rem] w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] h-[28rem] md:h-[36.5rem] bg-black opacity-10 rounded-3xl z-0"></div>
          <div className=" bg-white left-0 md:left-auto  px-2 md:px-[2rem] 2xl:px-[3.313rem] pt-3 md:pt-[3.563rem] shadow-xl rounded-3xl w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem]  md:h-[35.938rem]   md:ml-auto relative md:absolute bottom-0 right-[4.563rem] z-10 ">
            <h2 className="text-[24px] md:text-[2.313rem] font-bold leading-[3.25rem]  mb-[11px] md:mb-[2.625rem]">
              Welcome Back!
            </h2>

            <form className="flex flex-col ">
              <div className="mb-[33px] md:mb-[2.563rem]">
                <FormInput label="Enter Email" type="email" name="email" />
              </div>
              <FormInput
                label="Enter Password"
                type="password"
                name="password"
                icon={<TbEyeClosed />}
              />

              <div className="flex justify-between items-center text-[14px] md:text-base 2xl:text-[1.188rem]  mt-5">
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
                className="  text-base md:text-[1.625rem] w-full mt-[2.125rem] h-[48px] md:h-[66px] "
              />
            </form>

            <p className="text-[14px] md:text-base 2xl:text-[1.188rem] pb-6 pd:mb-0  mt-[31px] md:mt-[2.313rem] flex justify-center md:justify-normal  md:ml-3 leading-none">
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
      </section>
    </div>
  );
};

export default Hero;
