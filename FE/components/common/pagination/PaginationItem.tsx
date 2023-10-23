import classNames from "classnames";
import { PropsWithChildren } from "react";

interface PaginationItemProps {
  type: "selected" | "normal";
  onClick: () => void;
}

const PaginationItem = ({
  children,
  type,
  onClick,
}: PropsWithChildren<PaginationItemProps>) => {
  const paginationItemStyle = classNames(
    "flex h-8 w-8 items-center justify-center rounded-lg",
    {
      "bg-primary": type === "selected",
      "bg-background": type === "normal",
    },
  );

  return (
    <div onClick={onClick} className={paginationItemStyle}>
      {children}
    </div>
  );
};

export default PaginationItem;
