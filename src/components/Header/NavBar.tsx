"use client";

// import React from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useGlobalContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const { isMenuClicked, isScrolled, setIsMenuClicked, setIsScrolled } = useGlobalContext();
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 24) {
        // console.log(window.scrollY)
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  

  return (
    <motion.div 
       className={`bg-white ${
      isScrolled && "fixed top-0 z-50 left-0 right-0 "
    }  z- lg:before:h-[90px] w-full fixed top-0 left-0 z-50 right-0 `}>
    <nav
      className={` text-slate-700 w-full flex items-center justify-between transition-all duration-200 `}
    >
      <header className="md:w-[95%] mx-auto p-4 md:px-2 lg:p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-2 lg:gap-4">

        <div className="h-full w-full flex items-center justify-between md:justify-start md:w-1/2">
         
            <Link onClick={() => setIsMenuClicked(false)} href="/" className="inline w-1/5 md:w-1/2 lg:w-1/4">
              {/* <Image
                className="object-cover"
                src={logo}
                alt="logo"
              /> */}
              <header className="text-primary text-4xl font-bold">LOGO</header>
              {/* <Logo /> */}
            </Link>
       

          <button
            className="opacity-70 hover:opacity-100 text-3xl text-primary md:hidden"
            onClick={toggleMenu}
          >
            {isMenuClicked ? <VscClose /> : <VscMenu />}
          </button>
        </div>

        <aside
          className={`bg-[#eee] ${
            !isMenuClicked
              ? "left-full md:left-0 -z-10 opacity-10 md:opacity-100 md:z-50"
              : "left-0 md:top-0 opacity-100"
          } bg-backgrounds md:bg-transparent fixed md:relative top-[80px] md:top-0 flex flex-col md:flex-row justify-between p-4 md:p-2 gap-8 sm:p-6 w-full md:text-[1rem] lg:gap-0 md:w-full text-xl transition-all duration-500 md:transition-none capitalize text-primary`}
        >
          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/"
            className={`${
              pathName === "/" ? "text-primary font-semibold" : "text-slate-700  hover:text-primary"
            } flex items-center w-fit px-0 ${
              isMenuClicked && "w-full pb-4 pl-2"
            }`}
          >
            <span>home</span>
          </Link>
          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/about"
            className={`${
              pathName === "/about"
                ? "text-primary font-semibold"
                : "text-slate-700  hover:text-primary"
            } flex items-center  w-fit px-0 ${
              isMenuClicked && "w-full pb-4 pl-2"
            }`}
          >
            <span>about</span>
          </Link>

          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/services"
            className={`${
              pathName === "/services"
                ? "text-primary font-semibold"
                : "text-slate-700  hover:text-primary"
            } flex items-center  w-fit px-0 ${
              isMenuClicked && "w-full pb-4 pl-2"
            }`}
          >
            <span>services</span>
          </Link>

          <Link
            onClick={() => setIsMenuClicked(false)}
            href="/contact"
            className={`${
              pathName === "/contact"
                ? "text-primary font-semibold"
                : "text-slate-700  hover:text-primary"
            } flex items-center  w-fit px-0 ${
              isMenuClicked && "w-full pb-4 pl-2"
            }`}
          >
            
            <span>contact</span>
          </Link>
          <Link
            onClick={() => setIsMenuClicked(false)}
            href=""
            target="_blank"
            className={`text-white bg-red-600 border broder-primary flex items-center justify-center gap-1 p-2 text-center w-2/5  md:text-sm md:hidden lg:flex lg:w-1/3 xl:w-1/5 transition-all duration-200 rounded-lg`}
          >
            <span>school portal</span>
          </Link>
        </aside>
      </header>
    </nav>
    </motion.div>
  );
}
