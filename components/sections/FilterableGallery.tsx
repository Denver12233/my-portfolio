"use client";

import { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "../cards/ProjectCard";
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
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Category</span>
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 min-h-[44px] flex items-center justify-center rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat 
                  ? "bg-accent-600 text-white shadow-lg shadow-accent-600/20" 
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Technology</span>
          <select 
            onChange={(e) => setSelectedTech(e.target.value)}
            className="bg-neutral-100 dark:bg-neutral-800 px-6 min-h-[44px] rounded-full text-xs font-bold focus:outline-none focus:ring-2 focus:ring-accent-500"
          >
            <option value="All">All Tech</option>
            {techStacks.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
