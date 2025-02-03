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
      className={`fixed inset-0 bg-black bg-opacity-20 flex justify-center items-end transition-transform duration-300 z-50 ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={onClose}
    >
      <div
        className="w-full  bg-white rounded-t-2xl p-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold py-2">Filters</h2>
        <div className="flex justify-center bg-gray_light_3 rounded-lg">
          <FlightSearchResultSidebar />
        </div>
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
