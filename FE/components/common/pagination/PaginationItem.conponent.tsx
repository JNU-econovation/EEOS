import classNames from "classnames";
import { PropsWithChildren } from "react";

interface PaginationItemProps {
  isSelected: boolean;
  onClick: () => void;
}

const PaginationItem = ({
  children,
  isSelected,
  onClick,
}: PropsWithChildren<PaginationItemProps>) => {
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
