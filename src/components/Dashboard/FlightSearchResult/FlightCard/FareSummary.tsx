import React from "react";

interface FareBreakdownProps {
  baseFare: number;
  taxes: number;
  other: number;
  price: number;
  qty: number;
  discount: number;
  currency: string;
}

const FareSummary: React.FC<FareBreakdownProps> = ({
  baseFare,
  taxes,
  other,
  price,
  qty,
  discount,
  currency,
}) => {
  const subtotal = price * qty;
  const totalPrice = subtotal - discount;

  return (
    <div className="border border-gray_light_3 rounded-sm p-4 ">
      <div className=" ">
        <table className="w-full text-left mt-2 border border-gray_light_3 rounded-lg ">
          <thead className="bg-gray_light_3">
            <tr className="text-gray font-medium border-b  border-gray_light_3">
              <th className="py-2 font-semibold text-base px-4">Pax Type</th>
              <th className="py-2 font-semibold text-base ">Base Fare</th>
              <th className="py-2 font-semibold text-base ">Tax</th>
              <th className="py-2 font-semibold text-base ">Other</th>
              <th className="py-2 font-semibold text-base ">Discount</th>
              <th className="py-2 font-semibold text-base ">AIT VAT</th>
              <th className="py-2 font-semibold text-base ">Pax Count</th>
              <th className="py-2 font-semibold text-base ">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray_light_3 ">
              <td className="py-2 text-sm px-4">Adult</td>
              <td className="py-2 text-sm">{baseFare}</td>
              <td className="py-2 text-sm">{taxes}</td>
              <td className="py-2 text-sm">{other}</td>
              <td className="py-2 text-sm">{price}</td>
              <td className="py-2 text-sm">{qty}</td>
              <td className="py-2 text-sm">{qty}</td>
              <td className="py-2 text-sm font-medium">
                {currency} {subtotal}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4  flex justify-end w-full">
          <div>
            <p className=" font-medium w-[30rem] flex justify-between   text-end">
              Total Agent Payable{" "}
              <span>
                {currency}{" "}
                <strong className="text-base text-black ">{totalPrice}</strong>
              </span>
            </p>
            <p className=" font-medium w-[30rem] flex justify-between   text-end">
              Total Customer Payable{" "}
              <span>
                {currency}{" "}
                <strong className="text-base text-black ">{totalPrice}</strong>
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
