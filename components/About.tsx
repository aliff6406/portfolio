import React from "react";
import SectionHeading from "./SectionHeading";
import { EducationCard } from "./EducationCard";
import { education } from "@/lib/data";

const About = () => {
  return (
    <section
      className="flex max-w-[45rem] scroll-mt-[6.5rem] flex-col justify-start leading-8 sm:mb-0 md:mb-28"
      id="about"
    >
      <div>
        {/* <SectionHeading title="About me" /> */}
        <h2 className="mb-7 text-3xl font-bold tracking-tighter sm:text-5xl">
          About me
        </h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Pulvinar inceptos nec pretium aenean iaculis amet. At tortor placerat
          sed ut dui penatibus. Quam pretium nec vivamus, viverra ut orci.
          Phasellus vehicula sagittis fames curabitur tristique tincidunt
          pellentesque at habitant. Dis litora lobortis quis cubilia posuere
          massa commodo nulla dapibus. Sed erat parturient a placerat consequat
          nunc lobortis per.
        </p>

        <h2 className="py-5 text-xl font-bold">Education</h2>
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
