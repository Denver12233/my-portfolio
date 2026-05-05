"use client";

import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "../atoms/Badge";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContributionVisible, setIsContributionVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hover: { y: shouldReduceMotion ? 0 : -8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank");
    }
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    // Only toggle on mobile (md breakpoint is 768px)
    if (window.innerWidth < 768) {
      e.stopPropagation();
      setIsContributionVisible(!isContributionVisible);
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      onClick={handleCardClick}
      className={`group bg-white dark:bg-zinc-900/90 rounded-[2.5rem] border border-neutral-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-accent-600/30 dark:hover:border-accent-400/30 transition-all duration-500 overflow-hidden flex flex-col h-full ${project.liveUrl ? 'cursor-pointer' : ''}`}
    >
      {/* Expanded Image Area */}
      <div 
        className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer md:cursor-default"
        onClick={handleImageClick}
      >
        {project.imageUrl ? (
          <>
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full relative"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Mobile Hint - Visible when overlay is hidden */}
            {!isContributionVisible && (
              <div className="absolute bottom-4 left-4 md:hidden z-20 px-3 py-1.5 bg-neutral-900/80 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                Tap to explore
              </div>
            )}

            {/* Dark Overlay on Hover/Mobile Toggle */}
            <div className={`absolute inset-0 bg-neutral-900/80 transition-opacity duration-500 ${(isHovered || isContributionVisible) ? 'opacity-100' : 'opacity-0'}`} />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center p-6" />
        )}

        {/* Contribution Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
          <AnimatePresence>
            {(isHovered || isContributionVisible) && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4 pointer-events-auto"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-400">Contribution</span>
                <p className="text-white text-lg font-medium leading-tight">
                  {project.contribution}
                </p>
                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <button 
                      onClick={handleLiveClick}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
                      aria-label="View Live Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </button>
                  )}
                  {project.githubUrl && (
                    <button 
                      onClick={handleGithubClick}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
                      aria-label="View Source Code on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Static Info Area */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge label={project.category} variant="green" />
          {project.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        <h3 className="text-3xl font-extrabold mb-4 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors text-neutral-900 dark:text-white tracking-tight">
          {project.title}
        </h3>

        <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-light mb-8">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-zinc-800 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            {project.completionDate}
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">
            View Project Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
