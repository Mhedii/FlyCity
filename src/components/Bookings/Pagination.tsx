import React from "react";

interface PaginationProps {
  totalBookings: number;
  bookingsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalBookings,
  bookingsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalBookings / bookingsPerPage);

  return (
    <div className="flex justify-center space-x-2 py-8">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 border rounded-md disabled:opacity-50 bg-primary text-white"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2   rounded-full ${
            currentPage === page ? "bg-primary text-white" : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="px-4 py-2 border rounded-md disabled:opacity-50 bg-primary text-white"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
