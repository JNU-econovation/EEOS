import classNames from "classnames";

const colors = {
  gray: "bg-gray-10 text-gray-30 border-gray-20",
  yellow: "bg-warning-10 text-warning-30 border-warning-30",
  teal: "bg-secondary-20 text-tertiary-20 border-tertiary-20",
  white: "bg-background text-gray-30 border-background",
  navy: "bg-paragraph text-background border-paragraph",
};

const sizes = {
  sm: "min-w-[4.25rem] px-2 py-[0.3rem] text-xs",
  md: "min-w-[5rem] px-3 py-2 text-sm",
  lg: "min-w-[6rem] px-4 py-2 text-base",
};

interface Props {
  color: keyof typeof colors;
  rounded: boolean;
  size: keyof typeof sizes;
  text: string;
  onClick?: () => void;
}
const TabItem = ({ color, rounded, size, text, onClick }: Props) => {
  const tabItemStyle = classNames(
    "flex h-fit w-fit cursor-pointer items-center justify-center border-2 font-semibold",
    colors[color],
    sizes[size],
    {
      "rounded-full": rounded,
      "rounded-md": !rounded,
    },
  );

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={tabItemStyle} onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};
export default TabItem;
