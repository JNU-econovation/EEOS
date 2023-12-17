import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/provider";
import Header from "@/components/common/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EEOS",
  description: "Econovation Event Operating System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-full w-full flex-col items-center">
        <Provider>
          <Header />
          <main className="my-16 h-full w-full max-w-[500px] sm:max-w-[800px] lg:max-w-[1112px]">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
