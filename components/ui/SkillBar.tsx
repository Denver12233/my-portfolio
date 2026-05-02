"use client";
import { useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export const SkillBar = ({ name, proficiency }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(proficiency), 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="font-bold text-sm uppercase tracking-wider">{name}</span>
        <span className="text-xs text-neutral-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};
