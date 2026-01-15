import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import LayoutClient from "./LayoutClient";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EduWrites - Academic Excellence",
  description:
    "Professional academic writing services for essays, research papers, theses, and more.",
  metadataBase: new URL("https://eduwrites.com"),
  icons: {
    icon: "https://cdn.builder.io/api/v1/image/assets%2F360dd9d64b604bb58688c9e51710ce3e%2F118b262353ba4908905314ab922751d3?format=webp&width=800",
  },
  openGraph: {
    title: "EduWrites - Academic Excellence",
    description:
      "Professional academic writing services for essays, research papers, theses, and more.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
