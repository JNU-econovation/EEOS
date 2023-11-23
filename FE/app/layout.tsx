import type { Metadata } from "next";
import Provider from "@/src/utils/provider";
import "./globals.css";

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
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
