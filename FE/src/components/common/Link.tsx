import classNames from "classnames";
import LinkNext, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

const colors = {
  primary: "bg-primary text-paragraph",
  gray: "bg-gray-100 text-paragraph",
  white: "bg-background text-paragraph",
  defalut: "",
};

const sizes = {
  sm: "py-1 px-3 rounded-sm min-w-[4rem]",
  md: "py-2 px-4 rounded-md min-w-[6rem]",
  lg: "py-3 px-5 rounded-lg min-w-[8rem]",
  defalut: "",
};

interface Props extends LinkProps {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  className?: string;
}

const Link = ({
  href,
  children,
  color = "defalut",
  size = "defalut",
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const btnStyle = classNames(
    "flex justify-center gap-2",
    colors[color],
    sizes[size],
    className,
  );

  return (
    <LinkNext href={href} {...props} className={btnStyle}>
      {children}
    </LinkNext>
  );
};

export default Link;
