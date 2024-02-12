import classNames from "classnames";

interface AttendStatusToggleItemProps {
  text: string;
  color: string;
}

const badgeColors = {
  green: "bg-success-10 text-success-30 border-success-30",
  yellow: "bg-warning-10 text-warning-30 border-warning-30",
  red: "bg-action-10 text-action-20 border-action-20",
  gray: "bg-gray-10 text-gray-30 border-gray-10",
  teal: "bg-secondary-20 text-tertiary-20 border-tertiary-20",
};

const AttendStatusToggleItem = ({
  text,
  color = "gray",
}: AttendStatusToggleItemProps) => {
  const badgeStyle = classNames(
    "flex h-fit w-fit transform cursor-pointer items-center justify-center rounded-3xl border-2 px-8 py-2 font-bold duration-200",
    badgeColors[color],
  );

  return (
    <div className={badgeStyle} role="button">
      <span>{text}</span>
    </div>
  );
};
export default AttendStatusToggleItem;
