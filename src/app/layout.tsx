import type { Metadata } from "next";
import "@/app/globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/context";
import { Suspense } from "react";
import Loading from "./loading";
import Space from "@/components/Space";

export const metadata: Metadata = {
  title: "Faith Baptist Schools",
  description:
    "Building God-fearing leaders of tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          style={{ overflowX: "hidden", msOverflowX: "hidden" }}
          className="scroll-smooth w-full overflow-x-hidden mt-10 antialiased"
        >
          <NavBar />
          
          <Space border=" h-[3rem] xs:h-[7rem]" />
          {children}
         
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
