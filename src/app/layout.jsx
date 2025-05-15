import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Literata } from 'next/font/google';
import "./globals.css";
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
});
const literata = Literata({
  variable: "--font-literata",
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wa-mac Management & Consulting - Your Home, Fully Managed. Your Time, Fully Yours.",
  description: "Wa-mac Management & Consulting - Your Home, Fully Managed. Your Time, Fully Yours.",
  icons: {
    icon: '/footer_logo2.svg', 
    shortcut: '/footer_logo2.svg',
  },

};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${literata.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
