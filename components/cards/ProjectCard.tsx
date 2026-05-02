"use client";

import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "../ui/Badge";
import { motion, useReducedMotion } from "framer-motion";

export const ProjectCard = ({ project }: { project: Project }) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hover: { scale: shouldReduceMotion ? 1 : 1.02 }
  };

  const imageVariants = {
    hover: { scale: shouldReduceMotion ? 1 : 1.05 }
  };

  return (
    <motion.div 
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-zinc-900/90 rounded-3xl border border-neutral-100 dark:border-white/[0.06] hover:border-accent-300 dark:hover:border-accent-700 transition-colors duration-300 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col h-full"
    >
      <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
        {project.imageUrl ? (
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
        ) : (
          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-400 dark:text-neutral-500 font-plusJakarta font-bold uppercase tracking-widest text-sm">
              {project.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              className="w-11 h-11 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="w-11 h-11 bg-white rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge label={project.category} variant="green" />
          {project.techStack.slice(0, 2).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors text-neutral-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-2 mb-6 font-light">
          {project.description}
        </p>
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mt-auto block">
          {project.completionDate}
        </span>
      </div>
    </motion.div>
  );
};
