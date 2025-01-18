import React from "react";
import businessData from "../../../data/business.json";
import business from "/assets/images/business.png";
const Business: React.FC = () => {
  return (
    <section className=" pt-16 pb-10 md:pb-28 bg-[#F7F9FC] text-center ">
      <div className=" w-full text-center justify-center mt-2 md:mt-32 flex ">
        <p className="text-[28px] md:text-[3.875rem] md:leading-[5.181rem] font-bold  mb-[3.875rem] max-w-[20rem]  md:max-w-4xl  md:font-['Roboto']  ">
          Begin Your Travel Business
          <br />
          Now with The Leading B2B Travel Platform in
          <span
            className="  text-yellow inline "
            // className=" line-clamp-1 md:line-clamp-none text-yellow "
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {" "}
            Saudi Arabia
          </span>
        </p>
      </div>
      <div className=" mx-[1.313rem] lg:mx-[4rem]  xl:mx-[8rem] 2xl:mx-[15.75rem]  items-center grid  grid-cols-1 md:grid-cols-2 ">
        <div className="flex justify-center text-center md:block mb-8 md:mb-0 ml-[3.813rem]">
          <img
            src={business}
            alt=""
            className="w-72 h-72  md:w-[28.574rem] md:h-[28.232rem]"
          />
        </div>
        <div className=" grid gap-6 grid-cols-1 md:grid-cols-2  ">
          {businessData.map((item, index) => (
            <div
              key={index}
              className="card  bg-white  rounded-3xl  pl-[42px] md:pl-[1.875rem] pe-[38px] md:pe-[10px] pt-[11px] md:pt-[40px]     transition-transform hover:scale-105 hover:cursor-pointer text-start "
            >
              <img
                src={item.icon}
                className="md:h-[4.063rem] md:w-[4.063rem]  h-[40px] w-[40px]"
                alt=""
              />
              <h3 className="mt-[6px] md:mt-8 text-xl md:text-2xl md:leading-[2.375rem] font-bold mb-4 md:mb-[20px] ">
                {item.title}
              </h3>
              <p className="text-gray text-[14px] md:text-[1.063rem] md:leading-[1.825rem] h-[87px] md:h-auto  max-h-[3.625rem] mb-[31px] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
