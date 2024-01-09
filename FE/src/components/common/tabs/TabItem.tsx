import classNames from "classnames";

export const tabColors = {
  gray: "bg-gray-10 text-gray-30 border-gray-20",
  yellow: "bg-warning-10 text-warning-30 border-warning-30",
  teal: "bg-secondary-20 text-tertiary-20 border-tertiary-20",
  white: "bg-background text-gray-30 border-background",
  navy: "bg-paragraph text-background border-paragraph",
};

export const tabSizes = {
  sm: "min-w-[4.25rem] px-2 py-[0.3rem] text-xs",
  md: "min-w-[5rem] px-3 py-2 text-sm",
  lg: "min-w-[6rem] px-4 py-2 text-base",
};

interface Props {
  color: keyof typeof tabColors;
  size: keyof typeof tabSizes;
  text: string;
  rounded?: boolean;
  onClick?: () => void;
}
const TabItem = ({ color, rounded, size, text, onClick }: Props) => {
  const tabItemStyle = classNames(
    "flex h-fit w-fit cursor-pointer items-center justify-center border-2 font-semibold",
    tabColors[color],
    tabSizes[size],
    {
      "rounded-2xl": rounded,
      "rounded-md": !rounded,
    },
  );

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button className={tabItemStyle} onClick={handleClick} type="button">
      <p>{text}</p>
    </button>
  );
};
export default TabItem;
