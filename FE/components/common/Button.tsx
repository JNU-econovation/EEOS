import { PropsWithChildren } from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  size: "sm" | "base" | "lg";
  leftIcon: boolean;
}

const btnType = {
  primary: "bg-primary text-paragraph",
  secondary: "bg-secondary text-paragraph",
};

const btnSize = {
  sm: "py-1 px-3 rounded-sm",
  base: "py-2 px-4 rounded-md",
  lg: "py-3 px-5 rounded-lg",
};

const Button = ({
  type,
  size,
  leftIcon,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const btnStyle = `flex gap-2 ${btnType[type]} ${btnSize[size]}`;
  return (
    <button className={btnStyle}>
      {leftIcon ? (
        <img src="/icons/plus.svg" alt="plus" width={"22px"} />
      ) : (
        <></>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
