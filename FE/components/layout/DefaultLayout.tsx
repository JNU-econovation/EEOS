import { PropsWithChildren } from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header left="user" right="btn" />
      <main className="flex h-full w-full max-w-[900px] flex-col items-center">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
