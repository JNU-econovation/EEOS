import { PropsWithChildren } from "react";
import Header from "./Header";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header left="user" right="btn" />
      <main className="flex flex-col items-center w-full max-w-[900px] h-full">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
