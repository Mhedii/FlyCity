import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FareBreakdown {
  label: string;
  baseFare: number;
  tax: number;
}

interface FareSummaryProps {
  flightLogo: string;
  route: string;
  tripType: string;
  fareDetails: FareBreakdown[];
  subTotal: number;
  discountLabel: string;
  discountAmount: number;
  convenienceCharge: number;
}

const FareSummaryCard: React.FC<FareSummaryProps> = ({
  flightLogo,
  route,
  tripType,
  fareDetails,
  subTotal,
  discountLabel,
  discountAmount,
  convenienceCharge,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPayable = subTotal - discountAmount + convenienceCharge;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={flightLogo} alt="Flight Logo" className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">{route}</h3>
            <p className="text-sm text-gray-500">{tripType}</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Fare Details (Dropdown) */}
      {isOpen && (
        <div className="border-t pt-3 text-gray-700">
          <h4 className="font-medium mb-2">Fare Summary</h4>
          {fareDetails.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{item.label}</p>
              <div className="flex justify-between">
                <span>Base Fare</span>
                <span className="font-medium">
                  BDT {item.baseFare.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-medium">
                  BDT {item.tax.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between font-medium">
              <span>Sub-Total</span>
              <span>BDT {subTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>{discountLabel}</span>
              <span>- BDT {discountAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Charge</span>
              <span>BDT {convenienceCharge.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Total Payable */}
      <div className="mt-3">
        <div className="flex justify-between font-semibold text-lg">
          <span>You Pay</span>
          <span className="text-blue-600">
            BDT {totalPayable.toLocaleString()}
          </span>
        </div>
        <p className="text-green-600 text-sm">
          You Save BDT {discountAmount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default FareSummaryCard;
