import React from "react";
import HeroBg from "../../assets/images/Hero_bg.png";
import Button from "../Shared/Button";
import { TbEyeClosed } from "react-icons/tb";

const Hero: React.FC = () => {
  return (
    <div className="  xl:my-10 2xl:mt-60  mb-12">
      <section className="relative bg-cover bg-center lg:py-16 flex flex-col md:flex-row justify-between items-center mx-[1rem] lg:mx-[6rem] xl:mx-[13rem] 2xl:mx-[16rem]   px-[1rem] md:px-10 ">
        <div className="w-full  flex justify-center md:absolute md:left-0 ">
          <img
            src={HeroBg}
            alt="Hero Background"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-white p-10 px-5 md:px-10  2xl:py-20 shadow-xl rounded-2xl w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]  mt-8 md:mt-0 md:ml-auto relative z-10 md:static  ">
          <h2 className="text-2xl font-extrabold  mb-4">Welcome Back!</h2>

          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="emailInput"
                className="peer block w-full rounded-lg border border-gray bg-transparent px-3 py-2 text-gray-900 focus:outline-none   focus:border-primary transition-all duration-200"
                placeholder="Enter Email"
              />
              <label
                htmlFor="emailInput"
                className="absolute left-3  text-sm bg-white px-1  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:z-10 peer-focus:block hidden"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="passwordInput"
                className="peer block w-full rounded-lg border border-gray bg-transparent px-3 py-2 text-gray-900 focus:outline-none  focus:border-primary transition-all duration-200 pr-10"
                placeholder="Enter Password"
              />
              <span className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer">
                <TbEyeClosed />
              </span>
              <label
                htmlFor="passwordInput"
                className="absolute left-3  text-sm bg-white px-1  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:z-10 peer-focus:block hidden"
              >
                Password
              </label>
            </div>

            <div className="flex justify-between items-center ">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="text-sm ">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-primary font-semibold underline"
              >
                Forgot Password
              </a>
            </div>

            <Button text="Login" className="  text-xl w-full" />
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="text-primary font-semibold underline ">
              Register
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
