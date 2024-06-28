import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fotoforgeImg from "@/public/fotoforge.png";
import petpal_hotelImg from "@/public/petpalhotel.png";
import reciperealmImg from "@/public/reciperealm.png";
import bartenderbuddyImg from "@/public/bartenderbuddy.png";

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
    title: "Professional Truck Driver",
    location: "Remote",
    description:
        "I worked as an experienced Professional Truck Driver, adept at safely operating commercial vehicles in strict compliance with regulations. I excelled in conducting thorough inspections and optimizing delivery routes for efficiency, consistently meeting deadlines. I was known for my strong commitment to customer service, fostering positive relationships with clients and maintaining a stellar record for safety and reliability in diverse driving conditions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
    },

] as const;

export const projectsData = [
    {
    title: "Bartender Buddy",
    description:
        "Bartender Buddy is a web app for discovering and sharing cocktail recipes. Users can browse recipes, search by name or ingredients, and contribute their own mixes.",
    tags: [ "JavaScript", "CSS", "HTML"],
    imageUrl:  bartenderbuddyImg,
    },
    {
    title: "FotoForge",
    description:
        "Create, Save, Interact, and Tailor images to your unique vision.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: fotoforgeImg,
    },
    {
    title: "PetPal Hotel",
    description:
        "A web application for managing pet reservations allowing owners to book stays and mange owner and pet profiles.",
    tags: ["React", "JavaScript", "SQL", "Python", "Flask", "CSS", "Flask-SQLAlchemy" ],
    imageUrl: petpal_hotelImg,
    },
    {
    title: "RecipeRealm",
    description:
        "Fully deployed full-stack web application enabling users to discover a diverse collection of recipes from around the world.",
    tags: ["Css","React", "JavaScript", "Python", "Flask-SQLAlchemy", "Marshmallow"],
    imageUrl: reciperealmImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Formik",
    "Yup",
    "GitHub",
    "PostgreSQL",
    "Python",
    "Flask",
    "Flask-SQLAlchemy",
    "SQLite",
    "Marshmallow",
    "JSON",
    "Postman API"
] as const;