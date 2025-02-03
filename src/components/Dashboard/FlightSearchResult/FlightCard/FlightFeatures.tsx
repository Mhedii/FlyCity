interface FlightFeaturesProps {
  features: string[];
}

const FlightFeatures: React.FC<FlightFeaturesProps> = ({ features }) => {
  return (
    <div className="hidden xl:flex   px-[1.313rem]  ">
      {features.map((feature, index) => (
        <div key={index} className="text-black_1 text-[1.063rem]">
          {feature}
          {index < features.length - 1 && <span className="px-4">|</span>}
        </div>
      ))}
    </div>
  );
};

export default FlightFeatures;
