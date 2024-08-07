import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project5 from "../assets/projects/project-5.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 10 months of professional experience, I have honed my skills in front-end technologies like React.js, Redux as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 10 months of professional experience, I have worked with a variety of technologies, including React.js, Node.js, MySQL, MongoDB, Flutter and Docker. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - July 2024",
    role: "SDE Intern",
    company: "Philips",
    description: `Implemented Web APIs in .NET C with Test-Driven Development (TDD), tested using Swagger and Postman and hosted on Docker. Developed a new feature in the Q@d application with validators to ensure code quality.Conducted manual testing and defect fixing in AVW.`,
    technologies: [
      ".NET",
      "C#",
      "Docker",
      "Swagger",
      "TDD",
      "Postman",
      "Unit Testing",
      "TFS",
      "Git",
      "GitHub",
      "REST",
      "API Testing",
    ],
  },
  {
    year: "Sept 2023 - Dec 2023",
    role: "Technical Trainee",
    company: "Successive Digital",
    description: `Developed full-stack web applications using the MERN stack. Designed and implemented RESTful APIs with Node.js and Express.js, integrating MongoDB for database man-
agement.Built responsive user interfaces with React.js, managing state using React hooks and Redux.`,
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "mongoDB",
      "TypeScript",
      "Express.js",
      "Tailwind CSS",
      "MySQL",
      "Redux",
      "Bootstrap",
      "Factory Design",
      "Jest",
      "Git",
      "GitHub",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Engineered the backend of an e-commerce website using Node.js and Express.js for server-side development,and MongoDB for database management. Used Node.js, Express.js, MongoDB. Developed RESTful APIs for product management, user authentication, and order processing. Implemented database schemas and  queries for efficient data storage and retrieval",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],

    link: "https://ecom-m.onrender.com/",
  },
  {
    title: "Photo-stack",
    image: project5,
    description:
      "MERN (MongoDB, Express, React, Node.js, MongoDB) + Redux. Multiuser website to upload and purchase photos.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "Razorpay",
    ],

    link: "https://github.com/vinay320/Photo-Stack",
  },
  {
    title: "HomeChef's",
    image: project3,
    description: "MERN (MongoDB, Express, React, Node.js, MongoDB) + Redux",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "Razorpay",
    ],

    link: "https://home-chef-s-f.vercel.app/",
  },
  {
    title: "Travel Adviser Website",
    image: project2,
    description:
      "Developed a React.js web app leveraging RapidAPI for real-time travel recommendations.Used React.js, RapidAPI",
    technologies: ["HTML", "CSS", "JavaScript", "React", "RapidAPI"],
    link: "https://travel-59fm.onrender.com",
  },
];


export const CONTACT = {
  address: "225 Akbarpur Mathura Uttar Pradesh India",
  phoneNo: "+91 7982279945  ",
  email: "vinaytomar939@gmail.com",
};
