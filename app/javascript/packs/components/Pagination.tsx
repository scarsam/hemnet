import React from "react";

const Pagination = ({ totalPages, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages / 20 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <button
        className="bg-yellow-400 rounded-full px-2 m-2"
        onClick={() =>
          setCurrentPage((currentPage) => {
            if (currentPage > pages[0]) {
              return (currentPage = currentPage - 1);
            }
            return currentPage;
          })
        }
      >
        Back page
      </button>
      <button
        className="bg-yellow-400 rounded-full px-2 m-2"
        onClick={() =>
          setCurrentPage((currentPage) => {
            if (currentPage < pages[pages.length - 1]) {
              return (currentPage = currentPage + 1);
            }
            return currentPage;
          })
        }
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
