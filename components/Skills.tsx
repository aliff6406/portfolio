"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Marquee from "./ui/marquee";
const Skills = () => {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 1 });
  return (
    <section
      ref={ref}
      className="align-center mb-20 flex scroll-mt-[8rem] flex-col justify-center text-center md:mb-28"
      id="skills"
    >
      <SectionHeading intro="My Tech Stack" title="Tools and Technologies" />
      <div className="align-center mx-auto flex w-[70rem] flex-wrap justify-center">
        <Marquee
          pauseOnHover
          className="w-full gap-9 [--duration:20s]"
          repeat={2}
        >
          {technologies.map((technology) => (
            <a href={technology.href} key={technology.name}>
              <Image
                className="duration-250 mx-2 transition ease-in-out hover:-translate-y-2"
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
    </section>
  );
};

export default Skills;
