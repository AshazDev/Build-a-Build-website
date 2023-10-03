import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build a Brand",
  metadataBase: new URL("https://build.a.brand.netlify.app"),
  description: "The website for Build a Brand",
  openGraph: {
    images:
      "https://github.com/AshazDev/build-a-brand-website-images/blob/main/Build%20a%20Brand.png?raw=true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
