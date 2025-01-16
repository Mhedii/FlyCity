import React from "react";
import featuresData from "../../data/features.json";
import eclipse_1 from "../../assets/images/eclipse_1.png";
import eclipse_2 from "../../assets/images/eclipse_2.png";
interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute flex justify-between px-[1rem] md:px-[3rem] pt-[1rem] w-full   ">
        <img src={eclipse_1} alt="" className="w-12 h-12  " />
        <img src={eclipse_2} alt="" className="w-12 h-12  " />
      </div>
      <section className="  py-10 md:py-28  pb-1 bg-secondary   text-start px-[1rem] lg:px-[6rem] xl:px-[13rem] 2xl:px-[16rem] ">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-16 text-center">
          Fly City <span className="text-[#F5C603]">Advantage</span>
        </h2>
        <div className="mb-[-2rem] md:mb-[-10rem] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {featuresData.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="card shadow-sm bg-white  rounded-xl px-6 py-6 md:py-12 transition-transform hover:scale-105 hover:cursor-pointer "
            >
              <img src={feature.icon} className="h-16 w-16" alt="" />
              <h3 className="mt-4 text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
