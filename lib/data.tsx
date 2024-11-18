// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
// import { HiRefresh } from "react-icons/hi";
// import { start } from "repl";
import { FaGithub } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  //   {
  //     name: "Testimonials",
  //     link: "#testimonials",
  //   },
  {
    name: "Contact",
    link: "#contact",
  },
] as const;

export const experiences = [
  {
    title: "Junior API Developer",
    company: "Lancaster University",
    location: "Lancaster, UK",
    description: [
      "Developing and maintaining responsive and accessible full-stack web applications, using TypeScript, React and TanStack on the Next.js framework, servicing over 13,000 Lancaster students and 700 schools across Lancashire.",
      "Designing database schemas and building backend services using Node.js, AWS Lambdas and GraphQL APIs on a serverless AWS infrastructure.",
      "Utilising Terraform to provision and deploy AWS resources including AppSync, Lambdas, S3, DynamoDB, Cognito and CloudFront.",
      "Implementing automated unit and integration tests into CI/CD pipelines using Jest, ensuring over 90% code coverage and enhancing development velocity.",
      "Collaborating closely with a cross-functional scrum team using Agile methodologies to deliver key features consistently within bi-weekly sprint cycles.",
      "Managing development workflow with Azure DevOps, pair programming, conducting peer code reviews and performing QA testing ensuring high code quality and reducing bugs by over 30%.",
    ],
    src: "/lancasteruni.jpg",
    alt: "Lancaster University logo",
    date: "Aug 2024 - Present",
  },
  {
    title: "Software Engineer Intern",
    company: "CeRDaS Centre for Research in Data Science",
    location: "Perak, Malaysia",
    description: [
      "Developed full-stack web applications using Vue.js, building REST APIs using FastAPI, PostgresQL, SQLAlchemy, Alembic and Pydantic to deploy various machine learning pipelines for time series forecasting in predictive maintenancesystems and operational risks.",
      "Containerised web applications using Docker, creating consistent development and testing environments, which significantly reduced environment setup time.",
      "Streamlined ML pipeline development using ClearML through experiment tracking, hyperparameter optimisation, and model and dataset versioning, significantly improving reproducibility and time to deployment.",
    ],
    src: "/cerdas.png",
    alt: "Centre for Research in Data Science logo",
    date: "Jun 2023 - Sep 2023",
  },
];

export const education = [
  {
    school: "Lancaster University",
    href: "https://www.lancaster.ac.uk/",
    degree: "Bachelor's Degree of Computer Science (BSc) First Class Honours",
    logoURL: "/lancasteruni.jpg",
    start: "2022",
    end: "2024",
  },
  {
    school: "Sunway University",
    href: "https://sunwayuniversity.edu.my/",
    degree: "Bachelor's Degree of Computer Science (BSc) 3.82 GPA",
    logoURL: "/sunwayuni.jpg",
    start: "2021",
    end: "2022",
  },
  {
    school: "Sunway College",
    href: "https://sunwaycollege.edu.my/",
    degree: "A Levels: Mathematics, Economics, Psychology AAA*",
    logoURL: "/sunwaycollege.jpg",
    start: "2019",
    end: "2021",
  },
];

export const projects = [
  {
    title: "Task Flow",
    href: "https://github.com/aliff6406/task-flow",
    dates: "Sep 2024 - Present (Ongoing)",
    active: true,
    description:
      "Task Flow is a full-stack project management app that I am currently working on, featuring a Kanban-style board for task organisation, a timeline for project tracking, and seamless task management. It offers intuitive drag-and-drop functionality for tasks, status updates, and real-time collaboration, providing a comprehensive tool to enhance productivity and streamline project workflows.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Redux",
      "AWS",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://llm.report",
      //   icon: <FaGlobe />,
      // },
      {
        type: "Source",
        href: "https://github.com/aliff6406/task-flow",
        icon: <FaGithub />,
      },
    ],
    image: "/task-flow-thumb.png",
    // video:
    //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
] as const;

export const technologies = [
  {
    name: "TypeScript",
    src: "/typescript.svg",
    alt: "TypeScript icon",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    src: "/react.svg",
    alt: "React icon",
    href: "https://react.dev/",
  },
  {
    name: "NodeJS",
    src: "/nodejs.svg",
    alt: "NodeJS icon",
    href: "https://nodejs.org/en",
  },
  {
    name: "NextJS",
    src: "/nextjs.svg",
    alt: "NextJS icon",
    href: "https://nextjs.org/",
  },
  {
    name: "GraphQL",
    src: "/graphql.svg",
    alt: "GraphQL icon",
    href: "https://graphql.org/",
  },
  {
    name: "Terraform",
    src: "/terraform.svg",
    alt: "Terraform icon",
    href: "https://www.terraform.io/",
  },
  {
    name: "Jest",
    src: "/jest.svg",
    alt: "Jest icon",
    href: "https://jestjs.io/",
  },
  {
    name: "AWS",
    src: "/aws.svg",
    alt: "Amazon Web Services icon",
    href: "https://aws.amazon.com/",
  },
  {
    name: "DynamoDB",
    src: "/dynamodb.svg",
    alt: "DynamoDB icon",
    href: "https://aws.amazon.com/dynamodb/",
  },
  {
    name: "MongoDB",
    src: "/mongodb.svg",
    alt: "MongoDB icon",
    href: "https://www.mongodb.com/",
  },
  {
    name: "Tailwind CSS",
    src: "/tailwindcss.svg",
    alt: "Tailwind CSS icon",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Python",
    src: "/python.svg",
    alt: "Python icon",
    href: "https://www.python.org/",
  },
  {
    name: "PyTorch",
    src: "/pytorch.svg",
    alt: "PyTorch icon",
    href: "https://pytorch.org/",
  },
  {
    name: "Vue.js",
    src: "/vuejs.svg",
    alt: "Vue.js icon",
    href: "https://vuejs.org/",
  },
  {
    name: "Docker",
    src: "/docker.svg",
    alt: "Docker icon",
    href: "https://www.docker.com/",
  },
  {
    name: "PostgreSQL",
    src: "/postgresql.svg",
    alt: "PostgreSQL icon",
    href: "https://www.postgresql.org/",
  },
] as const;
