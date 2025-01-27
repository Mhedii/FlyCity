interface FlightFeaturesProps {
  features: string[];
}

const FlightFeatures: React.FC<FlightFeaturesProps> = ({ features }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {features.map((feature, index) => (
        <div key={index} className="text-gray-600 text-sm">
          {feature}
        </div>
      ))}
    </div>
  );
};

export default FlightFeatures;
