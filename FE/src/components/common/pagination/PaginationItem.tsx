import classNames from "classnames";

interface PaginationItemProps {
  isSelected: boolean;
  onClick: () => void;
  number: number;
}

const PaginationItem = ({
  number,
  isSelected,
  onClick,
}: PaginationItemProps) => {
  const paginationItemStyle = classNames(
    "flex h-8 w-8 items-center justify-center rounded-lg",
    isSelected ? "bg-primary" : "bg-background",
  );

  return (
    <button onClick={onClick} className={paginationItemStyle}>
      {number}
    </button>
  );
};

export default PaginationItem;
