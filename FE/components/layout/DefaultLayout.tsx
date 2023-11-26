import { PropsWithChildren } from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <main className="flex h-full w-full max-w-[300px] flex-col items-center sm:max-w-[600px] lg:max-w-[900px]">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
