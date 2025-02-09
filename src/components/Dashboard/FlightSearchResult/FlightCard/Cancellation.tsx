import React from "react";
import { IoIosAirplane } from "react-icons/io";

const Cancellation: React.FC = () => {
  return (
    <div>
      <div className="bg-gray_light_3 p-4 flex items-center">
        <p className="font-medium flex items-center gap-2">
          DAC <IoIosAirplane className="text-2xl" /> YEG{" "}
          <span className="text-gray">(via stop 1- DOH, stop 2 - LAX)</span>
        </p>
      </div>
      <div className="grid grid-cols-12 border border-gray_light_3">
        <div className="col-span-6 p-4 border-e border-gray_light_3 ">
          <p className="font-semibold">Timeframe</p>
          <p className="text-sm text-gray">(From Scheduled flight departure)</p>
        </div>
        <div className="col-span-6 p-4">
          <p className="font-semibold">Airline Fee + Flycity Fee</p>
          <p className="text-sm text-gray">(Per passenger)</p>
        </div>
      </div>
      <div className="grid grid-cols-12 text-gray text-sm border border-gray_light_3 border-t-0">
        <div className="col-span-6 p-4  border-e border-gray_light_3">
          <p>Anytime</p>
        </div>
        <div className="col-span-6 p-4">
          <p>(BDT 12312 + BDT 12312)</p>
        </div>
      </div>
      <div className="bg-gray_light_3 p-4 flex items-center">
        <p className="font-medium flex items-center gap-2">
          DAC <IoIosAirplane className="text-2xl" /> YEG{" "}
          <span className="text-gray">(via stop 1- DOH, stop 2 - LAX)</span>
        </p>
      </div>
      <div className="grid grid-cols-12 border border-gray_light_3">
        <div className="col-span-6 p-4 border-e border-gray_light_3 ">
          <p className="font-semibold">Timeframe</p>
          <p className="text-sm text-gray">(From Scheduled flight departure)</p>
        </div>
        <div className="col-span-6 p-4">
          <p className="font-semibold">Airline Fee + Flycity Fee</p>
          <p className="text-sm text-gray">(Per passenger)</p>
        </div>
      </div>
      <div className="grid grid-cols-12 text-gray text-sm border border-gray_light_3 border-t-0">
        <div className="col-span-6 p-4  border-e border-gray_light_3">
          <p>Anytime</p>
        </div>
        <div className="col-span-6 p-4">
          <p>(BDT 12312 + BDT 12312)</p>
        </div>
      </div>

      <p className="  border-red-600 border   px-[1rem] rounded-md mt-[1.25rem] text-sm py-[0.625rem] justify-start text-start flex bg-red-600 bg-opacity-20">
        *Important: Lorem ipsum dolor sit amet consectetur adipisicing
        elit.Dolor, consequuntur dicta? Odit velit magni autem. Cumque magnam
        nisi
      </p>
    </div>
  );
};

export default Cancellation;
