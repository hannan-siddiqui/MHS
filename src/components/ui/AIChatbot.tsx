"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, Cpu, Terminal } from "lucide-react";
import { personalInfo, summary, projects, skills } from "@/data/portfolio";
import ScrambleText from "@/components/ui/ScrambleText";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isStreaming?: boolean;
}

const suggestedQuestions = [
  "What is Hannan's core AI expertise?",
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
      text: `[SYSTEM ONLINE // HARDWARE INTERFACE INITIALIZED]\nHello! I am Hannan's AI Coprocessor. Ask me anything about Hannan's Agentic AI, RAG architectures, cloud microservices, or tech stack.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const streamIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
    };
  }, []);

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("hypercart")) {
      return `⚡ HyperCart AI — Autonomous Multi-Agent E-Commerce Operating System\n• Text-to-SQL dynamic routing with wildcard fuzzy matching\n• Strict Pydantic v2 product schema generation\n• 1536-dim pgvector RAG for store SOPs\n• Human-in-the-Loop governance & audit queue\n• Avant-Garde Acid Void UI in Next.js 14.`;
    }

    if (q.includes("proptech") || q.includes("property") || q.includes("real estate")) {
      return `🏠 Proptech — Smart Property Assistant\n• LLM Zero-Shot Intent Router (Relational vs Semantic)\n• Parameterized Text-to-SQL for dynamic MLS listings\n• pgvector RAG for HOA bylaws & deed analysis\n• Threat detection guardrails & responsive dashboard.`;
    }

    if (q.includes("infuse") || q.includes("document analyzer") || q.includes("pdf") || q.includes("analyzer")) {
      return `📄 Infuse — Enterprise RAG Document Analyzer\n• Token-aware hierarchical PDF chunking\n• Dense + Sparse Hybrid Search with reciprocal rank fusion\n• Strict citation guardrails preventing hallucination\n• Real-time SSE token streaming.`;
    }

    if (q.includes("expertise") || q.includes("skills") || q.includes("stack") || q.includes("technologies")) {
      return `Hannan's Core Hardware Stack:\n• Agentic AI: LangGraph, Multi-Agent Graphs, Guardrails, Pydantic v2\n• Generative AI: Dynamic Text-to-SQL, RAG Pipelines, pgvector, AWS Bedrock, Azure OpenAI\n• Full Stack & Cloud: Next.js 15, FastAPI, Node.js, AWS Microservices, Docker, PostgreSQL.`;
    }

    if (q.includes("rag") || q.includes("agent") || q.includes("langgraph") || q.includes("ai")) {
      return `Yes! Hannan specializes in Agentic AI & Enterprise RAG pipelines:\n1. HyperCart AI (Multi-Agent E-Commerce OS with Text-to-SQL & HITL Gate)\n2. Proptech Smart Assistant (Intent Routing & MLS Text-to-SQL)\n3. Infuse Document Analyzer (Hierarchical RAG & Hybrid Search)\nAll systems feature 0% hallucination guardrails.`;
    }

    if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      return `Hannan's top featured projects include:\n1. ⚡ HyperCart AI — Autonomous Multi-Agent E-Commerce OS\n2. 🏠 Proptech — Smart Property Assistant (Text-to-SQL + RAG Intent Router)\n3. 📄 Infuse — Enterprise RAG Document Analyzer (Hybrid Vector Search)\nExplore the case study cartridges for full architectural diagrams!`;
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach")) {
      return `Direct Interface Ports:\n📧 Email: ${personalInfo.email}\n🔗 LinkedIn: ${personalInfo.linkedin}\n🐙 GitHub: ${personalInfo.github}\n⚡ Availability: ${personalInfo.availability}`;
    }

    return `Hannan is a Software/AI Engineer with 2+ years of enterprise experience building LangGraph Agentic Workflows, Enterprise RAG solutions, and Cloud Native Microservices. Feel free to ask about his projects or transmit a message to ${personalInfo.email}!`;
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

    setTimeout(() => {
      const fullResponse = generateResponse(query);
      const botMsgId = (Date.now() + 1).toString();
      
      const newBotMsg: Message = {
        id: botMsgId,
        sender: "bot",
        text: "",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isStreaming: true,
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);

      let charIndex = 0;
      const streamChunkSize = 3;

      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);

      streamIntervalRef.current = setInterval(() => {
        charIndex += streamChunkSize;
        const currentSlice = fullResponse.slice(0, charIndex);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId
              ? {
                  ...msg,
                  text: currentSlice,
                  isStreaming: charIndex < fullResponse.length,
                }
              : msg
          )
        );

        if (charIndex >= fullResponse.length) {
          if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
        }
      }, 20);
    }, 400);
  };

  return (
    <>
      {/* Floating Hardware Diagnostic Button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl neu-button-primary cursor-pointer shadow-xl"
        >
          <div className="relative">
            <Cpu className="w-4 h-4 text-red-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full led-red" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider">
            {isOpen ? "CLOSE DIAGNOSTICS" : "AI COPROCESSOR"}
          </span>
        </motion.button>
      </div>

      {/* Hardware Diagnostic Console Chassis */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[82vh] rounded-3xl neu-raised-thick flex flex-col overflow-hidden font-mono shadow-2xl"
          >
            {/* Console Header */}
            <div className="px-5 py-4 border-b border-[#cbd1dc]/70 flex items-center justify-between bg-[#e4e7ec]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl neu-inset flex items-center justify-center text-neutral-800">
                  <Terminal className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-950 uppercase leading-tight">
                    DIAGNOSTIC COPROCESSOR
                  </h4>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full led-green" />
                    <span>PORT 8080 : ONLINE</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg neu-raised flex items-center justify-center text-neutral-600 hover:text-neutral-950 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages Terminal Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-mono bg-[#dde0e6]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#181a1e] text-white rounded-tr-none shadow-md"
                        : "neu-raised text-neutral-900 rounded-tl-none whitespace-pre-line border border-white/60"
                    }`}
                  >
                    {msg.text}
                    {msg.isStreaming && (
                      <span className="inline-block ml-1 text-red-500 animate-blink-cursor font-bold">
                        █
                      </span>
                    )}
                    <div
                      className={`text-[9px] mt-1.5 ${
                        msg.sender === "user" ? "text-neutral-400 text-right" : "text-neutral-500"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="p-3 rounded-xl neu-raised w-fit flex items-center gap-1.5 text-xs text-neutral-600">
                  <span className="w-1.5 h-1.5 rounded-full led-red" />
                  <span>Computing query response...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2 border-t border-[#cbd1dc]/70 bg-[#e4e7ec] flex flex-wrap gap-1.5 shrink-0">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] font-mono text-neutral-700 neu-raised px-2.5 py-1 rounded-lg hover:text-red-600 transition-colors cursor-pointer truncate max-w-full"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#e4e7ec] border-t border-[#cbd1dc]/70 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="INPUT COMMAND OR QUERY..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-xl neu-inset text-xs font-mono text-neutral-900 placeholder-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="neu-button-primary p-2.5 rounded-xl disabled:opacity-40 cursor-pointer shrink-0"
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
