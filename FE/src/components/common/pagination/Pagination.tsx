import Image from "next/image";
import PaginationItem from "./PaginationItem";
import { calcPageNumbers } from "@/utils/calcPageNumber";

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
      <button onClick={handleBackward} type="button">
        <Image
          src="/icons/left.svg"
          alt="이전 페이지"
          width={20}
          height={20}
          className="h-[20px] w-[20px]"
        />
      </button>
      <div className="flex gap-4">
        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            isSelected={number === currentPage}
            onClick={() => onChange(number)}
            number={number}
          />
        ))}
      </div>
      <button onClick={handleForward} type="button">
        <Image
          src="/icons/right.svg"
          alt="이후 페이지"
          width={20}
          height={20}
          className="h-[20px] w-[20px]"
        />
      </button>
    </div>
  );
};

export default Paginataion;
