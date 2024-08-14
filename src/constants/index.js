import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MicroSoft Learn Student Ambassador",
    company_name: "MicroSoft",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Empowering peers through cutting-edge tech education and innovative learning paths.",
      "Bridging the gap between students and industry with Microsoft expertise.",
      "Inspiring future leaders with community-driven tech initiatives.",
      "Driving innovation and growth as a student advocate for Microsoft learning.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "CODEALPHA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jun 2024",
    points: [
      "Empowering web innovation at CODEALPHA—crafting seamless digital experiences with cutting-edge tech.",
      "Join CODEALPHA: where creativity meets code, shaping the future of web development.",
      "Unlock your web potential at CODEALPHA, innovating dynamic digital solutions with purpose.",
      "Pioneering web development at CODEALPHA—transforming ideas into impactful, user-friendly websites.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lankan Travalester",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Empowering travel through cutting-edge web solutions tailored for Sri Lanka.",
      "Innovative digital experiences driving tourism growth and online presence.",
      "Leading web development, crafting bespoke platforms for global travelers.",
      "Transforming visions into reality with unparalleled design and technology expertise.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Solar System Explorer",
    description:
      "Dive deep into the wonders of the web with Solar Explorer sub project of ASTROX ! Explore endless possibilities through engaging YouTube content and other platforms, bringing the cosmos to your fingertips",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/chamikamunithunga/Solar_System_Explorer_ASTROX",
  },
  {
    name: "Job IT",
    description:
      "Galactic_Odyssey takes you on a captivating journey through  our Milky Way galaxy.  Dive deep into the mysteries of stars, planets, and cosmic phenomena with a user-friendly interface that adapts seamlessly to any device. Whether you are an amateur astronomer or a seasoned stargazer, this project offers a wealth of information and interactive elements to enhance your understanding of our galaxy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/chamikamunithunga/Odyssey_Red_Planet",
  },
  {
    name: "ODYSSEY TO RED PLANET",
    description:
      "In-Depth Mars Exploration: Discover the Red Planet's surface, atmosphere, climate with interactive visualizations,Red Planet is part of the broader ASTROX initiative, aimed at providing a comprehensive and immersive experience for astronomy enthusiasts. ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Live Streaming",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/chamikamunithunga/ASTROX_Galactic_Odyssey",
  },
];

export { services, technologies, experiences, testimonials, projects };
