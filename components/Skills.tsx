import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/lib/data";
const Skills = () => {
  return (
    <section
      className="align-center flex max-w-[45rem] scroll-mt-40 flex-col justify-center text-center sm:mb-0 md:mb-28"
      id="skills"
    >
      <SectionHeading
        intro="My Tech Stack"
        title="Tools and Technologies"
        info="A glimpse of my toolset used in my day-to-day work and passion projects."
      />
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
