import classNames from "classnames";

interface PaginationItemProps {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const PaginationItem = ({
  children,
  isSelected,
  onClick,
}: PaginationItemProps) => {
  const paginationItemStyle = classNames(
    "flex h-8 w-8 items-center justify-center rounded-lg",
    {
      "bg-primary": isSelected,
      "bg-background": !isSelected,
    },
  );

  return (
    <div onClick={onClick} className={paginationItemStyle}>
      {children}
    </div>
  );
};

export default PaginationItem;
