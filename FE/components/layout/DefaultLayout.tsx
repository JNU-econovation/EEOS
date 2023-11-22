import { PropsWithChildren } from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <main className="flex h-full w-full max-w-[500px] flex-col items-center sm:max-w-[800px] lg:max-w-[1112px]">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
