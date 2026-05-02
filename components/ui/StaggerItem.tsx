"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { getStaggerItem } from "@/lib/animations";

export const StaggerItem = ({ children, className }: { children: ReactNode, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={getStaggerItem(shouldReduceMotion)}
      className={className}
    >
      {children}
    </motion.div>
  );
};
