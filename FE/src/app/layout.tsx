import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/provider";
import Header from "@/components/common/header/Header";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EEOS",
  description: "Econovation Event Operating System",
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col items-center">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
