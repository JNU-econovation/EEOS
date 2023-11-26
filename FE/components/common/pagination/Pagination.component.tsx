import PaginationItem from "./PaginationItem.conponent";
import { calcPageNumbers } from "@/src/utils/calcPageNumbers";

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

  const handleBackward = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleForward = () => {
    if (currentPage === totalPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="my-14 flex w-full items-center justify-center gap-8">
      <img src="/icons/left.svg" alt="이전 페이지" onClick={handleBackward} />
      <div className="hidden gap-4 md:flex">
        {pageNumbers.map((number) => (
          <PaginationItem
            isSelected={number === currentPage}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </PaginationItem>
        ))}
      </div>
      <img src="/icons/right.svg" alt="이후 페이지" onClick={handleForward} />
    </div>
  );
};

export default Paginataion;
