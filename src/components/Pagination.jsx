import React from "react";

const Pagination = ({
  onNextPage,
  onPrevPage,
  hasNextPage,
  hasPrevPage,
  setloder,
}) => {
  return (
    <div className="mt-4 flex justify-between">
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          hasPrevPage ? "hover:bg-blue-600" : "cursor-not-allowed"
        }`}
        onClick={onPrevPage}
        disabled={!hasPrevPage}
      >
        Previous
      </button>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          hasNextPage ? "hover:bg-blue-600" : "cursor-not-allowed"
        }`}
        onClick={() => {
          setloder(true);
          onNextPage();
        }}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
