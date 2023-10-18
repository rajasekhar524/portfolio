import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcommentImg.png";
import rmtdevImg from "@/public/rmtdevImg.png";
import wordanalyticsImg from "@/public/wordanalyticsImg.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company:"Classic Informatics",
    description:
      "I worked on a variety of projects, both on the front-end and back-end, showcasing my full-stack expertise. This experience enhanced my problem-solving skills and the ability to create innovative solutions. I also excelled in cross-functional collaboration, scalability, and continuous learning, contributing to the company's impact in the software development space.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2021 — April 2023",
  },
  {
    title: "Software Engineer",
    company:"Clidio",
    description:
      "I worked as a front-end developer, Successfully refactored a React-based SaaS app for gas line workers, introducing modern design and functionality improvements, including dashboards for visualizing data in various formats, enhancing schedule management, workplace task tracking, and event planning",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 — Oct 2021",
  },
  {
    title: "Co-Founder & Full-Stack Developer",
    company:"Haberdasher",
    description:
      "Led full-stack development of a custom men's apparel e-commerce platform, utilizing the MERN stack with Firebase as the backend, resulting in a fully functional, responsive website.",
    icon: React.createElement(FaReact),
    date: "Nov 2018 — May 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Dashboards",
    url:"https://dashboard-front-g7zl.onrender.com/dashboard",
    description:
      "Developed an interactive admin dashboard featuring dynamic charts, maps, and line graphs for visualizing key metrics such as sales trends, user activity, and revenue on various time scales",
    tags: ["React", "MongoDB", "Material Ui", "Nivo"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Social Media",
    url:"https://social-frontend-h19o.onrender.com/",
    description:
      "A robust, multi-threaded web application using the MERN (MongoDB, Express, React, Node.js) stack with Next.js, creating a responsive, user-friendly platform.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ecommerce",
    url:"https://anvshn.in/",
    description:
      "a Fully Functioning Responsive Ecommerce app for an ambitious startup utilizing Firebase APIs, ReactJs, Redux, Firebase, Payment Integration with Stripe and RazorPay.",
    tags: ["React", "Firebase", "Sass", "RazorPay", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Figma"
] as const;
