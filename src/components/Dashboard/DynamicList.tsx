import React from "react";

const DynamicList: React.FC<{ items: { image: string; title: string }[] }> = ({
  items,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-[5.125rem]">
      {items.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl w-[29.375rem] h-[13.375rem]"
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicList;
