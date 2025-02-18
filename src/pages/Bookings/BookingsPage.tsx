import React, { useState } from "react";
import bookingsData from "../../data/bookingsData";
import SearchBar from "../../components/Bookings/SearchBar";
import FilterDropdown from "../../components/Bookings/FilterDropdown";
import BookingTable from "../../components/Bookings/BookingTable";
import Pagination from "../../components/Bookings/Pagination";

const BookingsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All Booking");
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 2;

  // Filtering based on search and status
  const filteredBookings = bookingsData.filter((booking) => {
    return (
      (filterStatus === "All Booking" || booking.status === filterStatus) &&
      booking.reference.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination Logic
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  return (
    <div className=" min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Booking</h1>
      <div className="bg-white px-[1.813rem] rounded-xl ">
        <div className="flex gap-6 items-center  pt-[2rem] pb-[1.438rem] ">
          <SearchBar setSearchTerm={setSearchTerm} />
          <FilterDropdown setFilterStatus={setFilterStatus} />
        </div>
        <BookingTable bookings={currentBookings} />
        <Pagination
          totalBookings={filteredBookings.length}
          bookingsPerPage={bookingsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BookingsPage;
