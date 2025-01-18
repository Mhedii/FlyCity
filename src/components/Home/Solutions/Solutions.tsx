import React from "react";
import solutionsData from "../../../data/solutions.json";

const Solutions: React.FC = () => {
  return (
    <section className="pt-[22px] md:pt-[8.063rem]  pb-[32px] md:pb-[9rem]  md:mb-10 text-center px-[1.313rem] md:px-[3rem] lg:px-[4rem] xl:px-[8rem] 2xl:px-[15.75rem]">
      <div className="flex justify-center">
        <h2
          className="text-[28px] md:text-[3.875rem] md:leading-[5.181rem] font-bold   max-w-3xl  "
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
            className=" relative shadow-sm  md:pl-[62px] pe-[21px] md:pe-8 pt-[211px] md:pt-[16.75rem]    rounded-xl  "
          >
            <div className="">
              <div className="  absolute top-[-8rem] md:top-[-12rem] ">
                {/* <div className="  mt-[-10.5rem]    flex text-center justify-center "> */}
                <img
                  src={solution.image}
                  alt=""
                  // className="w-[27.5rem] h-[24.5rem] "
                />
              </div>
            </div>
            <div className=" text-start">
              <h3 className="pl-[42px] md:pl-0 text-[24px] md:text-[2.313rem] font-bold mb-[0.938rem] leading-[3.25rem]">
                {solution.title}
              </h3>
              <p className="md:block hidden text-[1.188rem] leading-[29.2px ]  text-gray h-[5.438rem] mb-8 line-clamp-3">
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
