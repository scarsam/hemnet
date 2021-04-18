import React from "react";
import Button from "./Button";

interface IPagination {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.VFC<IPagination> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const pages = Array.from({ length: totalPages / 20 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <Button
        variant="large"
        disabled={currentPage === pages[0]}
        handleClick={() =>
          setCurrentPage((currentPage) => {
            if (currentPage > pages[0]) {
              return (currentPage = currentPage - 1);
            }
            return currentPage;
          })
        }
      >
        Previous page
      </Button>
      <Button
        variant="large"
        disabled={currentPage === pages[pages.length - 1]}
        handleClick={() =>
          setCurrentPage((currentPage) => {
            if (currentPage < pages[pages.length - 1]) {
              return (currentPage = currentPage + 1);
            }
            return currentPage;
          })
        }
      >
        Next page
      </Button>
    </div>
  );
};

export default Pagination;
