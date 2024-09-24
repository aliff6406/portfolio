"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ConnectButton from "./ui/ConnectButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="relative z-10 flex scroll-mt-[200] justify-center pt-[12.5rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
        {/* <h2 className="max-w-80 pb-5 text-center text-xs uppercase tracking-widest">
          Hi there, I am
        </h2> */}

        <h1 className="text-center text-[40px] font-bold sm:text-4xl md:text-6xl lg:text-7xl">
          hi, i'm aliff
        </h1>

        <p className="max-w-[40rem] pt-7 sm:text-sm md:text-lg">
          a full-stack software engineer based in <s>malaysia</s> united
          kingdom. i&apos;m always curious about new technologies and have been
          spending time lately building beautiful and functional web apps.
        </p>
        <div className="mt-5 flex items-center justify-center">
          <ConnectButton
            title="Get In Touch"
            icon={<FaLocationArrow />}
            position="right"
            href="#contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
