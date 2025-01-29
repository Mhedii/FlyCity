import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Schedule {
  slot: string;
  timeRange: string;
  icon: string;
}

const FilterSchedules: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedSchedules, setSelectedSchedules] = useState<Set<string>>(
    new Set()
  );
  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const schedules: Schedule[] = [
    {
      slot: "Midnight",
      timeRange: "00-06",
      icon: "/assets/images/FlightSchedules/midnight_icon.svg",
    },
    {
      slot: "Morning",
      timeRange: "06-12",
      icon: "/assets/images/FlightSchedules/morning_icon.svg",
    },
    {
      slot: "Afternoon",
      timeRange: "12-18",
      icon: "/assets/images/FlightSchedules/afternoon_icon.svg",
    },
    {
      slot: "Night",
      timeRange: "18-00",
      icon: "/assets/images/FlightSchedules/night_icon.svg",
    },
  ];
  const handleSelect = (slot: string) => {
    const updatedSelection = new Set(selectedSchedules);
    if (updatedSelection.has(slot)) {
      updatedSelection.delete(slot); // Deselect if already selected
    } else {
      updatedSelection.add(slot); // Select if not selected
    }
    setSelectedSchedules(updatedSelection);
  };
  return (
    <div className="bg-white border rounded-xl border-gray_light_2 mt-8 pt-4 pl-[1.5rem] pb-[1.875rem] pe-[1.75rem] w-[19.875rem]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        <h3 className="text-[1.375rem] font-semibold">Flight Schedules</h3>
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
          <div className="mt-4 grid grid-cols-2 gap-[0.813rem]">
            {schedules.map((schedule) => (
              <div
                key={schedule.slot}
                // className="bg-gray_light_3 px-[1.063rem] pt-[0.729rem] pb-2 rounded-md  flex flex-col items-center"
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
        </div>
      )}
    </div>
  );
};

export default FilterSchedules;
