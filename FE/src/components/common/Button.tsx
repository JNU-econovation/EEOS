import classNames from "classnames";

const colors = {
  primary: "bg-primary text-paragraph",
  gray: "bg-gray-100 text-paragraph",
  white: "bg-background text-paragraph",
  error: "bg-error text-background",
};

const sizes = {
  sm: "py-1 px-3 rounded-md min-w-[4rem]",
  md: "py-2 px-4 rounded-md min-w-[6rem]",
  lg: "py-3 px-5 rounded-lg min-w-[8rem]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  disabled,
  color = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick = () => {},
}: ButtonProps) => {
  const btnStyle = classNames(
    "flex justify-center gap-2",
    colors[color],
    sizes[size],
    className,
  );

  return (
    <button
      disabled={disabled}
      className={btnStyle}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
