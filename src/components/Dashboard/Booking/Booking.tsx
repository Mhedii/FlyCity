import React, { useEffect, useState } from "react";
import PassengerDetailsForm from "./PassengersInformation/PassengerDetailsForm";
import FareSummaryCard from "./PassengersInformation/FareSummaryCard";
// import { useSearchParams } from "react-router-dom";

// import { getSelectedItemFromSession } from "../../../utils/authUtils";
const Booking: React.FC = () => {
  // const id = useParams();
  const fareDetails = [
    { label: "Adult (2 travelers)", baseFare: 234228, tax: 27886 },
    { label: "Child (1 traveler)", baseFare: 117114, tax: 1486 },
    { label: "Infant (1 traveler)", baseFare: 0, tax: 10457 },
  ];
  // console.log(id);
  // const [flightData, setFlightData] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     const data = getSelectedItemFromSession(id);
  //     if (data) {
  //       setFlightData(data);
  //     } else {
  //       console.log("No data found in session storage for this result ID.");
  //     }
  //   }
  // }, [id]);

  // if (!flightData) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="p-6  grid grid-cols-12">
      <div className=" col-span-6  space-y-6">
        <PassengerDetailsForm passengerNumber={1} />
        <PassengerDetailsForm passengerNumber={2} />
      </div>

      <div className="col-span-6 flex  h-fit bg-gray-100 pl-8">
        <FareSummaryCard
          flightLogo="/assets/images/planecompany_icon.png"
          route="DAC - MEL"
          tripType="One Way"
          fareDetails={fareDetails}
          subTotal={391171}
          discountLabel="Hot Deals AMEX1823"
          discountAmount={15000}
          convenienceCharge={7900}
        />
      </div>
    </div>
  );
};

export default Booking;
