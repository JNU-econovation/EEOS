import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main className="mb-28 mt-16 h-full w-full max-w-[500px] sm:max-w-[800px] lg:max-w-[1112px]">
      {children}
    </main>
  );
}
