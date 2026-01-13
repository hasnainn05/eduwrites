import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ardelis EduWrites - Academic Excellence",
  description:
    "Professional academic writing services for essays, research papers, theses, and more.",
  metadataBase: new URL("https://ardelis.com"),
  openGraph: {
    title: "Ardelis EduWrites - Academic Excellence",
    description:
      "Professional academic writing services for essays, research papers, theses, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Canvas3DWrapper />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <LiveChat />
        </div>
      </body>
    </html>
  );
}
