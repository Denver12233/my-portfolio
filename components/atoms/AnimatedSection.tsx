"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { getFadeUpVariant } from "@/lib/animations";

export const AnimatedSection = ({ children, className }: { children: ReactNode, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getFadeUpVariant(shouldReduceMotion)}
      className={className}
    >
      {children}
    </motion.section>
  );
};
