import React from "react";
import logo from "../../assets/images/logo_footer.png";
import google from "../../assets/images/google.png";
import app_store from "../../assets/images/app_store.png";
import visa from "../../assets/images/visa.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 pt-16 bg-dark  text-center px-[1rem] md:px-[13rem] xxl:px-[16rem]">
      <div className="grid gap-8 grid-cols-12  mb-6 md:mb-0 ">
        <div className="col-span-12 md:col-span-4 ">
          <img src={logo} alt="" />
          <div className="flex gap-4 my-6 pe-2  ">
            <input
              type="text"
              className="max-w-44  pl-2 rounded-md py-[0.55rem]"
              placeholder="Email Address"
            />
            <button className="rounded-[8px] bg-primary text-white font-bold px-6 w-full ">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4   pe-2">
            <img className=" " src={google} alt="" />
            <img className=" " src={app_store} alt="" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className=" text-gray_light text-lg  flex flex-col md:flex-row  justify-around gap-4 text-start px-4 ">
            <nav className="leading-[2rem] md:leading-[2.5rem]">
              <h6 className="text-xl text-white font-bold mb-2  ">About</h6>
              <a className="link link-hover ">Why Choose Us</a>
              <br />
              <a className="link link-hover">Corporate</a> <br />
              <a className="link link-hover">Careers</a>
            </nav>
            <nav className="leading-[2.5rem] ">
              <h6 className="text-xl text-white font-bold mb-2 ">Services</h6>
              <a className="link link-hover">Flight</a> <br />
              <a className="link link-hover">Hotel</a> <br />
              <a className="link link-hover">Visa</a> <br />
              <a className="link link-hover">Tour Packages</a> <br />
              <a className="link link-hover">Travel Insurance</a>
            </nav>
            <nav className="leading-[2.5rem]">
              <h6 className="text-xl text-white font-bold mb-2 ">Policies</h6>
              <a className="link link-hover">Terms & Conditions</a> <br />
              <a className="link link-hover">Refund Policy</a>
            </nav>
            <nav className="leading-[2.5rem]">
              <h6 className="text-xl text-white font-bold mb-2 ">Support</h6>
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
      <div className=" hidden md:flex justify-end mb-4">
        <img src={visa} alt="" />
      </div>
      <div className="   border-t-2  border-white text-white  ">
        <div className="grid grid-cols-1 md:grid-cols-3    mt-6 md:mt-2 mb-10">
          <div className="md:col-start-2 justify-center ">
            <p>Copyright © 2024 FlyCity. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end gap-2">
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
