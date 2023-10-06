import React, { PropsWithChildren } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: PropsWithChildren<TitleProps>) => {
  return (
    <h1 className="font-bold text-3xl text-black w-full my-8">{children}</h1>
  );
};

export default Title;
