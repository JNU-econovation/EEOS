import React, { PropsWithChildren } from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: PropsWithChildren<TitleProps>) => {
  return (
    <h1 className={`font-bold text-3xl text-black my-8 ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
