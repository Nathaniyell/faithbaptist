"use client";
import React, { useState, useEffect} from "react";
import { BsArrowBarUp, BsTelephoneForward } from "react-icons/bs";
import Logo from "../../../public/images/logo.png";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Space from "@/components/Space";
import { motion } from "framer-motion";

import { SiFacebook, SiInstagram,} from "react-icons/si";
import QuickLinkComp from "../QuickLink";
import { addressDetails, phoneNumber, quickLinks, schoolName } from "../lib/data";
import { MdMail } from "react-icons/md";

interface FormFields {
  email: string;
  name: string;
  message: string;
}

function Footer() {
  const [isMoveToVisible, setIsMoveToVisible] = useState(false);
  
  const year = new Date().getFullYear();

  const moveTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  
  const scrolling = () =>
    window.scrollY > 100 ? setIsMoveToVisible(true) : setIsMoveToVisible(false);

  useEffect(() => {
    window.onscroll = scrolling;
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <motion.footer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="bg-primary text-white py-10"
    >

      <section className="w-[95%] mx-auto  flex flex-col items-center justify-center gap-8">
        {/* aside links */}

        <aside className="w-full grid lg:grid-cols-3 items-start justify-around gap-8">
          <div className="flex flex-col justify-center item-center gap-2 p-2 hover:bg-black hover:bg-opacity-40 transition-all rounded-md">
            <h1 className="text-xl sm:text-3xl font-bold mb-2">
             LOGO
            </h1>
            <p className="">Faith Baptist Shools! A nurturing environment where your child can thrive academically and morally. At Faith Baptist Schools, we blend innovative teaching with strong values, ensuring a well-rounded education. With supportive parents and a dedicated team, we create a home away from home where every child excels. Choose Faith Baptist—where bright futures begin!</p>       
          </div>
          <div className="flex flex-col justify-center item-center gap-2 p-2 hover:bg-black hover:bg-opacity-40 transition-all rounded-md">
            <h1 className="text-xl sm:text-3xl font-bold mb-2">
              Contact us
            </h1>
            <div className="flex flex-col gap-6">
            <address className="not-italic w-2/3">
              {addressDetails}
            </address>
            <p className="flex items-center gap-2">
              <BsTelephoneForward /> <span>{phoneNumber}</span>
            </p>
            <p className="flex items-center gap-2 lowercase">
              <MdMail />
              <a
                href={`mailto:${schoolName}`}
                className="hover:underline active:underline visited:text-orange-600"
              >
                {schoolName}
              </a>
            </p>
            <div className="flex gap-5 w-full">
              <Link
                className="text-white text-2xl p-2 rounded-md transition-all duration-300"
                href=""
              >
                <SiInstagram />
              </Link>

              <Link
                className="text-white text-2xl p-2 rounded-md transition-all duration-300"
                href=""
              >
                <SiFacebook />
              </Link>
              </div>
            </div>
          </div>


          <QuickLinkComp heading="quick links" linksArray={quickLinks} />
        </aside>
        {/* footer bottom */}
        <div className="mt-2 mb-10">
          <p className="capitalize text-sm sm:text-sm text-center font-medium text-slate-200">
            <span>Copyright &copy; All rights reserved {year}</span> - <span>{schoolName}</span>
          </p>
        </div>
      </section>
      <button
        onClick={moveTop}
        className={`${isMoveToVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } fixed bottom-5 right-5 bg-primary2 hover:bg-opacity-70 text-white p-2 rounded-full z-[10000] outline-0 transition-all duration-300`}
      >
        <BsArrowBarUp className="text-2xl" />
      </button>



    </motion.footer>
  );
}

export default Footer;
