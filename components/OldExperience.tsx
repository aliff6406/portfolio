"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  return (
    <section
      id="experience"
      className="align-center mb-28 flex scroll-mt-28 flex-col justify-center text-center sm:mb-40"
    >
      <SectionHeading title="My Experience" />
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(249 250 251)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px ",
                  //   border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #fff" }}
                date={item.date}
                icon={item.src}
                iconStyle={{ background: "#fff" }}
                visible={inView}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="align-center mb-3 flex justify-between text-lg">
                  <p className="text-5xl">{item.company}</p>
                  <p className="italic">{item.location}</p>
                </div>
                <ul className="list-disc">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
