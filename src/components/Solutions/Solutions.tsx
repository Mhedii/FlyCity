import React from "react";
import solutionsData from "../../data/solutions.json";

const Solutions: React.FC = () => {
  return (
    <section className=" md:py-16 mb-10 bg-gray-50 text-center px-[1rem] md:px-[3rem] lg:px-[6rem] xl:px-[13rem] 2xl:px-[16rem]">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-5xl font-bold  mb-2 md:mb-8 max-w-xl mt-4 md:mt-10 md:leading-[4rem]">
          Solutions For The Whole Travel{" "}
          <span className="text-yellow">Ecosystem</span>
        </h2>
      </div>
      <div className="grid mt-20   gap-20 md:gap-8 grid-cols-1 sm:grid-cols-2 ">
        {solutionsData.map((solution, index) => (
          <div
            key={index}
            style={{ backgroundColor: solution.background }}
            className=" shadow-sm p-6  rounded-xl  "
          >
            <div className="  mt-[-10.5rem]    flex text-center justify-center ">
              <img
                src={solution.image}
                alt=""
                className="w-[27.5rem] h-[24.5rem] "
              />
            </div>
            <div className=" text-start">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {solution.title}
              </h3>
              <p className="text-sm md:text-base text-gray">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
