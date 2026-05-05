"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const Tooltip = ({ content, children }: { content: string; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-8 z-50 whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white shadow-md dark:bg-neutral-100 dark:text-neutral-900"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
