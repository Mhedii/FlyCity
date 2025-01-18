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
      <div className="absolute flex justify-between   w-full mt-6  ">
        <img src={eclipse_1} alt="" className=" ml-[5.125rem]   " />
        <img src={eclipse_2} alt="" className="me-[2.813rem]  " />
      </div>
      <section className="    pt-[7.75rem]     text-start px-[1rem] lg:px-[6rem] xl:px-[13rem] 2xl:px-[15.75rem] ">
        <h2
          className=" md:text-[3.875rem] font-bold text-white mb-[3.938rem] text-center leading-[5.181rem]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Fly City <span className="text-yellow">Advantage</span>
        </h2>
        <div className="     grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {featuresData.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="card shadow-sm bg-white  rounded-2xl pl-[2.938rem] pt-[2.656rem] pe-[1.125rem] transition-transform hover:scale-105 hover:cursor-pointer tracking-tighter "
            >
              <img
                src={feature.icon}
                className="h-[5.063rem] w-[5.063rem]"
                alt=""
              />
              <h3 className="mt-8 text-[2.063rem] font-bold mb-5">
                {feature.title}
              </h3>
              <p className="text-gray text-[1.188rem] h-[5.438rem] mb-[2.094rem]">
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
