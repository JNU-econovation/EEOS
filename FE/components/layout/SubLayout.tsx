import { PropsWithChildren } from "react";
import Header, { headerRight } from "./Header";

interface SubLayoutProps {
  right: headerRight;
}

const SubLayout = ({ children, right }: PropsWithChildren<SubLayoutProps>) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header left="left" right={right} />
      <main className="flex flex-col items-center w-full max-w-[900px] h-full">
        {children}
      </main>
    </div>
  );
};

export default SubLayout;
