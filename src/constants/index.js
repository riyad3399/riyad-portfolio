import {
  frontend,
  backend,
 
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  express,
  firebase,
  jwt,
  mongodb,
  rest_api,
  stripe,
  coverhunt,
  creative,
  sport_spark,
  tract,
  proc,
  job_portal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },


];


//  https://axios-http.com/assets/logo.svg


// Familiar:
// Node JS I PHP I Laravel I python
// I WordPress

// Tools:
// VS Code I GitHub I Chat GPT I Netlify I
// Vercel I Chrome dev I pycharm I
// WebStorm I npm I Yarn I postman I
// Adobe Illustrator


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Express JS",
    icon: express,
  },

 

  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },

  {
    name: "REST API",
    icon: rest_api,
  },
  {
    name: "Stripe",
    icon: stripe,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "B & F CORPORATE",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Start - Aug 2021 ",
  },
  // {
  //   title: "Mentor (Volunteer)",
  //   company_name: "Microverse",
  //   icon: microverse,
  //   iconBg: "#333333",
  //   date: "Mar 2022 - May 2022",
  // },
  // {
  //   title: "Junior Software Engineer",
  //   company_name: "Kelhel",
  //   icon: kelhel,
  //   iconBg: "#333333",
  //   date: "May 2022 - Oct 2022",
  // },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Diversity Cyber Council",
  //   icon: dcc,
  //   iconBg: "#333333",
  //   date: "Sep 2022 - Present",
  // },
];

// Firebase | JWT| Axios | Express JS
const projects = [

  {
    id: "project-1",
    name: "chef recipe",
    description: "AN ONLINE FOOD SELLER WEBSITE  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "Restful API",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tract,
    repo: "https://github.com/riyad3399/chef-recipe.git",
    demo: "https://cook-s-corner.web.app/",
  },
  {
    id: "project-2",
    name: "Sport Spark",
    description: "AN ONLINE SUMMER CAMPING ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "Restful API",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sport_spark,
    repo: "https://github.com/riyad3399/sport-spark",
    demo: "https://sport-spark.web.app/",
  },
  {
    id: "project-3",
    name: "Racer X Toys",
    description: "AN ONLINE TOY SELLER WEBSITE - CURD",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "blue-text-gradient",
      },
      {
        name: "Restful API",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proc,
    repo: "https://github.com/riyad3399/racer-x-toys.git",
    demo: "https://racerxtoys-df94f.web.app/",
  },
  {
    id: "project-4",
    name: "JOB Factory",
    description: "AN ONLINE JOB APPLY WEBSITE. ",
    tags: [
      {
        name: "JAVASCRIPT",
        color: "blue-text-gradient",
      },
      {
        name: "Restful API",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: job_portal,
    repo: "#",
    demo: "https://rad-bonbon-00fbfe.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
