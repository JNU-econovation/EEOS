import classNames from "classnames";
import { TabColor } from "@/src/types/common/common";

const customTabItemStyle: {
  [key in TabColor]: string;
} = {
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
  color?: TabColor;
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
    "flex h-fit w-fit cursor-pointer items-center justify-center border-2 font-semibold",
    customTabItemStyle[color],
    {
      "opacity-50": disable,
      "rounded-2xl": rounded,
      "rounded-lg": !rounded,
      "min-w-[4.25rem] px-2 py-[0.3rem] text-xs": size === "sm",
      "min-w-[5rem] px-3 py-2 text-sm": size === "md",
      "min-w-[6rem] px-4 py-2 text-base": size === "lg",
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
