"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">General Studies</span> and
        adventuring in the field of{" "}
        <span className="font-medium">Professional driving all over the USA</span>, I decided to
        pursue my passion for programming. I enrolled in an intensive coding bootcamp where i 
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and continuation of learning experience. I{" "}
        <span> enjoy </span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, JS, Python, SQL, and Flask</span>.
        I am also familiar with TypeScript and Next.js. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a fullstack software
        developer.
      </p>

      <p>
        <span>When I'm not coding</span>, I like playing basketball and watching movies. I also am trying {" "}
        <span className="font-medium">to get out of my comfort zone and learn new things daily</span>. I am currently
        learning about <span className="font-medium">TypeScript and learning the German Language</span>.
      </p>
    </motion.section>
  );
}