import type { Metadata } from "next";
import "../styles/globals.css";
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
          <div className="w-full">
                    <iframe 
                        className="w-full h-[20rem]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
