import React from "react";
import solutionsData from "../../../data/solutions.json";

const Solutions: React.FC = () => {
  return (
    <section className="pt-[8.063rem]  pb-[9rem]  mb-10 text-center px-[1rem] md:px-[3rem] lg:px-[6rem] xl:px-[13rem] 2xl:px-[15.75rem]">
      <div className="flex justify-center">
        <h2
          className="text-[3.875rem] leading-[5.181rem] font-bold   max-w-3xl  "
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Solutions For The Whole Travel{" "}
          <span
            className="text-yellow"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Ecosystem
          </span>
        </h2>
      </div>
      <div className=" relative grid mt-[9.313rem]  gap-20 md:gap-8 grid-cols-1 sm:grid-cols-2 ">
        {solutionsData.map((solution, index) => (
          <div
            key={index}
            style={{ backgroundColor: solution.background }}
            className=" shadow-sm pl-[62px] pe-8 pt-[16.75rem]    rounded-xl  "
          >
            <div className="">
              <div className="  absolute top-[-12rem] ">
                {/* <div className="  mt-[-10.5rem]    flex text-center justify-center "> */}
                <img
                  src={solution.image}
                  alt=""
                  // className="w-[27.5rem] h-[24.5rem] "
                />
              </div>
            </div>
            <div className=" text-start">
              <h3 className="text-[2.313rem] font-bold mb-[0.938rem] leading-[3.25rem]">
                {solution.title}
              </h3>
              <p className="text-[1.188rem] leading-[29.2px ]  text-gray h-[5.438rem] mb-8">
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
