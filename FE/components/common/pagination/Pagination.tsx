import { calcPageNumbers } from "@/src/utils/calcPageNumbers";
import PaginationItem from "./PaginationItem";

interface PaginataionProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Paginataion = ({
  totalPage,
  currentPage,
  setCurrentPage,
}: PaginataionProps) => {
  const pageNumbers = calcPageNumbers(currentPage, totalPage);
  const colorClass = "";

  return (
    <div className="flex items-center gap-8 my-14">
      <img
        src="/icons/left.svg"
        alt="이전 페이지"
        onClick={() => {
          if (currentPage === 1) return;
          setCurrentPage((prev) => prev - 1);
        }}
      />
      <div className="flex gap-4">
        {pageNumbers.map((number) => (
          <PaginationItem
            type={number === currentPage ? "selected" : "normal"}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </PaginationItem>
        ))}
      </div>

      <img
        src="/icons/right.svg"
        alt="이후 페이지"
        onClick={() => {
          if (currentPage === totalPage) return;
          setCurrentPage((prev) => prev + 1);
        }}
      />
    </div>
  );
};

export default Paginataion;
