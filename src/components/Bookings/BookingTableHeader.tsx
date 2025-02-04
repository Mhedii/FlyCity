const BookingTableHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <p className="font-semibold text-lg">My Booking</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="input input-bordered input-sm"
        />
        <select className="select select-bordered select-sm">
          <option>All Booking</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>
      </div>
    </div>
  );
};

export default BookingTableHeader;
