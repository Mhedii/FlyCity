import React from "react";

const DynamicList: React.FC<{ items: { image: string; title: string }[] }> = ({
  items,
}) => {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 gap-6 mt-[1rem] lg:mt-[3.5rem]">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} className="rounded-xl " />
        </div>
      ))}
    </div>
  );
};

export default DynamicList;
