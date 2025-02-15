import React from "react";

// interface FareBreakdownProps {
//   baseFare: number;
//   taxes: number;
//   other: number;
//   price: number;
//   qty: number;
//   discount: number;
//   currency: string;
// }
interface PassengerFare {
  passengerType: string;
  baseFare: number;
  taxes: number;
  otherCharges: number;
  discountLess: number;
  ait: number; // Assuming AIT VAT
  quantity: number;
  totalFare: number;
  currency: string;
}

interface FlightFare {
  passengerFares: PassengerFare[];
}

interface FlightsTotalFare {
  ait: number; // AIT VAT
  currency: string;
  subTotalFare: number;
  totalFare: number;
}

interface FareBreakdownProps {
  flightsTotalFare: FlightsTotalFare;
  flightsFare: FlightFare[];
}

const FareSummary: React.FC<FareBreakdownProps> = ({
  // baseFare,
  // taxes,
  // other,
  // price,
  // qty,
  // discount,
  // currency,
  flightsTotalFare,
  flightsFare,
}) => {
  // const subtotal = price * qty;
  // const totalPrice = subtotal - discount;

  return (
    <div className="border border-gray_light_3 rounded-sm p-4 ">
      <div className=" ">
        <table className="w-full text-left mt-2 border border-gray_light_3 rounded-lg ">
          <thead className="bg-gray_light_3 ">
            <tr className="text-gray  font-medium border-b text-base border-gray_light_3">
              <th className="py-2  font-semibold  px-4">Pax Type</th>
              <th className="py-2 font-semibold  ">Base Fare</th>
              <th className="py-2 font-semibold  ">Tax</th>
              <th className="py-2 font-semibold  ">Other</th>
              <th className="py-2 font-semibold  ">Discount</th>
              <th className="py-2 font-semibold  ">AIT VAT</th>
              <th className="py-2 font-semibold  ">Pax Count</th>
              <th className="py-2 font-semibold  ">Amount</th>
            </tr>
          </thead>
          <tbody>
            {flightsFare.map((fares) =>
              fares.passengerFares.map((fare, fareIndex) => (
                <tr className="border-b border-gray_light_3  " key={fareIndex}>
                  <td className="py-2  px-4">{fare.passengerType}</td>
                  <td className="py-2 ">{fare.baseFare}</td>
                  <td className="py-2 ">{fare.taxes}</td>
                  <td className="py-2 ">{fare.otherCharges}</td>
                  <td className="py-2 ">{fare.discountLess}</td>
                  <td className="py-2 ">{flightsTotalFare.ait}</td>
                  <td className="py-2 ">{fare.quantity}</td>
                  <td className="py-2  font-medium">
                    {fare.currency} {fare.totalFare}
                  </td>
                </tr>
              ))
            )}

            {/* <tr className="border-b border-gray_light_3  ">
              <td className="py-2  px-4">Adult</td>
              <td className="py-2 ">{baseFare}</td>
              <td className="py-2 ">{taxes}</td>
              <td className="py-2 ">{other}</td>
              <td className="py-2 ">{price}</td>
              <td className="py-2 ">{qty}</td>
              <td className="py-2 ">{qty}</td>
              <td className="py-2  font-medium">
                {currency} {subtotal}
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className="mt-4  flex justify-end w-full">
          <div className="text-base">
            <p className=" font-medium w-[30rem] flex justify-between   text-end">
              Total Agent Payable{" "}
              <span>
                {flightsTotalFare.currency}{" "}
                <strong className="text-lg text-black ">
                  {flightsTotalFare.subTotalFare}
                </strong>
              </span>
            </p>
            <p className=" font-medium w-[30rem] flex justify-between   text-end">
              Total Customer Payable{" "}
              <span>
                {flightsTotalFare.currency}{" "}
                <strong className="text-lg text-black ">
                  {flightsTotalFare.totalFare}
                </strong>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
// import React from "react";

// interface FareBreakdownProps {
//   baseFare: number;
//   taxes: number;
//   other: number;
//   price: number;
//   qty: number;
//   discount: number;
//   currency: string;
// }

// const FareSummary: React.FC<FareBreakdownProps> = ({
//   baseFare,
//   taxes,
//   other,
//   price,
//   qty,
//   discount,
//   currency,
// }) => {
//   const subtotal = price * qty;
//   const totalPrice = subtotal - discount;

//   return (
//     <div className="border border-gray_light_3 rounded-sm p-4 ">
//       <div className=" ">
//         <table className="w-full text-left mt-2">
//           <thead>
//             <tr className="text-gray font-medium border-b border-gray_light_3">
//               <th className="py-2 font-semibold text-sm">TRAVELLER</th>
//               <th className="py-2 font-semibold text-sm text-right">
//                 BASE FARE
//               </th>
//               <th className="py-2 font-semibold text-sm text-right">TAXES</th>
//               <th className="py-2 font-semibold text-sm text-right">OTHER</th>
//               <th className="py-2 font-semibold text-sm text-right">PRICE</th>
//               <th className="py-2 font-semibold text-sm text-right">QTY</th>
//               <th className="py-2 font-semibold text-sm text-right">TOTAL</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b border-gray_light_3 text-gray">
//               <td className="py-2 text-xs">Adult</td>
//               <td className="py-2 text-xs text-right">{baseFare}</td>
//               <td className="py-2 text-xs text-right">{taxes}</td>
//               <td className="py-2 text-xs text-right">{other}</td>
//               <td className="py-2 text-xs text-right">{price}</td>
//               <td className="py-2 text-xs text-right">{qty}</td>
//               <td className="py-2 text-xs font-medium text-right">
//                 {currency} {subtotal}
//               </td>
//             </tr>
//             <tr className=" text-right text-xs  ">
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td className="font-semibold ">Sub Total</td>

//               <td className=" text-xs font-medium text-right text-gray">
//                 {currency}{" "}
//                 <strong className="text-sm text-black">{subtotal}</strong>
//               </td>
//             </tr>
//             <tr className=" text-right text-xs ">
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td className="font-semibold ">Less Discount</td>

//               <td className=" text-xs font-medium text-gray text-right">
//                 {currency}{" "}
//                 <strong className="text-sm text-black">({-discount})</strong>
//               </td>
//             </tr>
//             <tr className=" text-right text-xs ">
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td className="font-semibold ">Total Price</td>

//               <td className=" text-xs font-medium text-right text-gray">
//                 {currency}{" "}
//                 <strong className="text-sm text-black">{totalPrice}</strong>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FareSummary;
