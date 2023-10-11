import { PropsWithChildren } from "react";
import Header, { headerRight } from "./Header";

interface SubLayoutProps {
  right: headerRight;
}

const SubLayout = ({ children, right }: PropsWithChildren<SubLayoutProps>) => {
  return (
    <>
      <Header left="left" right={right} />
      <main className="flex flex-col items-center w-full h-full">
        {children}
      </main>
    </>
  );
};

export default SubLayout;
