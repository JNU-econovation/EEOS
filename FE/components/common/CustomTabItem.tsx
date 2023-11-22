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
}

const CustomTabItem = ({
  text,
  rounded = false,
  disable = false,
  color = "gray",
  size,
}: CustomTabItemProps) => {
  const tabItemClass = classNames(
    "h-fit w-fit border-2 font-bold",
    customTabItemStyle[color],
    {
      "opacity-50": disable,
      "rounded-xl": rounded,
      "rounded-md": !rounded,
      "px-3 py-2 text-sm": size === "sm",
      "px-4 py-2 text-base": size === "md",
      "px-5 py-3 text-lg": size === "lg",
    },
  );

  return (
    <div className={tabItemClass}>
      <span>{text}</span>
    </div>
  );
};
export default CustomTabItem;
