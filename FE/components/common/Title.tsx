import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: PropsWithChildren<TitleProps>) => {
  const titleStyle = classNames(
    "my-8 text-3xl font-bold text-black",
    className,
  );
  return <h1 className={titleStyle}>{children}</h1>;
};

export default Title;
