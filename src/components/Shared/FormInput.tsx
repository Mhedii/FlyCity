import React, { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

interface FormInputProps {
  label: string;
  type?: "text" | "password" | "email" | "tel" | "dropdown" | "file";
  value?: string | number;
  placeholder?: string;
  name?: string;
  options?: string[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  icon?: React.ReactNode;
  required?: boolean;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  name,
  options,
  onChange,
  icon,
  required = false,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <div className="relative w-full  ">
        {type === "dropdown" ? (
          <select
            id={name}
            value={value}
            onChange={onChange}
            className={`block w-full   pl-[1.188rem]  py-[1.375rem] text-base md:text-[1.188rem] text-gray bg-transparent border ${
              error ? "border-red-500" : "border-gray_light_2"
            } rounded-[0.75rem] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
            required={required}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : type === "file" ? (
          <div className="flex items-center justify-between border border-gray_light_2 rounded-[0.75rem] p-[0.938rem]">
            <label
              htmlFor={name}
              className="text-gray  text-base md:text-[1.188rem"
            >
              {label}
            </label>
            <input
              type="file"
              id={name}
              name={name}
              onChange={onChange}
              className="hidden"
              required={required}
            />
            <label
              htmlFor={name}
              className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Upload
            </label>
          </div>
        ) : (
          <div className="relative">
            <input
              type={
                type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : type
              }
              id={name}
              name={name}
              value={value}
              placeholder=" "
              onChange={onChange}
              className={`block w-full   pl-[1.188rem]  py-[1.375rem] text-base md:text-[1.188rem] text-gray bg-transparent border ${
                error ? "border-red-500" : "border-gray_light_2"
              } rounded-[0.75rem] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer`}
              required={required}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-primary cursor-pointer"
              >
                {showPassword ? <TbEye /> : <TbEyeClosed />}
              </button>
            )}
          </div>
        )}

        {/* <label
        htmlFor={name}
        className="absolute left-[1.188rem] text-[14px] md:text-[1.188rem] text-gray duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white peer-focus:text-primary peer-focus:text-[1.063rem] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {icon && (
        <div className="absolute right-[1.375rem] top-[1.563rem] text-2xl text-primary">
          {icon}
        </div>
      )} */}
        {type !== "file" && (
          <label
            htmlFor={name}
            className="absolute left-[1.188rem] text-[14px] md:text-[1.188rem] text-gray duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white peer-focus:text-primary peer-focus:text-[1.063rem] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            {label}
          </label>
        )}

        {icon && type !== "file" && (
          <div className="absolute right-[1.375rem] top-[1.563rem] text-2xl text-primary">
            {icon}
          </div>
        )}
      </div>
      <div className="absolute">
        {error && <p className=" text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default FormInput;
