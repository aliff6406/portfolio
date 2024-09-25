import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/lib/data";
// import SectionHeading from "./SectionHeading";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex max-w-[45rem] scroll-mt-28 flex-col justify-start leading-8 sm:mb-0 md:mb-28"
    >
      <h2 className="mb-7 font-bold tracking-tighter sm:text-3xl md:text-4xl">
        Work Experience
      </h2>{" "}
      {/* </BlurFade> */}
      {/* <BlurFade delay={BLUR_FADE_DELAY * 14}> */}
      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        {experiences.map((experience, idx) => (
          // <BlurFade
          //   key={experience.title + project.dates}
          //   delay={BLUR_FADE_DELAY * 15 + id * 0.05}
          // >
          <ExperienceCard
            key={idx}
            title={experience.title}
            description={experience.description}
            company={experience.company}
            location={experience.location}
            dates={experience.date}
            image={experience.src}
            //   links={experience.links}
          />
          // </BlurFade>
        ))}
      </ul>
      {/* </BlurFade> */}
    </section>
  );
};