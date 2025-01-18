import React from "react";
import logo from "/assets/images/logo.svg";
import Button from "../../Shared/Button";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router";
const Header: React.FC = () => {
  return (
    <div className=" ">
      <header className=" justify-between items-center  pt-[1.938rem] pb-[1.889rem]   active:text-primary font-bold text-xl mx-[1.313rem] md:mx-[3rem] lg:mx-[6rem] xl:mx-[13rem] 2xl:mx-[15.75rem] md:flex hidden">
        <div className="  text-2xl font-bold flex items-center ">
          <img src={logo} alt="" className="w-[7.5rem] h-[4.313rem]" />
          <nav className="  text-black_1 text-2xl md:space-x-6 lg:space-x-10 xl:space-x-[5.5rem] xl:me-12 ml-[5.875rem]">
            <Link to="/" className="text-primary hover:text-primary">
              Home
            </Link>
            <a href="#why-us" className="hover:text-primary">
              Why Choose Us
            </a>
            <a href="#corporate" className="hover:text-primary">
              Corporate
            </a>
            <a href="#career" className="hover:text-primary">
              Career
            </a>
          </nav>
        </div>
        <Button
          text="Contact Us"
          className="md:text-sm lg:text-[1.5rem] py-[1.313rem] px-[2.25rem] "
        />
      </header>
      <header className="flex md:hidden mx-[1.313rem] justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="" className="w-[50px] h-[28px]" />
        </div>

        <div className="navbar-end  ">
          <div className="dropdown flex justify-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle  "
            >
              <FiMenu className="text-2xl h-[22px] w-[22px]" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-10 w-40 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a> Why Choose Us</a>
              </li>
              <li>
                <a>Corporate</a>
              </li>
              <li>
                <a>Career</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
