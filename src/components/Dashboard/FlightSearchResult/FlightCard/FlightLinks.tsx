import { Link } from "react-router";
import Button from "../../../Shared/Button";

interface FlightLinksProps {
  links: string[];
}

const FlightLinks: React.FC<FlightLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-between px-[1.313rem] text-[1.188rem] text-primary pb-[2.063rem]">
      <div className="flex ">
        {links.map((link, index) => (
          <Link to="" key={index} className="font-semibold">
            {link}
            {index < links.length - 1 && <span className="px-4">|</span>}
          </Link>
        ))}
      </div>
      <Button text="CHOOSE FLIGHT" className="font-semibold" />
    </div>
  );
};

export default FlightLinks;
