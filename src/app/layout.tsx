import type { Metadata } from "next";
import "./globals.css";
import MatrixRain from "@src/components/MatrixRain";

export const metadata: Metadata = {
  title: "Miracle Token",
  description: "Miracle Token Official Websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MatrixRain />
        {children}
      </body>
    </html>
  );
}
