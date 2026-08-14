"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFastapi,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiLangchain,
} from "react-icons/si";

import {
  FaAws,
  FaDocker,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaPlug,
  FaShieldHalved,
  FaSliders,
  FaGitAlt,
} from "react-icons/fa6";

import { VscAzure } from "react-icons/vsc";
import { TbBrandOpenai, TbAffiliate, TbCpu, TbGitFork, TbHierarchy } from "react-icons/tb";
import { HiSparkles, HiTableCells, HiMagnifyingGlass, HiScale } from "react-icons/hi2";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function RealTechIcon({ name, className = "w-3.5 h-3.5" }: TechIconProps) {
  const iconMap: Record<string, React.ElementType> = {
    // Languages
    "Python": FaPython,
    "Java": FaJava,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "SQL": FaDatabase,

    // Frameworks
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    "FastAPI": SiFastapi,
    "Redux": SiRedux,

    // Generative AI & NLP
    "LLMs": FaBrain,
    "Generative AI": HiSparkles,
    "NLP": FaBrain,
    "Prompt Engineering": TbCpu,
    "Embeddings": TbAffiliate,
    "Tool Calling": FaSliders,
    "Structured Outputs": HiTableCells,
    "Hybrid Search": HiMagnifyingGlass,
    "RAG": FaMicrochip,

    // Agentic AI & Orchestration
    "LangGraph": TbGitFork,
    "LangChain": SiLangchain,
    "AI Agents": FaRobot,
    "Multi Agent Workflows": TbHierarchy,
    "Agent Harness": FaSliders,
    "Evals": HiScale,
    "Guardrails": FaShieldHalved,
    "HITL": FaRobot,
    "MCP": FaPlug,

    // Cloud & DevOps
    "AWS": FaAws,
    "Azure": VscAzure,
    "Docker": FaDocker,
    "CI/CD": FaGitAlt,
    "GitHub Actions": FaGitAlt,
    "Microservices": FaNetworkWired,
    "Azure OpenAI": TbBrandOpenai,
    "AWS Bedrock": FaAws,

    // Databases & Tools
    "PostgreSQL": SiPostgresql,
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "DynamoDB": FaDatabase,
    "Vector DB": FaMicrochip,
  };

  const IconComponent = iconMap[name] || FaMicrochip;

  return <IconComponent className={className} />;
}
