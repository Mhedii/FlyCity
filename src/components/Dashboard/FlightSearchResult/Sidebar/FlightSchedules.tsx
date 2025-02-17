import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  setLayover,
  setSchedule,
} from "../../../../redux/features/Filters/FilterSlice";

interface Schedule {
  slot: string;
  timeRange: string;
  layover: string;
  icon: string;
  valueMin: number;
  valueMax: number;
  valueLayOverMin: number;
  valueLayOverMax: number;
}

const FilterSchedules: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSchedules, setSelectedSchedules] = useState<Set<string>>(
    new Set()
  );
  // const [selectedLayover, setSelectedLayover] = useState<Set<string>>(
  //   new Set()
  // );
  const [selectedLayover, setSelectedLayover] = useState<
    Map<string, { valueLayOverMin: number; valueLayOverMax: number }>
  >(new Map());

  const dispatch = useDispatch();
  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const schedules: Schedule[] = [
    {
      slot: "Midnight",
      valueMin: 0,
      valueMax: 559,
      timeRange: "00-06",
      layover: "0h-5h",
      valueLayOverMin: 0,
      valueLayOverMax: 299,
      icon: "/assets/images/FlightSchedules/midnight_icon.svg",
    },
    {
      slot: "Morning",
      valueMin: 600,
      valueMax: 1159,
      timeRange: "06-12",
      layover: "5h-10h",
      valueLayOverMin: 300,
      valueLayOverMax: 599,
      icon: "/assets/images/FlightSchedules/morning_icon.svg",
    },
    {
      slot: "Afternoon",
      valueMin: 1200,
      valueMax: 1759,
      timeRange: "12-18",
      layover: "10h-15h",
      valueLayOverMin: 600,
      valueLayOverMax: 899,
      icon: "/assets/images/FlightSchedules/afternoon_icon.svg",
    },
    {
      slot: "Night",
      valueMin: 1800,
      valueMax: 2359,
      timeRange: "18-00",
      layover: "15h+",
      valueLayOverMin: 900,
      valueLayOverMax: 10000,
      icon: "/assets/images/FlightSchedules/night_icon.svg",
    },
  ];

  const handleSelect = (schedule: Schedule) => {
    const updatedSelection = new Map(selectedSchedules);
    if (updatedSelection.has(schedule.timeRange)) {
      updatedSelection.delete(schedule.timeRange);
    } else {
      updatedSelection.set(schedule.timeRange, schedule);
    }
    setSelectedSchedules(updatedSelection);
    dispatch(setSchedule(Array.from(updatedSelection.values())));
  };

  const handleLayoverSelect = (layover: string) => {
    const selectedSchedule = schedules.find(
      (schedule) => schedule.layover === layover
    );
    if (selectedSchedule) {
      const updatedSelection = new Map(selectedLayover);
      if (updatedSelection.has(layover)) {
        updatedSelection.delete(layover);
      } else {
        updatedSelection.set(layover, {
          valueLayOverMin: selectedSchedule.valueLayOverMin,
          valueLayOverMax: selectedSchedule.valueLayOverMax,
        });
      }
      setSelectedLayover(updatedSelection);
      dispatch(setLayover(Array.from(updatedSelection.values())));
    }
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
                      selectedSchedules.has(schedule.timeRange)
                        ? "bg-skyblue"
                        : "bg-gray_light_3"
                    }`}
                // onClick={() => handleSelect(schedule.timeRange)}
                onClick={() => handleSelect(schedule)}
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
