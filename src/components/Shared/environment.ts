export const environment = {
  SearchOptions: {
    flight: {
      locationOptions: [
        { label: "KUL", value: "KUL", subText: "Kuala Lumpur, Malaysia" },
        { label: "SIN", value: "SIN", subText: "Changi , Singapore" },
        { label: "JFK", value: "JFK", subText: "New York, USA" },
        { label: "DAC", value: "DAC", subText: "Dhaka, Bangladesh" },
        { label: "DXB", value: "DXB", subText: "Dubai, UAE" },
        { label: "MEL", value: "MEL", subText: "MELBOURNE, Australia" },
        { label: "CCU", value: "CCU", subText: "Netaji Subash Chandra" },
      ],
      trip_types: [
        { label: "One way", value: 1 },
        { label: "Round way", value: 2 },
        { label: "Multi way", value: 3 },
      ],
      airlines: [
        "Emirates",
        "American Airlines",
        "Delta Airlines",
        "United Airlines",
        "Qatar Airways",
        "British Airways",
      ],
      fare_type: [
        { label: "Regular Fare", value: 1, code: "ADT" },
        { label: "Umrah Fare", value: 2, code: "UMARAH" },
        { label: "NDC", value: 3, code: "NDC" },
      ],
      dropdownData: [
        {
          label: "Economy",
          // options: ["Economy", "Premium Economy", "Business", "First Class"],
          options: [
            { id: 1, label: "Economy" },
            { id: 2, label: "Premium Economy" },
            { id: 3, label: "Business" },
            { id: 4, label: "First Class" },
          ],
        },
      ],
      travellerTypeList: [
        {
          name: "Adults",
          name2: "Adult",
          description: "12 years & above",
          code: "ADT",
          cls: "",
        },
        {
          name: "Children",
          name2: "Child",
          description: "From 2 to under 12",
          code: "CHD",
          cls: "",
        },
        {
          name: "Infants",
          name2: "Infant",
          description: "Under 2 years",
          code: "INF",
          cls: "",
        },
      ],
    },
  },
};
