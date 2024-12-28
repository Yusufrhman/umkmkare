import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "UMKM DESA KARE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-[95%] mx-auto my-5 font-Figtree`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
