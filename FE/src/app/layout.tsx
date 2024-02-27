import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import Header from "@/components/common/header/Header";
import Provider from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EEOS",
  description: "에코노베이션 행사 관리 서비스",
  openGraph: {
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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
