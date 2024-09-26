"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
const Skills = () => {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 1 });
  return (
    <section
      ref={ref}
      className="align-center flex max-w-[45rem] scroll-mt-40 flex-col justify-center text-center sm:mb-14 md:mb-28"
      id="skills"
    >
      <SectionHeading intro="My Tech Stack" title="Tools and Technologies" />
      <div className="align-center flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <a href={technology.href} key={technology.name}>
            <Image
              className="duration-250 transition ease-in-out hover:-translate-y-2"
              src={technology.src}
              alt={technology.alt}
              width={50}
              height={50}
              quality={95}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
