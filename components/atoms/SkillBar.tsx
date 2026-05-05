"use client";
import { motion, useReducedMotion } from "framer-motion";

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export const SkillBar = ({ name, proficiency }: SkillBarProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="">
      <div className="flex justify-between items-end mb-2">
        <span className="font-bold text-sm uppercase tracking-wider">{name}</span>
        <span className="text-xs text-neutral-400">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-neutral-100 dark:bg-zinc-800/50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut", delay: 0.1 }}
          className="h-full bg-accent-500 rounded-full"
        />
      </div>

    </div>
  );
};
