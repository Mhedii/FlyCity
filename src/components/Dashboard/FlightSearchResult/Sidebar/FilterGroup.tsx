import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FilterOption {
  label: string;
  value: string | number | boolean;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  type: "checkbox" | "radio";
  onChange: (selectedValues: string[]) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  type,
  onChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const handleChange = (value: string) => {
    if (type === "checkbox") {
      const updatedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(updatedValues);
      onChange(updatedValues);
    } else if (type === "radio") {
      setSelectedValues([value]);
      onChange([value]);
    }
  };

  return (
    <div className="bg-white border rounded-xl mt-[1rem] xl:mt-[2.063rem] border-gray_light_2   pl-[1.563rem] xl:pt-4 xl:pb-[1.875rem] py-[1rem] pe-[1.813rem] w-[19.875rem]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-sm xl:text-[1.375rem] font-semibold">{title}</h3>
        <button>
          {isCollapsed ? (
            <IoIosArrowDown size={20} />
          ) : (
            <IoIosArrowUp size={20} />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-[0.688rem] cursor-pointer "
            >
              <input
                type={type}
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={() => handleChange(option.value)}
                className={`form-${type} w-[1.25rem] h-[1.25rem] 
                ${
                  type === "radio"
                    ? "radio radio-primary  "
                    : "checkbox checkbox-primary"
                }
              `}
              />
              <span className="text-gray text-xs xl:text-base">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
