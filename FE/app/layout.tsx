import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Provider from "@/src/utils/provider";
import "./globals.css";

const noto_sans = Noto_Sans({
  weight: ["300", "400", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black Company",
  description: "에코노 행사 통합업무",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={noto_sans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
