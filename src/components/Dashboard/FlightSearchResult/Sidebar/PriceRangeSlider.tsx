import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface PriceRangeSliderProps {
  title: string;
  min: number;
  max: number;
  step?: number;
  defaultMinValue: number;
  defaultMaxValue: number;
  popularityData: number[];
  onChange: (values: { min: number; max: number }) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  //   title,
  min,
  max,
  step = 1,
  defaultMinValue,
  defaultMaxValue,
  popularityData,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const chartData = {
    labels: popularityData.map((_, index) => `${min + index * step}`),
    datasets: [
      {
        label: "Popularity",
        data: popularityData,
        backgroundColor: popularityData.map((_, index) => {
          const price = min + index * step;
          return price >= minValue && price <= maxValue ? "#00026F" : "#E5E7EB";
        }),
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
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
          <div>
            <div className="h-24 w-[10.91rem] mx-auto mt-4">
              <Bar data={chartData} options={chartOptions} />
            </div>

            <div className="relative ">
              <div className="absolute w-full h-1 bg-gray_light_3 rounded z-0"></div>

              <div
                className="absolute h-1 bg-primary rounded"
                style={{
                  left: `${((minValue - min) / (max - min)) * 100}%`,
                  width: `${((maxValue - minValue) / (max - min)) * 100}%`,
                }}
              ></div>

              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minValue}
                onChange={handleMinChange}
                className="absolute w-full appearance-none h-1 bg-transparent outline-none cursor-pointer accent-[#F5C603] z-10"
              />
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxValue}
                onChange={handleMaxChange}
                className="absolute w-full appearance-none h-1 bg-transparent outline-none cursor-pointer accent-[#F5C603] z-10"
              />
            </div>

            <div className="flex justify-between mt-2 text-[1.063rem]">
              <span>${minValue.toFixed(2)}</span>
              <span>${maxValue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeSlider;
