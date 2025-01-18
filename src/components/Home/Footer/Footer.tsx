import React from "react";
import logo from "/assets/images/logo_footer.png";
import google from "/assets/images/google.png";
import app_store from "/assets/images/app_store.png";
import visa from "/assets/images/visa.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 pt-[33px] md:pt-[5.688rem] bg-black_1   text-center px-[1.313rem] md:px-[3rem] lg:px-[6rem] xl:px-[13rem] 2xl:px-[15.75rem]">
      <div className="flex  flex-col md:flex-row gap-[2.838rem]   mb-6 md:mb-0  ">
        <div className="  ">
          <img src={logo} alt="" className="w-[6.25rem] h-[3.582rem]" />
          <div className="flex gap-4 md:gap-3 mt-[2.125rem] mb-[31px] md:mb-[2.606rem]  md:max-w-[24.625rem]">
            <input
              type="text"
              className="max-w-[14.938rem]  p-3 rounded-xl  leading-none text-[14px] md:text-[1.188rem]"
              placeholder="Email Address"
            />
            <button className="rounded-[8px] bg-primary text-white font-medium md:font-bold px-5 w-full text-base md:text-xl">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4  pe-2 ">
            <img className=" " src={google} alt="" />
            <img className=" " src={app_store} alt="" />
          </div>
        </div>
        <div className="">
          <div className=" text-gray_light text-base md:text-[1.375rem]  flex flex-col md:flex-row  justify-around gap-[5px] md:gap-[4.063rem] text-start  ">
            <nav className="leading-[29.2px] md:leading-[2.5rem]">
              <h6 className="text-[19px] md:text-2xl text-white font-bold mb-2  ">
                About
              </h6>
              <a className="link link-hover ">Why Choose Us</a>
              <br />
              <a className="link link-hover">Corporate</a> <br />
              <a className="link link-hover">Careers</a>
            </nav>
            <nav className="leading-[2.5rem] ">
              <h6 className="text-[19px] md:text-2xl text-white font-bold mb-2 ">
                Services
              </h6>
              <a className="link link-hover">Flight</a> <br />
              <a className="link link-hover">Hotel</a> <br />
              <a className="link link-hover">Visa</a> <br />
              <a className="link link-hover">Tour Packages</a> <br />
              <a className="link link-hover">Travel Insurance</a>
            </nav>
            <nav className="leading-[2.5rem]">
              <h6 className="text-[19px] md:text-2xl text-white font-bold mb-2 ">
                Policies
              </h6>
              <a className="link link-hover">Terms & Conditions</a> <br />
              <a className="link link-hover">Refund Policy</a>
            </nav>
            <nav className="leading-[2.5rem]">
              <h6 className="text-[19px] md:text-2xl text-white font-bold mb-2 ">
                Support
              </h6>
              <div className="flex justify-between w-full">
                <div>
                  <a className="link link-hover">Contact Us</a>
                </div>
                <div className="md:hidden block w-44 ">
                  <img src={visa} alt="" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex justify-end mt-[1.586rem] mb-[1.188rem] ">
        <img src={visa} alt="" />
      </div>
      <div className="   border-t-2  border-white text-white  md:mb-[3.066rem] ">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-6  text-[14px] md:text-[1.375rem] ">
          <div className="md:col-start-4 col-span-12 md:col-span-6 justify-center">
            <p>Copyright © 2024 FlyCity. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end text-end items-center gap-4 md:col-start-10 col-span-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
