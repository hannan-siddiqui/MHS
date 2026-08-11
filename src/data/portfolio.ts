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
      "Architected an advanced Retrieval-Augmented Generation (RAG) pipeline for an enterprise ticketing system, enabling seamless document ingestion and contextual Q&A utilizing Python, LangChain, Vector DBs, and Hybrid Search.",
      "Engineered an automated email processing engine powered by AWS Bedrock to instantly summarize complex support threads and generate highly accurate draft responses via Prompt Engineering and Structured Outputs.",
      "Architected a document-to-document RAG solution using Azure OpenAI and LangChain to parse massive text corpora, synthesize the retrieved context, and generate precise, structured output documents with enforced Guardrails to prevent hallucinations.",
      "Developed core modules for a branded alumni portal designed to streamline employee exits, strengthen alumni connections, enable referrals, and provide personalized career opportunities through an integrated AI-based job recommendation system.",
      "Built core platform modules using React.js, Node.js and deployed the application using AWS EC2, AWS S3, CloudFront and AWS RDS.",
      "Designed and developed a complete HR Dashboard as a standalone full-stack solution, enabling HR to manage employees.",
      "Built a complete DocuSign-based workflow using React.js, DynamoDB and Node.js to automate document signing, sending, tracking, and signature retrieval.",
    ],
    technologies: [
      "Python",
      "JavaScript/TypeScript",
      "React.js",
      "Node.js",
      "FastAPI",
      "AWS",
      "LangGraph",
      "Docker",
      "Azure OpenAI",
      "AWS Bedrock",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS CloudFront",
      "AWS DynamoDB"
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
  detailedDescription?: string[];
  features?: string[];
  architecture?: {
    nodes: { id: string; label: string; icon?: string; x: number; y: number }[];
    edges: { source: string; target: string; label?: string; animated?: boolean }[];
  };
}

export const projects: Project[] = [
  // {
  //   id: "proj-1",
  //   title: "AI Agent Platform",
  //   description: "A comprehensive platform for building, testing, and deploying autonomous AI agents using LangGraph and AWS.",
  //   technologies: ["React", "Python", "LangGraph", "AWS Bedrock", "FastAPI"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   detailedDescription: [
  //     "A comprehensive platform designed to democratize the creation and deployment of autonomous AI agents.",
  //     "By leveraging LangGraph for stateful multi-actor workflows and AWS Bedrock for scalable foundation models, the system allows developers to build, evaluate, and monitor complex Agentic AI systems with a visual graph approach."
  //   ],
  //   features: [
  //     "Visual Agent Builder with React and interactive node graphs",
  //     "Stateful workflows and orchestration powered by LangGraph",
  //     "Seamless integration with AWS Bedrock for multiple LLM choices",
  //     "Real-time logging and tracing for agent debugging"
  //   ],
  //   architecture: {
  //     nodes: [
  //       { id: "ui", label: "React UI", x: 15, y: 50 },
  //       { id: "api", label: "FastAPI Backend", x: 40, y: 50 },
  //       { id: "agent", label: "LangGraph Orchestrator", x: 65, y: 25 },
  //       { id: "aws", label: "AWS Bedrock", x: 85, y: 50 }
  //     ],
  //     edges: [
  //       { source: "ui", target: "api", animated: true },
  //       { source: "api", target: "agent", animated: true },
  //       { source: "agent", target: "aws", animated: true },
  //       { source: "aws", target: "agent", animated: true },
  //       { source: "agent", target: "api", animated: true }
  //     ]
  //   }
  // },
  {
    id: "proj-3",
    title: "Proptech - Smart Property Assistant",
    description: "AI-powered real estate assistant featuring a hybrid Text-to-SQL and RAG pipeline. Includes an LLM-based Intent Router, semantic guardrails, and a modern split-pane responsive UI for instant visual feedback.",
    technologies: ["Next.js", "Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector", "Docker"],
    githubUrl: "https://github.com/hannan-siddiqui/Proptech",
    // liveUrl: "#",
    detailedDescription: [
      "A sophisticated multi-agent AI system that bridges the gap between structured databases and unstructured documents.",
      "It features an LLM-based Intent Router that accurately classifies user inputs to execute either a secure, read-only PostgreSQL query for property listings, or a semantic search (RAG) for unstructured knowledge.",
      "The UI is a modern, responsive split-pane dashboard with real-time state synchronization, giving users instant visual feedback."
    ],
    features: [
      "Intelligent Query Routing distinguishing structured vs unstructured intent",
      "Secure Text-to-SQL agent fetching property listings dynamically",
      "Drag-and-Drop PDF system storing embeddings in pgvector",
      "Semantic Guardrails to filter malicious/irrelevant queries",
      "Split-pane responsive UI with Next.js 15 and Tailwind CSS"
    ],
    architecture: {
      nodes: [
        { id: "client", label: "Next.js UI", x: 6, y: 40 },
        { id: "guardrails", label: "Semantic Guardrails", x: 22, y: 40 },
        { id: "reject", label: "Blocked (Unsafe)", x: 22, y: 10 },
        { id: "router", label: "Intent Router", x: 38, y: 40 },
        { id: "sql", label: "Text-to-SQL", x: 54, y: 20 },
        { id: "rag", label: "RAG Pipeline", x: 54, y: 60 },
        { id: "pg", label: "PostgreSQL", x: 70, y: 20 },
        { id: "vector", label: "Vector DB", x: 70, y: 60 },
        { id: "cards", label: "Property Cards", x: 86, y: 20 },
        { id: "text", label: "Text Response", x: 86, y: 60 },
        { id: "pdf", label: "PDF Upload", x: 22, y: 85 },
        { id: "parse", label: "Parsing", x: 38, y: 85 },
        { id: "chunk", label: "Chunking", x: 54, y: 85 },
        { id: "embed", label: "Embedding", x: 70, y: 85 }
      ],
      edges: [
        { source: "client", target: "guardrails", label: "Query", animated: true },
        { source: "client", target: "pdf", label: "Upload", animated: true },
        { source: "guardrails", target: "router", label: "Safe", animated: true },
        { source: "guardrails", target: "reject", label: "Unsafe", animated: true },
        { source: "router", target: "sql", label: "Structured", animated: true },
        { source: "router", target: "rag", label: "Unstructured", animated: true },
        { source: "sql", target: "pg", animated: true },
        { source: "rag", target: "vector", animated: true },
        { source: "pg", target: "cards", label: "Result", animated: true },
        { source: "vector", target: "text", label: "Result", animated: true },
        { source: "pdf", target: "parse", animated: true },
        { source: "parse", target: "chunk", animated: true },
        { source: "chunk", target: "embed", animated: true },
        { source: "embed", target: "vector", animated: true }
      ]
    }
  },
  {
    id: "proj-2",
    title: "RAG Document Analyzer",
    description: "Enterprise-grade Retrieval-Augmented Generation system for analyzing complex PDF documents with high accuracy.",
    technologies: ["Next.js", "FastApi", "TypeScript", "Vector DB", "OpenAI"],
    githubUrl: "https://github.com/hannan-siddiqui/infuse",
    detailedDescription: [
      "An enterprise-grade document analysis tool that ingests massive corpora of PDF documents and provides precise answers using Retrieval-Augmented Generation.",
      "The pipeline intelligently chunks and embeds text into a Vector DB, and utilizes advanced hybrid search to ensure high recall and accuracy when queried by users."
    ],
    features: [
      "Drag-and-drop document upload and processing",
      "Advanced chunking and semantic embedding generation",
      "Hybrid search capabilities (Keyword + Vector)",
      "Source attribution and confidence scoring for AI responses"
    ],
    architecture: {
      nodes: [
        // Document ingestion pipeline (top lane, y=15)
        { id: "upload", label: "Document Upload", x: 6, y: 15 },
        { id: "parse", label: "Parsing", x: 22, y: 15 },
        { id: "chunk", label: "Chunking", x: 38, y: 15 },
        { id: "embed_doc", label: "Embedding", x: 54, y: 15 },
        { id: "vector", label: "Vector DB", x: 70, y: 15 },

        // User query pipeline (bottom lane, y=75)
        { id: "query", label: "User Query", x: 6, y: 75 },
        { id: "embed_q", label: "Query Embedding", x: 22, y: 75 },
        { id: "cosine", label: "Cosine Similarity", x: 38, y: 75 },
        { id: "topk", label: "Top-K Results", x: 54, y: 75 },
        { id: "llm", label: "LLM (OpenAI)", x: 70, y: 75 },
        { id: "result", label: "Response", x: 88, y: 75 },

        // Shared connection label
        { id: "nextjs", label: "Next.js UI", x: 6, y: 45 }
      ],
      edges: [
        // Ingestion flow
        { source: "upload", target: "parse", animated: true },
        { source: "parse", target: "chunk", animated: true },
        { source: "chunk", target: "embed_doc", animated: true },
        { source: "embed_doc", target: "vector", label: "Store", animated: true },

        // Query flow
        { source: "query", target: "embed_q", animated: true },
        { source: "embed_q", target: "cosine", animated: true },
        { source: "cosine", target: "topk", animated: true },
        { source: "topk", target: "llm", label: "Context", animated: true },
        { source: "llm", target: "result", animated: true },

        // Cross-lane: Vector DB feeds cosine similarity
        { source: "vector", target: "cosine", label: "Search", animated: true },

        // UI connections
        { source: "nextjs", target: "upload", label: "Upload", animated: true },
        { source: "nextjs", target: "query", label: "Query", animated: true }
      ]
    }
  }
  
];
