import FlightSearchResultSidebar from "../Sidebar/FlightSearchResultSidebar";

const FlightFiltersModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-20 flex justify-center items-end transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={onClose}
    >
      <div
        className="w-full bg-white rounded-t-2xl p-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">Filters</h2>
        <FlightSearchResultSidebar />
        <button
          onClick={onClose}
          className="w-full mt-4 bg-primary text-white py-2 rounded-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
};
export default FlightFiltersModal;
