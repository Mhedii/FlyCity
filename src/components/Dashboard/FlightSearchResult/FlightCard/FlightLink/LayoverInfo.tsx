import { LuDot } from "react-icons/lu";

interface LayoverInfoProps {
  layoverTime: string;
  location: string;
  showTerminalChange?: boolean;
}

const LayoverInfo: React.FC<LayoverInfoProps> = ({
  layoverTime,
  location,
  showTerminalChange = true,
}) => {
  {
    /* <div className="flex items-center my-2">
          <p className=" flex border border-gray px-2 py-1  gap-2 items-center rounded-sm w-fit ml-[15rem] flex-nowrap">
            <span className="text-red-500 flex items-center font-medium">
              {" "}
              Change of Terminal <LuDot className="text-2xl" />
              Change of Planes{" "}
            </span>
            6h 0m Layover in Los Angels
          </p>
          <div className="border-t flex-grow   border-gray"></div>
        </div> */
  }
  return (
    <div className="flex items-center my-[1.5rem]">
      <p className="flex border border-gray_light_2 px-2 py-1 gap-2 items-center rounded-sm w-fit ml-[15rem] flex-nowrap">
        {showTerminalChange && (
          <span className="text-red-500 flex items-center font-medium">
            Change of Terminal <LuDot className="text-2xl" /> Change of Planes
          </span>
        )}
        {layoverTime} Layover in {location}
      </p>
      <div className="border-t flex-grow border-gray_light_2"></div>
    </div>
  );
};

export default LayoverInfo;
