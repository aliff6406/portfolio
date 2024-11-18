"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Marquee from "./ui/marquee";
const Skills = () => {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 1 });

  const midpoint = Math.ceil(technologies.length / 2);
  const firstHalf = technologies.slice(0, midpoint);
  const secondHalf = technologies.slice(midpoint);

  return (
    <section
      ref={ref}
      className="align-center mb-20 flex max-w-[100%] scroll-mt-[8rem] flex-col justify-center text-center md:mb-28"
      id="skills"
    >
      <SectionHeading intro="My Tech Stack" title="Tools and Technologies" />
      {/* Single marquee for medium and larger screens */}
      <div className="align-center mx-auto flex w-[100%] flex-wrap justify-center">
        {/* Single marquee for medium and larger screens */}
        <div className="hidden w-full sm:block">
          <Marquee
            pauseOnHover
            className="w-full gap-9 [--duration:30s]"
            repeat={2}
          >
            {technologies.map((technology) => (
              <a href={technology.href} key={technology.name}>
                <Image
                  className="duration-250 mx-2 h-11 w-11 transition ease-in-out hover:-translate-y-2 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={technology.src}
                  alt={technology.alt}
                  width={60}
                  height={60}
                  quality={95}
                />
              </a>
            ))}
          </Marquee>
        </div>

        {/* Two rows of marquees for small and base screens */}
        <div className="block w-full sm:hidden">
          <Marquee
            pauseOnHover
            className="mb-5 w-full gap-9 [--duration:20s]"
            repeat={2}
            reverse={true}
          >
            {firstHalf.map((technology) => (
              <a href={technology.href} key={`${technology.name}-row1`}>
                <Image
                  className="duration-250 mx-2 h-11 w-11 transition ease-in-out hover:-translate-y-2 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={technology.src}
                  alt={technology.alt}
                  width={60}
                  height={60}
                  quality={95}
                />
              </a>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            className="w-full gap-9 [--duration:20s]"
            repeat={2}
          >
            {secondHalf.map((technology) => (
              <a href={technology.href} key={`${technology.name}-row2`}>
                <Image
                  className="duration-250 mx-2 h-11 w-11 transition ease-in-out hover:-translate-y-2 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={technology.src}
                  alt={technology.alt}
                  width={60}
                  height={60}
                  quality={95}
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
