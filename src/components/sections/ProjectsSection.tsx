"use client";

import { projects, Project } from "@/data/portfolio";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 relative z-10"
      >
        
        {/* Section header */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            My Projects
            <br />
            <span className="text-xl sm:text-2xl font-sans font-light text-neutral-400 normal-case mt-2 block">
              Recent Work
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              key={project.id}
              onClick={() => router.push(`/project/${project.id}`)}
              className="wireframe-box p-8 rounded-lg group flex flex-col h-full bg-[#111111] cursor-pointer hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center text-accent shrink-0">
                  <FolderGit2 strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-white transition-colors">
                      <Code2 className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-accent transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="mb-6 flex items-center text-xs font-mono font-semibold text-accent group-hover:text-white transition-colors">
                VIEW DETAILS <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {/* Tech stack */}
              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}
