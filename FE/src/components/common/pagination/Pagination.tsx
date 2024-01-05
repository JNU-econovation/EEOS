import { calcPageNumbers } from "@/utils/calcPageNumber";
import PaginationItem from "./PaginationItem";
import Image from "next/image";

interface PaginataionProps {
  totalPage: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Paginataion = ({
  totalPage,
  currentPage,
  onChange,
}: PaginataionProps) => {
  const pageNumbers = calcPageNumbers(currentPage, totalPage);

  const handleBackward = () => {
    if (currentPage === 1) return;
    onChange(currentPage - 1);
  };

  const handleForward = () => {
    if (currentPage === totalPage) return;
    onChange(currentPage + 1);
  };

  return (
    <div className="my-14 flex w-full items-center justify-center gap-8">
      <Image
        src="/icons/left.svg"
        alt="이전 페이지"
        onClick={handleBackward}
        width={20}
        height={20}
        className="h-[20px] w-[20px]"
      />
      <div className="hidden gap-4 md:flex">
        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            isSelected={number === currentPage}
            onClick={() => onChange(number)}
            number={number}
          />
        ))}
      </div>
      <Image
        src="/icons/right.svg"
        alt="이후 페이지"
        onClick={handleForward}
        width={20}
        height={20}
        className="h-[20px] w-[20px]"
      />
    </div>
  );
};

export default Paginataion;
