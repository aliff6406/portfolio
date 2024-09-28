"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
// import { ProjectCard } from "./ProjectCard";
// import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView({
    sectionName: "Projects",
    threshold: 0.6,
  });
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-20 flex max-w-[45rem] scroll-mt-[8rem] flex-col justify-start md:mb-28"
    >
      <SectionHeading
        intro="My Projects"
        title="Check out my latest work"
        info="I've worked on a variety of projects, from complex web applications to deep learning classifiers. Here are a few of my favourites."
      />

      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
        {/* {projects.map((project) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Projects;
