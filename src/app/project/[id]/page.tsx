import React from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Code2, ArrowLeft } from "lucide-react";
import AnimatedFlowDiagram from "@/components/ui/AnimatedFlowDiagram";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-10 group font-mono text-sm uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          <span>Back to Projects</span>
        </Link>
        
        <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mb-12">
          {project.title}
        </h1>

        <div className="flex flex-col gap-16">
          {project.architecture && (
            <div className="w-full">
              <AnimatedFlowDiagram 
                nodes={project.architecture.nodes} 
                edges={project.architecture.edges} 
              />
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-accent block"></span>
                  Overview
                </h3>
                <div className="space-y-6">
                  {project.detailedDescription ? (
                    project.detailedDescription.map((p, idx) => (
                      <p key={idx} className="text-neutral-300 leading-relaxed font-light text-lg">
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-neutral-300 leading-relaxed font-light text-lg">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-accent block"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-neutral-300 font-light text-lg">
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="md:w-80 flex flex-col gap-8 shrink-0">
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-semibold text-white mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono uppercase tracking-wider text-neutral-300 bg-white/5 px-3 py-1.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Links</h3>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors"
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
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl transition-colors font-medium shadow-lg shadow-accent/20"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
