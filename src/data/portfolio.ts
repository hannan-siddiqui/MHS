// Central data store — single source of truth for the entire portfolio
// Edit this file to update all content across the site

export const siteConfig = {
  name: "Mohd Hannan",
  title: "Software Engineer & AI Engineer",
  description:
    "Software Engineer with 2+ years of experience building enterprise AI and full stack applications. Experienced in developing Generative AI and Agentic AI solutions with strong expertise in AWS, Azure, Microservices, and cloud native application development.",
  url: "https://hannan.in",
  ogImage: "/og-image.png",
};

export const personalInfo = {
  firstName: "Mohd",
  lastName: "Hannan",
  email: "mohdhannan774@gmail.com",
  phone: "(+91) 7497932064",
  linkedin: "https://www.linkedin.com/in/mohd-hannan-siddiqui-22560a406",
  linkedinHandle: "in/mohd-hannan-siddiqui-22560a406",
  github: "https://github.com/mohdhannan",
  location: "India",
  resumeUrl: "/resume.pdf",
  availability: "Open to opportunities",
};

export const summary = {
  headline: "I Build Intelligent Systems",
  subheadline: "Software Engineer × AI Engineer",
  description:
    "Software Engineer with 2+ years of experience building enterprise AI and full stack applications. Experienced in developing Generative AI and Agentic AI solutions with strong expertise in AWS, Azure, Microservices, and cloud native application development.",
  highlights: [
    "2+ years building enterprise-grade applications",
    "Expert in Generative AI & Agentic AI solutions",
    "Full Stack + Cloud Native Architecture",
    "AWS, Azure & Microservices specialist",
  ],
};

export interface Skill {
  name: string;
  icon?: string;
  proficiency?: number; // 0-100
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages",
    icon: "⚡",
    color: "#6366f1",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "Java", proficiency: 85 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
    ],
  },
  {
    category: "Frameworks",
    description: "Web & API frameworks",
    icon: "🏗️",
    color: "#8b5cf6",
    skills: [
      { name: "React.js", proficiency: 92 },
      { name: "Next.js", proficiency: 90 },
      { name: "Node.js", proficiency: 88 },
      { name: "Express.js", proficiency: 85 },
      { name: "FastAPI", proficiency: 90 },
      { name: "Redux", proficiency: 82 },
    ],
  },
  {
    category: "Generative AI & NLP",
    description: "AI/ML & Natural Language Processing",
    icon: "🧠",
    color: "#ec4899",
    skills: [
      { name: "LLMs", proficiency: 95 },
      { name: "Generative AI", proficiency: 95 },
      { name: "NLP", proficiency: 88 },
      { name: "Prompt Engineering", proficiency: 95 },
      { name: "Embeddings", proficiency: 90 },
      { name: "Tool Calling", proficiency: 92 },
      { name: "Structured Outputs", proficiency: 90 },
      { name: "Hybrid Search", proficiency: 88 },
      { name: "RAG", proficiency: 93 },
    ],
  },
  {
    category: "Agentic AI & Orchestration",
    description: "AI Agent systems & workflows",
    icon: "🤖",
    color: "#f59e0b",
    skills: [
      { name: "LangGraph", proficiency: 92 },
      { name: "LangChain", proficiency: 90 },
      { name: "AI Agents", proficiency: 93 },
      { name: "Multi Agent Workflows", proficiency: 90 },
      { name: "Agent Harness", proficiency: 85 },
      { name: "Evals", proficiency: 88 },
      { name: "Guardrails", proficiency: 87 },
      { name: "HITL", proficiency: 85 },
      { name: "MCP", proficiency: 88 },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud platforms & deployment",
    icon: "☁️",
    color: "#06b6d4",
    skills: [
      { name: "AWS", proficiency: 90 },
      { name: "Docker", proficiency: 88 },
      { name: "CI/CD", proficiency: 85 },
      { name: "GitHub Actions", proficiency: 87 },
      { name: "Microservices", proficiency: 90 },
      { name: "Azure OpenAI", proficiency: 88 },
      { name: "AWS Bedrock", proficiency: 87 },
    ],
  },
  {
    category: "Databases & Tools",
    description: "Data storage & management",
    icon: "🗄️",
    color: "#10b981",
    skills: [
      { name: "PostgreSQL", proficiency: 88 },
      { name: "MySQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 87 },
      { name: "DynamoDB", proficiency: 83 },
      { name: "Vector DB", proficiency: 90 },
    ],
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#about" },
  // { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Stepping Cloud Consulting",
    role: "AI/Software Engineer",
    duration: "2025 - Present",
    location: "New Delhi, India",
    description:
      "Building enterprise AI and full stack applications with cutting-edge technologies.",
    highlights: [
      "Developed Generative AI solutions using LLMs and RAG pipelines.",
      "Built scalable microservices on AWS cloud infrastructure.",
      "Implemented Agentic AI workflows with LangGraph and multi-agent systems.",
      "Designed and deployed cloud-native applications using Docker and CI/CD.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Optimized database queries and improved application performance by 30%.",
    ],
    technologies: [
      "Python",
      "TypeScript",
      "React",
      "AWS",
      "LangGraph",
      "FastAPI",
    ],
  },
];

export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} Mohd Hannan. All rights reserved.`,
  tagline: "Crafting intelligent systems, one line at a time.",
};

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AI Agent Platform",
    description: "A comprehensive platform for building, testing, and deploying autonomous AI agents using LangGraph and AWS.",
    technologies: ["React", "Python", "LangGraph", "AWS Bedrock", "FastAPI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "proj-2",
    title: "RAG Document Analyzer",
    description: "Enterprise-grade Retrieval-Augmented Generation system for analyzing complex PDF documents with high accuracy.",
    technologies: ["Next.js", "TypeScript", "Vector DB", "OpenAI", "Tailwind CSS"],
    githubUrl: "#",
  }
];
