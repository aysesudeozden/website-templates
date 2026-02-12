import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tab Name",
  description: "Converted from square-index.html",
  icons: {
    icon: "https://cdn-icons-png.freepik.com/512/6655/6655473.png",
    shortcut: "https://cdn-icons-png.freepik.com/512/6655/6655473.png",
    apple: "https://cdn-icons-png.freepik.com/512/6655/6655473.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
