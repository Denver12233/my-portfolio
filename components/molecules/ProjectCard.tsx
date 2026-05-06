"use client";

import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "../atoms/Badge";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export const ProjectCard = ({ project, priority = false }: { project: Project, priority?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContributionVisible, setIsContributionVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsContributionVisible(false);
      }
    };

    if (isContributionVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContributionVisible]);

  const handleViewDetails = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if it's not a button click (though propagation should handle most)
    handleViewDetails(e);
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsContributionVisible(true);
  };

  const cardVariants = {
    hover: { y: shouldReduceMotion ? 0 : -8 }
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const showOverlay = isContributionVisible || (isHovered && !isMobile);


  return (
    <motion.div
      ref={cardRef}
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
        className="relative w-full aspect-[16/9] overflow-hidden"
      >
        {project.imageUrl ? (
          <>
            <motion.div
              animate={{ scale: showOverlay ? 1.05 : 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full relative bg-white"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover brightness-100"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority}
              />
            </motion.div>

            {/* Mobile Explore Button - Visible when overlay is hidden */}
            {!showOverlay && (
              <button 
                onClick={handleExploreClick}
                className="absolute bottom-4 left-4 md:hidden z-20 px-4 py-2 bg-neutral-900/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg active:scale-95 transition-all"
              >
                Tap to explore
              </button>
            )}

            {/* Dark Overlay on Hover/Mobile Toggle */}
            <div className={`absolute inset-0 bg-neutral-900/80 transition-opacity duration-500 ${showOverlay ? 'opacity-100' : 'opacity-0'}`} />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center p-6" />
        )}

        {/* Contribution Overlay */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute inset-0 p-6 md:p-8 flex flex-col pointer-events-auto overflow-y-auto custom-scrollbar"
              >
                {/* Close Button - Mobile Only */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsContributionVisible(false);
                  }}
                  className="absolute top-1 right-1 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white transition-colors md:hidden"
                  aria-label="Close overlay"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="flex-grow min-h-[2rem] pointer-events-none" />
                
                <div className="space-y-4 pb-2">
                  <div className="pointer-events-none select-none space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-400 block">Contribution</span>
                    <p className="text-white text-base md:text-lg font-medium leading-snug">
                      {project.contribution}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button 
                      onClick={handleViewDetails}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-accent-400 transition-colors group/btn"
                    >
                      View Project 
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <button 
                          onClick={handleGithubClick}
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
                          aria-label="View Source Code on GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </button>
                      )}
                    </div>
                  </div>
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
