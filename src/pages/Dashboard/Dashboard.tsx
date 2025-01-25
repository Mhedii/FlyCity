import React from "react";
import TabMenu from "../../components/Dashboard/TabMenu";
import FlightSearchForm from "../../components/Dashboard/FlightSearchForm";
import DynamicList from "../../components/Dashboard/DynamicList";

const Dashboard: React.FC = () => {
  const dynamicData = [
    { image: "/assets/images/search_flight_1.png", title: "Holiday is Live" },
    { image: "/assets/images/search_flight_2.png", title: "Special Offer" },
    { image: "/assets/images/search_flight_3.png", title: "World Tourism" },
  ];

  return (
    <div>
      <div className="pb-[4.625rem]  bg-white rounded-xl">
        <div className=" px-[3.25rem] ">
          <TabMenu />
        </div>
        <hr className="pt-[11.5px] pb-[1.813rem] text-gray_light" />
        <div className=" px-[3.25rem] ">
          <FlightSearchForm />
        </div>
        {/* <img src="/assets/images/search_flight_1.png" alt="" /> */}
      </div>
      <DynamicList items={dynamicData} />
    </div>
  );
};

export default Dashboard;
