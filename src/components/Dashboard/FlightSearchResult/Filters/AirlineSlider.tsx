import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface Airline {
  id: string;
  name: string;
  checked: boolean;
  code: string;
}

interface AirlineSliderProps {
  airlines: Airline[];
  onToggle: (id: string) => void;
  selectedAirlines: Set<string>;
}

const AirlineSlider: React.FC<AirlineSliderProps> = ({
  airlines,
  onToggle,
  selectedAirlines,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 1024) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < airlines.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="bg-white mt-[2.25rem]  relative flex items-center gap-[1.563rem] overflow-hidden  px-2 lg:pl-[2.438rem] lg:pe-[0.688rem] py-[1.438rem] rounded-lg w-full">
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`lg:p-2 transition ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : "text-gray-600"
          }`}
        >
          <LuChevronLeft size={24} />
        </button>
      )}

      <div className="flex overflow-hidden w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={startIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3 w-full"
          >
            {airlines.length > 0 ? (
              airlines
                .slice(startIndex, startIndex + visibleCount)
                .map((airline) => (
                  <label
                    key={airline.code}
                    className="flex bg-gray_light_3 items-center gap-4 pl-[0.938rem] py-[0.688rem]  rounded-lg w-full cursor-pointer text-sm lg:text-[1.625rem] lg:leading-[3rem]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAirlines.has(airline.code)}
                      onChange={() => onToggle(airline.code)}
                      className="cursor-pointer checkbox-sm"
                    />
                    <div className="flex items-center gap-2">
                      <img
                        src={`${import.meta.env.VITE_AIRLINE_LOGO_URL}/${
                          airline.code
                        }.png`}
                        alt={airline.name}
                        className="w-10 h-10"
                      />
                      <span className="text-gray-800">{airline.name}</span>
                    </div>
                  </label>
                ))
            ) : (
              <p className="text-gray-500 text-center w-full">
                No airlines available
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {startIndex + visibleCount < airlines.length && (
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= airlines.length}
          className={`p-2 transition ${
            startIndex + visibleCount >= airlines.length
              ? "opacity-50 cursor-not-allowed"
              : "text-gray-600"
          }`}
        >
          <LuChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default AirlineSlider;
