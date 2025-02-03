import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Schedule {
  slot: string;
  timeRange: string;
  layover: string;
  icon: string;
}

const FilterSchedules: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedSchedules, setSelectedSchedules] = useState<Set<string>>(
    new Set()
  );
  const [selectedLayover, setSelectedLayover] = useState<Set<string>>(
    new Set()
  );
  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const schedules: Schedule[] = [
    {
      slot: "Midnight",
      timeRange: "00-06",
      layover: "0h-5h",
      icon: "/assets/images/FlightSchedules/midnight_icon.svg",
    },
    {
      slot: "Morning",
      timeRange: "06-12",
      layover: "5h-10h",
      icon: "/assets/images/FlightSchedules/morning_icon.svg",
    },
    {
      slot: "Afternoon",
      timeRange: "12-18",
      layover: "10h-15h",
      icon: "/assets/images/FlightSchedules/afternoon_icon.svg",
    },
    {
      slot: "Night",
      timeRange: "18-00",
      layover: "15h+",
      icon: "/assets/images/FlightSchedules/night_icon.svg",
    },
  ];
  const handleSelect = (slot: string) => {
    const updatedSelection = new Set(selectedSchedules);
    if (updatedSelection.has(slot)) {
      updatedSelection.delete(slot);
    } else {
      updatedSelection.add(slot);
    }
    setSelectedSchedules(updatedSelection);
  };
  const handleLayoverSelect = (slot: string) => {
    const updatedSelection = new Set(selectedLayover);
    if (updatedSelection.has(slot)) {
      updatedSelection.delete(slot);
    } else {
      updatedSelection.add(slot);
    }
    setSelectedLayover(updatedSelection);
  };
  return (
    <div className="bg-white border rounded-xl border-gray_light_2 mt-[1rem] xl:mt-[1.313rem] py-4 xl:pt-4 pl-[1.5rem] xl:pb-[1.875rem] pe-[1.75rem] w-[19.875rem]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-sm xl:text-[1.375rem] font-semibold">
          Flight Schedules
        </h3>
        <button>
          {isCollapsed ? (
            <IoIosArrowDown size={20} />
          ) : (
            <IoIosArrowUp size={20} />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div>
          <p className="font-medium text-sm xl:text-base mt-2 xl:mt-4 ">
            Departure Dhaka{" "}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-[0.813rem]">
            {schedules.map((schedule) => (
              <div
                key={schedule.slot}
                className={`px-[1.063rem] pt-[0.729rem] pb-2 rounded-md flex flex-col items-center cursor-pointer 
                    ${
                      selectedSchedules.has(schedule.slot)
                        ? "bg-skyblue"
                        : "bg-gray_light_3"
                    }`}
                onClick={() => handleSelect(schedule.slot)}
              >
                <img
                  src={schedule.icon}
                  alt={schedule.slot}
                  className="w-[1rem] h-[1rem] mb-[0.236rem]"
                />

                <p className="  text-[0.74rem] ">
                  {schedule.slot} <span>{schedule.timeRange}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-medium text-sm xl:text-base mt-[0.938rem]">
            Layover Time
          </p>
          <div className="mt-4 grid grid-cols-2 gap-[0.813rem]">
            {schedules.map((schedule) => (
              <div
                key={schedule.layover}
                className={`px-[1.063rem] pt-[0.729rem] pb-2 rounded-md flex flex-col items-center cursor-pointer 
                    ${
                      selectedLayover.has(schedule.layover)
                        ? "bg-skyblue"
                        : "bg-gray_light_3"
                    }`}
                onClick={() => handleLayoverSelect(schedule.layover)}
              >
                <p className="  text-xs ">{schedule.layover}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSchedules;
