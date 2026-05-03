"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { getStaggerContainer } from "@/lib/animations";

export const StaggerContainer = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getStaggerContainer()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
