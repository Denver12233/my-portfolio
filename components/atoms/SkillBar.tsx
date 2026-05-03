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
      <div className="h-1.5 bg-neutral-200 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
          style={{ width: `${proficiency}%` }}
          className="h-1.5 bg-accent-600 rounded-full"
        />
      </div>
    </div>
  );
};
