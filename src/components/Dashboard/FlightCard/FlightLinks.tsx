interface FlightLinksProps {
  links: string[];
}

const FlightLinks: React.FC<FlightLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-around text-sm text-blue-500">
      {links.map((link, index) => (
        <a key={index} href="#" className="hover:underline">
          {link}
        </a>
      ))}
    </div>
  );
};

export default FlightLinks;
