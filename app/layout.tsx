"use client";

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Canvas3DWrapper } from "@/client/components/Canvas3DWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Canvas3DWrapper />
        <div className="flex flex-col min-h-screen">
          {!isAdminRoute && <Header />}
          <main className="flex-grow">{children}</main>
          {!isAdminRoute && <Footer />}
          <LiveChat />
        </div>
      </body>
    </html>
  );
}
