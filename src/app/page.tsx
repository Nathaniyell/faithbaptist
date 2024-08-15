"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/utils/Button";
import Space from "@/components/Space";
import heroImg from "../../public/faithbaptist/hero2.jpg"
import heroImg2 from "../../public/faithbaptist/heroo.jpg"

import StartUp from "@/components/startup/StartUp";
import Titles from "@/components/titles/Titles";
import { schoolName } from "@/components/lib/data";
import { FaSchool } from "react-icons/fa";
import Card from "@/components/card/Card";
import WhyChooseUs from "@/components/whatWeOffer/WhyChooseUs";
import AnimatedContainer from "@/components/utils/AnimatedContainer";


export default function Home() {
  return (
    <main className="bg-white" style={{ overflow: "hidden" }}>
      <div className=" flex flex-col mx-auto w-[90%] md:flex-row md:items-center justify-between gap-10 relative">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-1/2 grid grid-cols-1 gap-6"
        >
          <h1 className="text-4xl flex flex-col gap-2 leading-[1.2]">
            <span className="text-primary2">Welcome to</span>
            <span className="text-[4rem]">{schoolName}!</span>
          </h1>

          <div className="mb-4">
            <p
              className=""
            >
              Discover a nurturing environment where your child can thrive academically and morally. At Faith Baptist, we blend innovative teaching with strong values, ensuring a well-rounded education. With supportive parents and a dedicated team, we create a home away from home where every child excels. Choose Faith Baptist—where bright futures begin!
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:flex md:justify-end md:items-center w-1/2"
        >
          <Image
            className="rounded-md"
            src={heroImg}
            alt="Hero Image"
          />
        </motion.div>
      </div>
      <Space />
      <AnimatedContainer className="relative bg-secondary2">
        <div className="bg-lightBg text-backgrounds relative flex flex-col">

          <div className="w-[90%] mx-auto relative grid place-items-center md:p-[2rem]">
            <Titles bigHeader="About Faith Baptist Schools" smallHeader="About us" variant="dark" />
            <br />
            <aside
              className="p-2 md:p-4 grid grid-cols-1 items-start place-items-center justify-between md:grid-cols-2 gap-10 mx-auto lg:pb-4"
            >
              <motion.section
                animate={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-1 gap-3 md:gap-4 mx-auto">
                <p
                  className=""
                >
                  At Faith Baptist Nursery and Primary School, we believe that every child deserves a nurturing environment where they can thrive academically and morally. Our dedicated team is committed to fostering an atmosphere of learning infused with discipline and the values of faith. Here, education goes beyond textbooks; it&apos;s about shaping well-rounded individuals equipped for the future. With innovative teaching methods and a vibrant community of supportive parents, we create a home away from home where your child can excel in subjects like reading, writing, mathematics, and the arts. Join us on this exciting journey, and discover why choosing Faith Baptist is one of the best decisions you can make for your child&apos;s education!
                </p>
                <Button
                  href="/about"
                  btnText="explore more"

                />
              </motion.section>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="lg:w-10/12"
              >


                <Image src={heroImg2} className="size-full md:mr-auto rounded-md" alt="About ProdLead" />
              </motion.div>
            </aside>
          </div>

        </div>

        {/* <div className="bg-black">
          <Space />

          <StartUp />
          <Space />
        </div> */}

      </AnimatedContainer>
      <AnimatedContainer className="text-slate-700 bg-white">
        <div className="!w-[90%] mx-auto">
          <Space />
          <Titles bigHeader="What we offer" smallHeader="start learning with us" variant="dark" />
          <br />
          <WhyChooseUs />
          <br />
        </div>
        <Space />
      </AnimatedContainer>
    </main>
  );
}
