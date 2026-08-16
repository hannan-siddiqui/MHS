"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, ChevronRight, RefreshCw } from "lucide-react";
import { personalInfo, summary, projects, skills } from "@/data/portfolio";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const suggestedQuestions = [
  "What is Hannan's core expertise?",
  "Has Hannan built Agentic AI & RAG?",
  "What featured projects has Hannan built?",
  "How can I contact or hire Hannan?",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: `Hi there! 👋 I'm Hannan's AI Assistant. Ask me anything about Hannan's AI engineering experience, Agentic AI, RAG pipelines, or tech stack!`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Match queries to smart answers
  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("hypercart")) {
      return `⚡ HyperCart AI is an Autonomous Multi-Agent E-Commerce Operating System featuring:\n• Dynamic Text-to-SQL intent routing with wildcard matching\n• Structured product schema generation with Pydantic v2\n• 1536-dim pgvector RAG for grounded customer support\n• Human-in-the-Loop governance & audit queue\n• Avant-Garde Acid Void UI in Next.js 14.`;
    }

    if (q.includes("proptech") || q.includes("property") || q.includes("real estate")) {
      return `🏠 Proptech is a Smart Real Estate Assistant featuring:\n• LLM Zero-Shot Intent Router (Relational vs Semantic)\n• Secure parameterized Text-to-SQL for dynamic MLS property listings\n• pgvector RAG for PDF deed & HOA policy Q&A\n• Semantic threat guardrails & split-pane interactive UI.`;
    }

    if (q.includes("infuse") || q.includes("document analyzer") || q.includes("pdf") || q.includes("analyzer")) {
      return `📄 Infuse is an Enterprise RAG Document Analyzer featuring:\n• Hierarchical token-aware PDF chunking with layout preservation\n• Dense + Sparse Hybrid Search with reciprocal rank fusion\n• Strict citation guardrails ensuring zero hallucination\n• Real-time SSE token streaming dashboard.`;
    }

    if (q.includes("expertise") || q.includes("skills") || q.includes("stack") || q.includes("technologies")) {
      return `Hannan is a Software/AI Engineer with 2+ years of experience. His core tech stack includes:\n• Agentic AI: LangGraph, LangChain, Multi-Agent Workflows, Guardrails, Pydantic v2\n• Generative AI: Dynamic Text-to-SQL, RAG Pipelines, pgvector, AWS Bedrock, Azure OpenAI\n• Full Stack & Cloud: Next.js 14/15, React.js, FastAPI, Node.js, AWS Microservices, Docker, PostgreSQL.`;
    }

    if (q.includes("rag") || q.includes("agent") || q.includes("langgraph") || q.includes("ai")) {
      return `Yes! Hannan specializes in Agentic AI & Enterprise RAG. His featured systems include:\n1. HyperCart AI (Multi-Agent E-Commerce OS with Text-to-SQL & HITL Gate)\n2. Proptech Smart Assistant (Intent Routing & MLS Text-to-SQL)\n3. Infuse Document Analyzer (Hierarchical RAG & Hybrid Search)\nAll systems feature strict safety guardrails and pgvector embeddings!`;
    }

    if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      return `Hannan's top featured projects include:\n1. ⚡ HyperCart AI — Autonomous Multi-Agent E-Commerce OS\n2. 🏠 Proptech — Smart Property Assistant (Text-to-SQL + RAG Intent Router)\n3. 📄 Infuse — Enterprise RAG Document Analyzer (Hybrid Vector Search)\nClick on any project in the portfolio to view interactive architecture diagrams!`;
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach")) {
      return `You can get in touch with Hannan directly:\n📧 Email: ${personalInfo.email}\n🔗 LinkedIn: ${personalInfo.linkedin}\n🐙 GitHub: ${personalInfo.github}\n⚡ Availability: ${personalInfo.availability}`;
    }

    if (q.includes("experience") || q.includes("company") || q.includes("years")) {
      return `Hannan has 2+ years of enterprise experience at Stepping Cloud Consulting as an AI/Software Engineer, building RAG systems, AWS Bedrock email automation, and full-stack cloud modules.`;
    }

    return `Hannan is a Software/AI Engineer with 2+ years of experience architecting Enterprise AI, LangGraph Agentic Workflows, RAG solutions, and Cloud Microservices. Feel free to ask about his projects, tech stack, or email him at ${personalInfo.email}!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const botResponse = generateResponse(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111111] border border-red-500/40 text-white shadow-2xl shadow-red-500/20 backdrop-blur-md cursor-pointer group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider">
            {isOpen ? "Close Assistant" : "Ask Hannan's AI"}
          </span>
        </motion.button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] rounded-3xl bg-[#0f0f11]/95 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#141417] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white leading-tight">
                    Hannan&apos;s AI Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>Online • Instant AI Answers</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-mono scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl max-w-[82%] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-red-500 text-white rounded-tr-none font-sans text-xs"
                        : "bg-white/5 border border-white/10 text-neutral-200 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`text-[9px] mt-1.5 ${
                        msg.sender === "user" ? "text-white/70 text-right" : "text-neutral-500"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5 items-center text-neutral-400 text-[11px] font-mono">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggested Questions */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] flex flex-wrap gap-1.5 shrink-0">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] font-mono text-neutral-300 bg-white/5 hover:bg-red-500/20 hover:text-white border border-white/10 hover:border-red-500/40 px-2.5 py-1 rounded-full transition-all cursor-pointer truncate max-w-full"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#141417] border-t border-white/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about Hannan's experience..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-40 text-white transition-all cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
