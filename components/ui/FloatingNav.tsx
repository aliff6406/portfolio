/* eslint-disable prefer-const */
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "border-black/0.2 fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 px-10 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full md:min-w-[70vw] lg:min-w-fit",
          className,
        )}
      >
        {navItems.map(
          (navItem: { name: string; link: string }, idx: number) => (
            // TODO: improve hover styling and  add section focus styling {https://www.youtube.com/watch?v=sUKptmUVIBM&t=1106s} : 3:13:28
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={() => setActiveSection(navItem.name)}
              className={cn(
                "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-950",
                {
                  "text-gray-950": activeSection === navItem.name,
                },
              )}
            >
              {/* <span className="block sm:hidden">{navItem.icon}</span> */}
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </Link>
          ),
        )}
      </motion.div>
    </AnimatePresence>
  );
};
