import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  // gearXpert,
  // project2,
  // project3,
  // mysql,
  express,
  // aws,
  // mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  // redux,
  tailwind,
  threejs,
  c,
  python,
  unrealengine,

} from '../assets';
// import portfolio from "../assets/projects/portfolio.jpg";
import carPooling from "../assets/projects/car_pooling.jpg";
import currencyConverter from "../assets/projects/currency_converter.jpg";
import securityEcommerce from "../assets/projects/ecommerce_website.jpg";
import ecommerceDSA from "../assets/projects/ecommerceDSA.jpg";  // Make sure the filename is correct

import mahilAI from "../assets/company/mahilAI.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Aspiring SDE | Python & ML Enthusiast 🚀 ",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "gsap", icon: gsap },
  { name: "framer", icon: framer },
  { name: "Three JS", icon: threejs },
  { name: "figma", icon: figma },
  // { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  // { name: "Material Ui", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "Express Js", icon: express },
  // { name: "AWS", icon: aws },
  { name: "MongoDB", icon: mongodb },
  // { name: "MySql", icon: mysql },
  { name: "git", icon: git },
  { name: "python", icon: python },
  { name: "unrealengine", icon: unrealengine },
  { name: "c", icon:c },

];

const experiences = [
  {
    title: "Head of Web Development",
    work_place: "Mahil AI PESU",
    icon: mahilAI,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Leading the development and maintenance of web applications using MERN stack technologies.",
      "Overseeing the architecture, design, and deployment of scalable web solutions.",
      "Collaborating with AI researchers, designers, and developers to integrate AI-driven features into web platforms.",
      "Ensuring responsive design, performance optimization, and cross-browser compatibility.",
      "Reviewing code, mentoring team members, and fostering a collaborative development environment.",
    ],
  },
];

const certifications = [
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    provider: "Forage",
    date: "Mar 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_zhnmae39jSyt6oeNw_1741809928375_completion_certificate.pdf", // Replace with actual certificate link
  },
  {
    title: "Machine Learning with Python",
    provider: "Udemy",
    date: "Mar 2025",
    link: "https://www.udemy.com/certificate/UC-192c3703-da46-4ab1-82dd-c13e256d8c26/",
  },
  {
    title: "Python",
    provider: "HackerRank",
    date: "Mar 2025",
    link: "https://www.hackerrank.com/certificates/iframe/9e44f6330845",
  },
  {
    title: "React",
    provider: "HackerRank",
    date: "Mar 2025",
    link: "https://www.hackerrank.com/certificates/iframe/ee37fd3bcb5b",
  },
  {
    title: "Career Essentials in Software Development",
    provider: "Microsoft & LinkedIn",
    date: "Jul 2024",
    link: "https://www.linkedin.com/learning/certificates/eb05210a95b2376eecc64a28971ff0f704123cba637f18aa6e518d3dafbf0cc5?trk=share_certificate",
  },
];



  



const projects = [
  {
    name: "E-Commerce System with DSA Search Optimization",
    description:
      "A C-based e-commerce system that utilizes advanced data structures like hash tables, linked lists, and graphs for optimized product search, user management, and purchase tracking.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "Data Structures", color: "green-text-gradient" },
    ],
    image: ecommerceDSA,
    source_code_link: "https://github.com/Mohammedbilal12345/E-Commerce-System-with-DSA-Search-Optimization",
  },
  {
    name: "Car-Pooling System",
    description:
      "A C-based ride-sharing system that optimizes routes and user management using linked lists and graphs. Allows users to share rides efficiently while minimizing travel costs.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "Data Structures", color: "green-text-gradient" },
    ],
    image: carPooling,
    source_code_link: "https://github.com/Mohammedbilal12345/Car-pooling-",
  },
  {
    name: "Currency Converter with GUI",
    description:
      "A Python-based application with a Tkinter GUI that supports real-time exchange rates and visual currency trend analysis using Matplotlib, offering a user-friendly experience.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tkinter", color: "white-text-gradient" },
      { name: "Matplotlib", color: "pink-text-gradient" },
    ],
    image: currencyConverter,
    source_code_link: "https://github.com/Mohammedbilal12345/currency_converter",
  },
  {
    name: "Security System E-Commerce Website",
    description:
      "A full-stack MERN-based e-commerce platform for security products, featuring authentication, payment integration, a modern UI, and a secure, scalable backend infrastructure.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "white-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image: securityEcommerce,
    source_code_link: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
  },
];



// Export the projects array
export default projects;

export { services, technologies, experiences, certifications, projects };