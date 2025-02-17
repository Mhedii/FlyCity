import React, { useState } from "react";
import FormInput from "../../../Shared/FormInput";

interface PassengerDetailsProps {
  passengerNumber: number;
}

const PassengerDetailsForm: React.FC<PassengerDetailsProps> = ({
  passengerNumber,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    passportCountry: "",
    frequentFlyer: "",
    email: "",
    phone: "",
    passportNumber: "",
    passportExpiry: "",
    saveTraveler: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Passenger {passengerNumber}{" "}
        <span className="text-sm text-gray-500">Adult</span>
      </h2>

      {/* Personal Details */}
      <h3 className="text-lg font-medium mb-3">Personal Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-2 mt-2 col-span-2">
          {["MR.", "MS.", "MRS."].map((title) => (
            <label
              key={title}
              className="border w-[3.5rem] h-[2.5rem] px-3 flex items-center rounded cursor-pointer"
            >
              <input type="radio" value={title} className="  hidden" />
              <span>{title}</span>
            </label>
          ))}
        </div>

        <FormInput
          label="Given Name / First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Nationality"
          type="dropdown"
          name="nationality"
          value={formData.nationality}
          options={["Bangladesh", "USA", "UK"]}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Passport Country"
          type="dropdown"
          name="passportCountry"
          value={formData.passportCountry}
          options={["Bangladesh", "USA", "UK"]}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Frequent Flyer Number (Optional)"
          name="frequentFlyer"
          value={formData.frequentFlyer}
          onChange={handleChange}
        />
      </div>

      {/* Contact Details */}
      <h3 className="text-lg font-medium mt-6 mb-3">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Passport Information */}
      <h3 className="text-lg font-medium mt-6 mb-3">Passport Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Passport Number"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Passport Expiry Date"
          type="date"
          name="passportExpiry"
          value={formData.passportExpiry}
          onChange={handleChange}
          required
        />
      </div>

      {/* Save Traveler Checkbox */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          name="saveTraveler"
          checked={formData.saveTraveler}
          onChange={() =>
            setFormData((prev) => ({
              ...prev,
              saveTraveler: !prev.saveTraveler,
            }))
          }
          className="w-4 h-4"
        />
        <label className="text-gray-600">Save this to my traveler list.</label>
      </div>
    </div>
  );
};

export default PassengerDetailsForm;
