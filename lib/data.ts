import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fotoforgeImg from "@/public/fotoforge.png";
import petpal_hotelImg from "@/public/petpalhotel.png";
import reciperealmImg from "@/public/reciperealm.png";
import cafecriticImg from "@/public/cafecritic.png";

export const links = [
    {
    name: "Home",
    hash: "#home",
    },
    {
    name: "About",
    hash: "#about",
    },
    {
    name: "Projects",
    hash: "#projects",
    },
    {
    name: "Skills",
    hash: "#skills",
    },
    {
    name: "Experience",
    hash: "#experience",
    },
    
] as const;

export const experiencesData = [
    {
    title: "Graduated Flatiron bootcamp",
    location: "Remote",
    description:
        "I graduated after 15 weeks of studying. I am actively looking for a junior full-stack development position.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    },
    {
    title: "Competitive Operations Coordinator",
    location: "Remote",
    description:
        "I worked as a competitive operations coordinator for about 3 years. I learned time management and organization skills to operate in fast-moving environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
    },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
    {
    title: "Slice Sleuth",
    description:
        "Webpage game that keeps track of the user’s score and displays it on score page. Users are able to keep track of their score via their username and are able to play two unique rounds.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    imageUrl: slice_sleuth_2Img,
    },
    {
    title: "Plantsy: Dead or Alive",
    description:
        "CLI game that mimics plant growing simulation.",
    tags: ["Python", "CLI", "SQLite"],
    imageUrl: plantsy2Img,
    },
    {
    title: "Meowstar",
    description:
        "This is a project made to implement full-stack basic knowledge with forms and user authentication and authorization.",
    tags: ["React", "JavaScript", "SQL", "Python", "Flask", "CSS", "Flask-SQLAlchemy", "Marshmallow"],
    imageUrl: projectImg,
    },
    {
    title: "Cafe Critic",
    description:
        "Fully deployed full-stack web application enabling users to leave reviews for cafes and comment on existing reviews within the cafe.",
    tags: ["React", "JavaScript", "Python", "Flask-SQLAlchemy", "Marshmallow", "GoogleAuth"],
    imageUrl: cafecriticImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Formik",
    "Yup",
    "Git",
    "PostgreSQL",
    "Python",
    "Flask",
    "Flask-SQLAlchemy",
    "Marshmallow",
] as const;