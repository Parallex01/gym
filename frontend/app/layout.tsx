
import type { Metadata } from "next";
import {
  Bebas_Neue,
  Barlow_Condensed,
  Inter,
} from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muscle Monk | Train Hard. Stay Strong.",
  description: "Build strength, discipline and confidence at Muscle Monk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${inter.variable} bg-[#171717]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
