import Header from "@/components/common/header/Header";
import { PropsWithChildren } from "react";

export default function ProgramLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className="my-16 w-full px-3 sm:max-w-[800px] lg:max-w-[1112px]">
        {children}
      </main>
    </>
  );
}
