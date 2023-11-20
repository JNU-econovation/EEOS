import classNames from "classnames";

interface CustomToggleItemProps {
  text: string;
  color?: "green" | "yellow" | "red" | "default";
  isBorder?: boolean;
}

const itemColors = {
  green: "bg-success-10 text-success-30 border-success-30",
  yellow: "bg-warning-10 text-warning-30 border-warning-30",
  red: "bg-action-10 text-action-20 border-action-20",
  default: "bg-gray-10 text-gray-30 border-gray-10",
};

const CustomToggleItem = ({
  text,
  color = "default",
}: CustomToggleItemProps) => {
  const itemStyle = classNames(
    "flex transform cursor-pointer items-center justify-center rounded-3xl border-2 px-8 py-2 font-bold duration-200",
    itemColors[color],
  );

  return (
    <div className={itemStyle}>
      <span>{text}</span>
    </div>
  );
};
export default CustomToggleItem;
