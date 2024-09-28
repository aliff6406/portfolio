"use client";

import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./SectionHeading";

export const Experience = () => {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.6,
  });
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-20 flex max-w-[45rem] scroll-mt-28 flex-col justify-start leading-8 md:mb-28"
    >
      <h2 className="mb-7 text-3xl font-bold tracking-tighter text-gray-950 md:text-4xl">
        Work Experience
      </h2>{" "}
      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        {experiences.map((experience, idx) => (
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
        ))}
      </ul>
    </section>
  );
};
