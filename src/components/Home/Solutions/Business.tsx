import React from "react";
import businessData from "../../../data/business.json";
import business from "/assets/images/business.png";
const Business: React.FC = () => {
  return (
    <section className="pt-16 pb-10 md:pb-28 bg-[#F7F9FC] text-center ">
      <div className=" w-full text-center justify-center mt-2 md:mt-32 flex ">
        <h2 className="text-3xl md:text-5xl font-bold  mb-16  max-w-2xl ">
          Begin Your Travel Business
          <br />
          Now with The Leading B2B Travel Platform in
          <span className=" line-clamp-1 md:line-clamp-none text-yellow">
            Saudi Arabia
          </span>
        </h2>
      </div>
      <div className=" mx-[1rem] lg:mx-[5rem]  xl:mx-[13rem] 2xl:mx-[15.75rem] items-center grid  grid-cols-1 md:grid-cols-2 ">
        <div className="flex justify-center text-center md:block mb-8 md:mb-0">
          <img src={business} alt="" className="w-72 h-72  md:w-96 md:h-96" />
        </div>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2  ">
          {businessData.map((item, index) => (
            <div
              key={index}
              className="card shadow-sm bg-white  rounded-xl pl-10 md:pl-6 px-6 py-6 xl:py-8 2xl:py-12 transition-transform hover:scale-105 hover:cursor-pointer text-start "
            >
              <img src={item.icon} className="h-12 w-12" alt="" />
              <h3 className="mt-4 text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
