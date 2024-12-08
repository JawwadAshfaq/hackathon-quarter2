import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Make sure this exists in the right location
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Comforty - Best Furniture for Your Interior",
  description: "Shop high-quality furniture for your home. Explore a wide range of stylish chairs, tables, and more at Comforty. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Topbar />
        <Header />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
