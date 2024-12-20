"use client";

import Image from "next/image";
import React from "react";
import UnderlineButton from "./ui/UnderlineButton";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Hero = () => {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.9 });
  return (
    <section
      ref={ref}
      className="relative z-10 mb-40 mt-10 flex scroll-mt-[200] justify-center pt-[12.5rem] text-center sm:mb-40 md:mb-60"
      id="home"
    >
      <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
        {/* <h2 className="max-w-80 pb-5 text-center text-xs uppercase tracking-widest">
          Hi there, I am
        </h2> */}
        <motion.h1
          className="inline-block bg-gradient-to-br from-neutral-400 to-neutral-800 bg-clip-text text-center text-5xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          hi, i&apos;m aliff
        </motion.h1>
        <motion.div
          className="justfiy-center mt-10 flex items-center gap-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/gray-location.png"
            alt="Pin icon"
            width={25}
            height={25}
          ></Image>
          <p className="text-lg">lancaster, uk</p>
        </motion.div>
        <motion.div
          className="sm:text-md max-w-[40rem] pt-7 md:text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="inline">
            as a full-stack software engineer, i&apos;m always curious about new
            technologies and have been spending time lately building beautiful
            and functional web apps. learn more&nbsp;
          </p>
          <UnderlineButton href="#about" text="about me" />
          <p className="inline">&nbsp;or let&apos;s get&nbsp;</p>
          <UnderlineButton href="#contact" text=" in touch." />
        </motion.div>
        {/* <div className="mt-5 flex items-center justify-center">
          <ConnectButton
            title="Get In Touch"
            icon={<FaLocationArrow />}
            position="right"
            href="#contact"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
