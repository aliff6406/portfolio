import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { HiRefresh } from "react-icons/hi";
import { start } from "repl";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

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
];

export const experiences = [
  {
    title: "Junior API Developer",
    company: "Lancaster University",
    location: "Lancaster, UK",
    description: [
      "Developing and maintaining full-stack web applications using React with TypeScript on the Next.js framework, building performant APIs with GraphQL on a serverless AWS infrastructure using AWS SDK, Lambda, S3 and DynamoDB.",
      "Implementing automated unit and integration tests into CI/CD pipelines using Jest, reducing production bugs by 30% and improving overall development velocity.",
      "Writing IaC using Terraform to automate the provisioning and management of AWS infrastructure ensuring consistent configurations across environments.",
      "Collaborating closely with a cross-functional scrum team, managing development workflow with Azure DevOps, conducting peer code reviews and consistently delivering features within sprint deadlines.",
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
      "Developed full-stack web applications using Vue.js, building REST APIs using FastAPI and PostgresQL to deploy various machine learning pipelines for time series forecasting in predictive maintenance systems and operational risks.",
      "Containerised these web applications using Docker to create consistent development and testing environments.",
      "Streamlined the development of ML pipelines using ClearML through experiment tracking, hyperparameter optimisation, and model and dataset versioning, significantly improving reproducibility and time to deployment.",
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
    degree: "Bachelor's Degree of Computer Science (BSc)",
    logoURL: "/lancasteruni.jpg",
    start: "2022",
    end: "2024",
  },
  {
    school: "Sunway University",
    href: "https://sunwayuniversity.edu.my/",
    degree: "Bachelor's Degree of Computer Science (BSc)",
    logoURL: "/sunwayuni.jpg",
    start: "2021",
    end: "2022",
  },
  {
    school: "Sunway College",
    href: "https://sunwaycollege.edu.my/",
    degree: "A Levels: Mathematics, Economics, Psychology",
    logoURL: "/sunwaycollege.jpg",
    start: "2019",
    end: "2021",
  },
];

export const projects = [
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <FaGlobe />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    dates: "June 2023 - Present",
    active: true,
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://magicui.design",
        icon: <FaGlobe />,
      },
      {
        type: "Source",
        href: "https://github.com/magicuidesign/magicui",
        icon: <FaGithub />,
      },
    ],
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "llm.report",
    href: "https://llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
        icon: <FaGlobe />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <FaGithub />,
      },
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    href: "https://automatic.chat",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://automatic.chat",
        icon: <FaGlobe />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
