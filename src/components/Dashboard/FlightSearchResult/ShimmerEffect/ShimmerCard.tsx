const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-lg mb-[2rem]">
      <div className="grid grid-cols-12  gap-4 py-10 px-8">
        <div className=" flex flex-col gap-4 w-full col-span-2 ">
          <div className="flex w-full items-center gap-4">
            <div className="skeleton h-12 w-12 rounded-md bg-gray_light_2"></div>
            <div className="skeleton h-4 w-1/2 bg-gray_light_2"></div>
          </div>
          <div className="flex gap-4">
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
          </div>
        </div>
        <div className=" flex items-center gap-4 w-full col-span-7 px-[6rem]">
          <div className="flex flex-col w-full gap-4">
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
          </div>
          <div className="w-full">
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
          </div>
          <div className="w-full flex gap-4 flex-col">
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
            <div className="skeleton h-4 w-full bg-gray_light_2"></div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-full col-span-3">
          <div className="skeleton h-32 w-full bg-gray_light_2"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
