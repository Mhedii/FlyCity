import React from "react";
import featuresData from "../../../data/features.json";
import eclipse_1 from "/assets/images/eclipse_1.png";
import eclipse_2 from "/assets/images/eclipse_2.png";
interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features: React.FC = () => {
  return (
    <div className="relative  bg-secondary  ">
      <div className=" hidden   absolute lg:flex justify-between   w-full mt-6  ">
        <img src={eclipse_1} alt="" className=" ml-[5.125rem]   " />
        <img src={eclipse_2} alt="" className="me-[2.813rem]  " />
      </div>
      <section className="    pt-[46px] md:pt-[7.75rem]     text-start px-[1.313rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[15.75rem] ">
        <h2
          className=" text-[28px] md:text-[3.875rem] font-bold text-white  text-center md:leading-[5.181rem]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Fly City <span className="text-yellow">Advantage</span>
        </h2>
        <div className="top-[4rem] md:top-[7.563rem]   relative grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
          {featuresData.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="relative card shadow-lg bg-white  rounded-2xl pl-[42px] md:pl-[2.938rem] pt-[30px] md:pt-[2.656rem] pe-[42px] md:pe-[1.125rem] transition-transform hover:scale-105 hover:cursor-pointer tracking-tighter "
            >
              <img
                src={feature.icon}
                className="md:h-[5.063rem] md:w-[5.063rem] h-[60px] w-[60px]"
                alt=""
              />
              <h3 className="mt-2 md:mt-8 text-[22px] md:text-[2.063rem] font-bold mb-5">
                {feature.title}
              </h3>
              <p className="text-gray text-base md:text-[1.188rem] h-[5.438rem] md:mb-[2.094rem]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
