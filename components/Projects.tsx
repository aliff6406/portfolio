import React from "react";
import SectionHeading from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex max-w-[45rem] scroll-mt-20 flex-col justify-start sm:mb-14 md:mb-28"
    >
      <SectionHeading
        intro="My Projects"
        title="Check out my latest work"
        info="I've worked on a variety of projects, from complex web applications to deep learning classifiers. Here are a few of my favourites."
      />

      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
