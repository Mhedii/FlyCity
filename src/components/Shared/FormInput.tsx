import React from "react";

interface FormInputProps {
  label: string; // Label for the input
  type?: "text" | "password" | "email" | "tel" | "dropdown"; // Input types
  value?: string | number; // Value of the input
  placeholder?: string; // Placeholder text
  name?: string; // Name of the input field
  options?: string[]; // Options for dropdown
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void; // Change handler
  icon?: React.ReactNode; // Optional icon
  required?: boolean; // Whether the field is required
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
}) => {
  return (
    <div className="relative w-full  ">
      {type === "dropdown" ? (
        <select
          id={name}
          value={value}
          onChange={onChange}
          className="block w-full   pl-[1.188rem]  py-[1.375rem] text-[1.188rem] text-gray bg-transparent border border-gray_light_2 rounded-[0.75rem] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
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
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder=" "
          onChange={onChange}
          className="block w-full   pl-[1.188rem]  py-[1.375rem] text-[1.188rem] text-gray bg-transparent border border-gray_light_2 rounded-[0.75rem] appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          required={required}
        />
      )}

      <label
        htmlFor={name}
        className="absolute left-[1.188rem] text-[1.188rem] text-gray duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white peer-focus:text-primary peer-focus:text-[1.063rem] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {icon && (
        <div className="absolute right-[1.375rem] top-[1.563rem] text-2xl text-primary">
          {icon}
        </div>
      )}
    </div>
  );
};

export default FormInput;
