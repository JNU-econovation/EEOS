import classNames from "classnames";

const customTabItemStyle = {
  gray: "bg-gray-10 text-gray-30 border-gray-20",
  yellow: "bg-warning-10 text-warning-30 border-warning-30",
  teal: "bg-secondary-20 text-tertiary-20 border-tertiary-20",
  white: "bg-background text-gray-30 border-background",
  navy: "bg-paragraph text-background border-paragraph",
};

interface CustomTabItemProps {
  text: string;
  rounded?: boolean;
  disable?: boolean;
  color?: "gray" | "yellow" | "teal" | "white" | "navy";
  size: "sm" | "md" | "lg";
  onClick?: () => void;
}

const CustomTabItem = ({
  text,
  rounded = false,
  disable = false,
  color = "gray",
  size,
  onClick = () => {},
}: CustomTabItemProps) => {
  const tabItemClass = classNames(
    "flex h-fit w-fit items-center justify-center border-2 font-bold",
    customTabItemStyle[color],
    {
      "opacity-50": disable,
      "rounded-xl": rounded,
      "rounded-md": !rounded,
      "min-w-[4.5rem] px-3 py-2 text-xs": size === "sm",
      "min-w-[5rem] px-3 py-2 text-sm": size === "md",
      "px-4 py-3 text-base": size === "lg",
    },
  );

  const handleClick = () => {
    if (disable) return;
    onClick();
  };

  return (
    <div className={tabItemClass} onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};
export default CustomTabItem;
