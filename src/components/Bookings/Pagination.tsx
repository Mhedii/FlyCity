const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button className="btn btn-sm">Previous</button>
      <div className="flex gap-1">
        {Array.from({ length: 9 }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${i === 4 ? "btn-primary" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="btn btn-sm">Next</button>
    </div>
  );
};

export default Pagination;
