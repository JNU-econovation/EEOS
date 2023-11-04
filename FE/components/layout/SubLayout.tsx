import { PropsWithChildren } from "react";
import Header, { headerRight } from "./Header";

interface SubLayoutProps {
  right: headerRight;
}

const SubLayout = ({ children, right }: PropsWithChildren<SubLayoutProps>) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header left="left" right={right} />
      <main className="flex h-full w-full max-w-[300px] flex-col items-center sm:max-w-[600px] lg:max-w-[900px]">
        {children}
      </main>
    </div>
  );
};

export default SubLayout;
