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
    git,
    fiverr,
    wizarding,
    countries,
    threejs,
    sofo,
    vr,
    postgresql,
    nextjs,
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Next JS",
      icon: nextjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "Freelancer at Fiverr",
      icon: fiverr,
      iconBg: "#383E56",
      date: "July 2023 - Now",
      points: [
        "Developing web applications using React.js and Next.js.",
        "Implementing responsive design.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Stock Management and Administration",
      company_name: "Valu Ramallo",
      icon: vr,
      iconBg: "#cbd5e1",
      date: "May 2021 - February 2023",
      points: [
        "Stock administration.", 
        "Supplier and customer contact.",
        "Sales invoicing."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Wizarding Wares",
      description:
        "En este proyecto grupal realizamos un e-commerce donde se ofrecen productos del mundo de Harry Potter. El proyecto cuenta con un CRUD completo, CMS, y funcionalidades como filtros combinados, paginados, y más. Se implementaron auth0 para el login, y MercadoPago para los pagos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: wizarding,
      source_code_link: "https://github.com/diegoleteliers10/wizarding_wares",
    },
    {
      name: "SOFO | helados",
      description:
        "Un proyecto individual utilizando Typescript y Next.js pensado para una heladería. En este caso, armé el landing de una heladería, se pueden ver los sabores, así como filtrarlos por categoría y buscar por nombre. Al ser mi primer proyecto con TS y Next, fue una experiencia interesante y divertida.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: sofo,
      source_code_link: "https://github.com/schcolnikj/sofo",
    },
    {
      name: "Countries",
      description:
        "Este es mi primer proyecto como desarrollador web. Fue una experiencia muy linda, donde aprendí y conocí sobre cada etapa del proceso. Desde crear la base de datos, a escribir el Back End, y el Front End, así como darle el estilo minimalista que tiene mi página.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: countries,
      source_code_link: "https://github.com/schcolnikj/PI-Countries_SchcolnikJuan",
    },
  ];
  
  export { services, technologies, experiences, projects };