"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "../molecules/ProjectCard";
import { filterProjects } from "@/lib/filterProjects";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { getFadeVariant } from "@/lib/animations";

interface FilterableGalleryProps {
  projects: Project[];
  categories: string[];
  techStacks: string[];
}

export const FilterableGallery = ({ projects, categories, techStacks }: FilterableGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  const shouldReduceMotion = useReducedMotion();
  const fadeVariant = getFadeVariant();

  const filtered = filterProjects(projects, selectedCategory, selectedTech);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">Category</span>
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 min-h-[44px] flex items-center justify-center rounded-full text-[11px] font-bold transition-all ${selectedCategory === cat
                  ? "bg-accent-600 text-white shadow-lg shadow-accent-600/20"
                  : "border border-neutral-200 dark:border-zinc-800 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-zinc-800/50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block">Technology</span>
          <div className="flex flex-wrap gap-2">
            {["All", ...techStacks].map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-5 min-h-[44px] flex items-center justify-center rounded-full text-[11px] font-bold transition-all ${selectedTech === tech
                  ? "bg-accent-600 text-white shadow-lg shadow-accent-600/20"
                  : "border border-neutral-200 dark:border-zinc-800 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-zinc-800/50"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout={!shouldReduceMotion}
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-32 bg-neutral-50 dark:bg-neutral-900 rounded-[3rem]">
          <p className="text-neutral-500 font-light">No projects match the selected criteria.</p>
        </div>
      )}
    </div>
  );
};
