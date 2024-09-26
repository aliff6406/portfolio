"use client";

import React from "react";
import { EducationCard } from "./EducationCard";
import { education } from "@/lib/data";
import UnderlineButton from "./ui/UnderlineButton";
import PhotoCollage from "./PhotoCollage";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.4 });
  return (
    <section
      ref={ref}
      className="flex max-w-[45rem] scroll-mt-[6.5rem] flex-col justify-start leading-8 sm:mb-14 md:mb-28"
      id="about"
    >
      <PhotoCollage />
      <div>
        {/* <SectionHeading title="About me" /> */}
        <h2 className="mb-7 font-bold tracking-tighter text-gray-950 sm:text-3xl md:text-4xl">
          Hi again, I&apos;m Aliff.
        </h2>
        <div className="sm:text-s mb-8 space-y-7 text-xs leading-9 md:text-lg">
          <p className="">
            I&apos;m a software engineer based in the UK, interested in all
            things software, from concept to the delivery of next-gen
            applications. I&apos;m currently an API developer at Lancaster
            University, involved in the full software development lifecycle to
            build applications that serve students, educators and local
            organisations across the region.
          </p>

          <p>
            I find joy in solving complex problems through creative solutions
            and collaborating with diverse teams. I am constantly looking for
            new challenges that push me to grow, learn, and innovate. My goal
            has always been to deliver impactful, user-centered solutions with
            beautiful visuals, backed by performant systems to offer seamless
            experiences.
          </p>

          <p>
            Outside of coding, I love moving in all capacity. I spend my time
            lifting circles in the gym, running laps around town, and climbing
            plastic rocks. I think a lot about coffee beans, buttery croissants
            and my cat Timmy.
          </p>

          <p className="inline">If you&apos;d like to chat, feel free to </p>
          <UnderlineButton href="#contact" text="reach out." />
        </div>

        <h2 className="py-5 font-bold sm:text-xl md:text-2xl">Education</h2>
        <div className="flex flex-col gap-y-3">
          {education.map((education) => (
            // <BlurFade
            //   key={education.title + project.dates}
            //   delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            // >
            <EducationCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoURL}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              //   links={experience.links}
            />
            // </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
