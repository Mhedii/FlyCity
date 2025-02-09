const LineLoading = () => {
  return (
    <div className="flex relative justify-center items-center h-1 bg-gray-100">
      <div className="loading-bar w-64 h-1 bg-gray-300 rounded-badge overflow-hidden ">
        <div className="fill-bar absolute top-0 left-1/2 w-0 h-full rounded-badge bg-red-500 animate-expand"></div>
      </div>
    </div>
  );
};

export default LineLoading;
