"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/utils/Button";
import Space from "@/components/Space";
import heroImg from "../../public/faithbaptist/hero2.jpg"
import heroImg2 from "../../public/faithbaptist/heroo.jpg"
import headTeacher from "../../public/faithbaptist/headteacher.jpg"

import StartUp from "@/components/startup/StartUp";
import Titles from "@/components/titles/Titles";
import { schoolName } from "@/components/lib/data";
import { FaSchool } from "react-icons/fa";
import Card from "@/components/card/Card";
import WhyChooseUs from "@/components/whatWeOffer/WhyChooseUs";
import AnimatedContainer from "@/components/utils/AnimatedContainer";
import { useState } from "react";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <main className="bg-slate-50" style={{ overflow: "hidden" }}>
      <div className=" flex flex-col mx-auto w-[90%] lg:flex-row md:items-center justify-between gap-10 relative">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:w-1/2 grid grid-cols-1 gap-2"
        >
          <h1 className="flex flex-col gap-2 text-center lg:text-left pt-4 lg:pt-0">
            <span className="text-2xl">Welcome to</span>
            <span className="text-3xl lg:text-[3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500 lg:leading-[1.1]">{schoolName}</span>
          </h1>

          <div className="mb-4">
            <p
              className="text-[#464545]"
            >
              A nurturing environment where your child can thrive academically and morally. At Faith Baptist Schools, we blend innovative teaching with strong values, ensuring a well-rounded education. With supportive parents and a dedicated team, we create a home away from home where every child excels. Choose Faith Baptist—where bright futures begin!
            </p>
          </div>
          <h6 className="text-black font-bold italic">Admission is ongoing, hurry to school now to apply!!!</h6>
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:flex md:justify-end md:items-center lg:w-1/2"
        >
          <Image
            className="rounded-md"
            src={heroImg}
            alt="Hero Image"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />

      <AnimatedContainer className="relative bg-secondary2">
        <br />
        <br />
        <div className="w-[90%] mx-auto relative grid place-items-center py-5">
          <Titles bigHeader="About Faith Baptist Schools" smallHeader="About us" variant="dark" />
          <br />
          <br />
          <aside
            className="flex flex-col lg:flex-row w-full gap-6"
          >
            <motion.section
              animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col gap-2 mx-auto lg:w-3/4">
              <p
                className=""
              >
                At Faith Baptist Nursery and Primary School, we believe that every child deserves a nurturing environment where they can thrive academically and morally. Our dedicated team is committed to fostering an atmosphere of learning infused with discipline and the values of faith. Here, education goes beyond textbooks; it&apos;s about shaping well-rounded individuals equipped for the future. With innovative teaching methods and a vibrant community of supportive parents, we create a home away from home where your child can excel in subjects like reading, writing, mathematics, and the arts. Join us on this exciting journey, and discover why choosing Faith Baptist is one of the best decisions you can make for your child&apos;s education!
              </p>
              <Button
                href="/about"
                btnText="Read more"

              />
            </motion.section>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:w-10/12 w-full"
            >


              <Image src={heroImg2} className="size-full md:mr-auto rounded-md" alt="About ProdLead" />
            </motion.div>
          </aside>
        </div>


        {/* <div className="bg-black">
          <Space />

          <StartUp />
          <Space />
        </div> */}

      </AnimatedContainer>

      <AnimatedContainer className="text-slate-700 bg-white">
        <br />

        <br />
        <br />
        <div className="!w-[90%] mx-auto">

          <Titles bigHeader="What we offer" smallHeader="start learning with us" variant="dark" />
          <br />
          <br />
          <WhyChooseUs />
          <br />
        </div>
        <Space />
      </AnimatedContainer>
      <br />

      <AnimatedContainer className="relative">

        <div className="w-[90%] mx-auto relative grid place-items-center py-5 md:py-10">

          <Titles bigHeader="Welcome Message by our Headteacher" smallHeader="Meet our Headteacher" variant="dark" />

          <br />
          <br />
          <aside
            className="flex flex-col lg:flex-row-reverse w-full gap-6"
          >
            <motion.section
              animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col gap-1 mx-auto lg:w-3/4">
              <p
                className={`${isVisible ? "" : "line-clamp-6"}`}
              >
                Welcome to the Faith Baptist Nursery and Primary School website! Our site is designed to be welcoming and informative for parents, pupils, and visitors. At Faith Baptist, we are committed to providing an excellent all-around education that emphasizes strong morals, discipline, and the fear of God. Our dedicated School Management Board, PTA, and staff use innovative teaching methods and diverse learning environments to support each child&apos;s academic success. <br />

                We are proud of the strong partnership we share with our parents, whose support has been instrumental in our school’s achievements. Our pupils thrive in a warm, nurturing environment where they excel in various subjects, including reading, writing, mathematics, ICT, and more. With activities like career talks, sports, and clubs, we aim to create a <blockquote>home away from home</blockquote> for our pupils, preparing them for a bright future. <br />

                Choosing Faith Baptist Nursery and Primary School for your child is a significant decision, and we are confident that our approach to education will help your child achieve their fullest potential. We are always delighted to welcome you to our school community.
              </p>

              <button
                onClick={(() => setIsVisible(!isVisible))}
                className="text-blue-600 underline !self-start "
              >
                View {isVisible ? "less" : "more"}
              </button>
              <h4 className="font-semibold text-lg">Mrs. Charity Osuigwe (Headteacher)</h4>
            </motion.section>
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:w-8/12 w-full"
            >


              <Image src={headTeacher} className="size-full md:mr-auto rounded-md" alt="About ProdLead" />
            </motion.div>
          </aside>
        </div>
      </AnimatedContainer>
    </main>
  );
}
