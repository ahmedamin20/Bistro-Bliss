import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: 'Bistro Bliss',
  description: 'Discover innovative eggshell recycling solutions with EcoEgg Corp. We transform waste into valuable products like calcium chloride, collagen, and hyaluronic acid.',
  keywords: 'eggshell recycling, calcium chloride, collagen, hyaluronic acid, EcoEgg Corp, sustainable solutions, waste management, recycling innovations',
  robots: 'index, follow',
  openGraph: {
    title: 'Best Eggshell Recycling Solutions | EcoEgg Corp',
    description: 'Discover innovative eggshell recycling solutions with EcoEgg Corp. We transform waste into valuable products like calcium chloride, collagen, and hyaluronic acid.',
    url: 'https://ecoeggcorp.com',
    images: [
      {
        url: 'https://ecoeggcorp.com/images/eggshell-recycling.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoEgg Corp - Eggshell Recycling Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Eggshell Recycling Solutions | EcoEgg Corp',
    description: 'Discover innovative eggshell recycling solutions with EcoEgg Corp. We transform waste into valuable products like calcium chloride, collagen, and hyaluronic acid.',
    images: ['https://ecoeggcorp.com/images/eggshell-recycling-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://ecoeggcorp.com',
  },
};

export const viewport: Viewport  = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
