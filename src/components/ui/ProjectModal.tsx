"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import AnimatedFlowDiagram from "./AnimatedFlowDiagram";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-[5%] bottom-[5%] left-[5%] right-[5%] max-w-7xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl z-[60] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-neutral-400" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              <div className="flex flex-col gap-10">
                
                {/* Top Section: Architecture Diagram */}
                {project.architecture && (
                  <div className="w-full flex flex-col gap-4">
                    <AnimatedFlowDiagram 
                      nodes={project.architecture.nodes} 
                      edges={project.architecture.edges} 
                    />
                  </div>
                )}

                {/* Bottom Section: Details */}
                <div className="flex-1 flex flex-col gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-4">Overview</h3>
                    <div className="space-y-4">
                      {project.detailedDescription ? (
                        project.detailedDescription.map((p, idx) => (
                          <p key={idx} className="text-neutral-400 leading-relaxed font-light">
                            {p}
                          </p>
                        ))
                      ) : (
                        <p className="text-neutral-400 leading-relaxed font-light">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {project.features && (
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-white mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-400 font-light">
                            <span className="text-accent mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono uppercase tracking-wider text-neutral-300 bg-white/5 px-3 py-1.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                      >
                        <Code2 className="w-5 h-5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* End of Details */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
