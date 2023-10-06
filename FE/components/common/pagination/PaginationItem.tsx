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
  return (
    <div
      onClick={onClick}
      className={`w-8 h-8 flex justify-center items-center rounded-lg ${
        type === "selected" ? "bg-primary" : "bg-background"
      }`}
    >
      {children}
    </div>
  );
};

export default PaginationItem;
