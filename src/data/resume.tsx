import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hung Vo",
  initials: "HV",
  url: "https://hungvo.dev",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/Ho+Chi+Minh+City",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern, performant UI/UX.",
  summary:
    "I'm a Frontend Developer focused on building fast, accessible, and user-centric web experiences using React, Next.js, TypeScript, and TailwindCSS. I care about clean architecture, maintainability, and pixel-perfect execution. Currently at KIT System Solutions Vietnam, I collaborate closely with backend teams, integrate APIs, improve SEO and performance, and ship consistent, responsive interfaces. Previously, I built fullstack projects including an e-commerce platform and a bus ticket booking system.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Zustand",
    "TailwindCSS",
    "shadcn/ui",
    "Accessibility",
    "SEO",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "AWS (S3, Amplify)",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,

        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KIT System Solutions Vietnam",
      href: "https://kit-group.net",
      badges: ["React", "Next.js", "TypeScript", "SEO", "Performance"],
      location: "Ho Chi Minh City, Vietnam",
      title: "Software Engineer (Frontend)",
      logoUrl: "/kit.png",
      start: "June 2024",
      end: undefined,
      description:
        "Develop and maintain enterprise web apps with React, Next.js, and TypeScript. Collaborate with backend engineers to integrate APIs, improve SEO, page load speed, and accessibility. Implement CMS integrations (microCMS) and performance optimizations.",
    },
  ],
  education: [
    {
      school: "HCMC University of Technology and Education",
      href: "https://hcmute.edu.vn",
      degree: "B.S. in Software Engineering (GPA 3.4/4.0)",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2025",
    },
  ],
  awards: [
    {
      title: "Third Prize - Vietnam Student Olympiad",
      organization: "Ministry of Education and Training",
      year: "2021",
      description:
        "Recognized for innovation and technical problem-solving in computer science competition.",
    },
    {
      title: "Third Prize - Vietnam Science & Engineering Fair",
      organization: "Ministry of Science and Technology",
      year: "2021",
      description:
        "Awarded for outstanding project in software engineering and innovation.",
    },
  ],
  languages: [
    {
      name: "Vietnamese",
      level: "Native",
      proficiency: 100,
    },
    {
      name: "English",
      level: "Intermediate",
      proficiency: 75,
      certification: "TOEIC 630",
    },
  ],
  projects: [
    {
      title: "KIT Website",
      href: "https://kit-group.net",
      dates: "2024",
      active: true,
      description:
        "Corporate website with microCMS integration, responsive UI, SEO and performance improvements.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "microCMS"],
      links: [
        {
          type: "Website",
          href: "https://kit-group.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    {
      title: "Furusato Tax Service",
      href: "https://furusato-with.jp",
      dates: "2024",
      active: true,
      description:
        "SEO optimization, frontend + backend integration, and API deployment on AWS.",
      technologies: ["Next.js", "Redux Toolkit", "Express.js", "NestJS", "AWS"],
      links: [
        {
          type: "Website",
          href: "https://furusato-with.jp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    {
      title: "STLOCAL",
      href: "https://stlocal.net",
      dates: "2024",
      active: true,
      description:
        "Contributed to UI development ensuring accessibility and responsiveness.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://stlocal.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    {
      title: "Bus Ticket Booking System",
      href: "#",
      dates: "03/2024 – 06/2024",
      active: false,
      description:
        "Fullstack app with authentication, CRUD APIs, and mobile UIs for multiple user roles.",
      technologies: ["React Native", "Express.js", "MongoDB"],
      links: [],
      image: "",
      video: undefined,
    },
    {
      title: "E-commerce Platform",
      href: "#",
      dates: "07/2023 – 11/2023",
      active: false,
      description:
        "Fullstack platform with REST APIs for authentication, checkout, and product management.",
      technologies: ["React.js", "Express.js", "MongoDB", "Mongoose"],
      links: [],
      image: "",
      video: undefined,
    },
  ],
  hackathons: [],
} as const;
