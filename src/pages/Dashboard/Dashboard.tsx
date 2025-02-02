import React, { useState } from "react";
import TabMenu from "../../components/Dashboard/TabMenu";
import FlightSearchForm from "../../components/Dashboard/SearchFlight/FlightSearchForm";
import DynamicList from "../../components/Dashboard/DynamicList";
import { TabName } from "../../components/Shared/types/TabTypes";
import Visa from "../../components/Dashboard/Visa/Visa";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Flight");
  const dynamicData = [
    { image: "/assets/images/search_flight_1.png", title: "Holiday is Live" },
    { image: "/assets/images/search_flight_3.png", title: "Special Offer" },
    { image: "/assets/images/search_flight_1.png", title: "World Tourism" },
  ];
  const renderTabContent = (): JSX.Element | null => {
    switch (activeTab) {
      case "Flight":
        return <FlightSearchForm />;
      case "Group Flight":
        // return <GroupFlightForm />;
        return null;
      case "PNR Import":
        // return <PnrImportForm />;
        return null;
      case "Hotel":
        // return <HotelForm />;
        return null;
      case "Visa":
        return <Visa />;

      default:
        return null;
    }
  };
  return (
    <div className="">
      <div className="pb-[2.5rem] lg:pb-[4.625rem]  bg-white rounded-xl">
        <div className=" px-[1rem] lg:px-[3.25rem] ">
          <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <hr className="pt-[11.5px] pb-[1.813rem] text-gray_light" />
        <div className=" px-[1rem] lg:px-[3.25rem] ">{renderTabContent()}</div>
      </div>
      <DynamicList items={dynamicData} />
    </div>
  );
};

export default Dashboard;
