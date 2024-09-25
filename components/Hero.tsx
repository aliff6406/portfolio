"use client";

import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative z-10 mt-20 flex scroll-mt-[200] justify-center pt-[12.5rem] text-center sm:mb-20 md:mb-80"
      id="home"
    >
      <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
        {/* <h2 className="max-w-80 pb-5 text-center text-xs uppercase tracking-widest">
          Hi there, I am
        </h2> */}

        <h1 className="inline-block bg-gradient-to-br from-neutral-400 to-neutral-800 bg-clip-text text-center text-[40px] font-bold text-transparent sm:text-4xl md:text-6xl lg:text-7xl">
          hi, i&apos;m aliff
        </h1>

        <div className="justfiy-center mt-10 flex items-center gap-3">
          <Image
            src="/gray-location.png"
            alt="Pin icon"
            width={25}
            height={25}
          ></Image>
          <p className="text-lg">lancaster, uk</p>
        </div>
        {/* TODO: add contact link in here */}
        <p className="max-w-[40rem] pt-7 sm:text-sm md:text-lg">
          as a full-stack software engineer, i&apos;m always curious about new
          technologies and have been spending time lately building beautiful and
          functional web apps. learn more about me or let&apos;s get in touch.
        </p>
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