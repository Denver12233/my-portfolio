"use client";

import { useState } from "react";
import { Log } from "@/types";
import { LogCard } from "@/components/molecules/LogCard";
import { StaggerContainer } from "@/components/atoms/StaggerContainer";
import { StaggerItem } from "@/components/atoms/StaggerItem";
import { AnimatePresence } from "framer-motion";

interface LogsGridProps {
  logs: Log[];
}

export const LogsGrid = ({ logs }: LogsGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(logs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = logs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-16">
      <StaggerContainer key={currentPage} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {currentLogs.map((log) => (
            <StaggerItem key={log.slug}>
              <LogCard log={log} />
            </StaggerItem>
          ))}
        </AnimatePresence>
      </StaggerContainer>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-8 pt-12 border-t border-neutral-100 dark:border-zinc-800/50">
          <div className="flex items-center gap-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold transition-all border
                ${currentPage === 1
                  ? "border-neutral-100 text-neutral-300 cursor-not-allowed dark:border-zinc-900 dark:text-zinc-800"
                  : "border-neutral-200 text-neutral-500 hover:bg-neutral-50 dark:border-zinc-800 dark:text-neutral-400 dark:hover:bg-zinc-800/50"
                }`}
            >
              Previous
            </button>

            <span className="text-[11px] font-bold text-neutral-400 dark:text-zinc-500 uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold transition-all border
                ${currentPage === totalPages
                  ? "border-neutral-100 text-neutral-300 cursor-not-allowed dark:border-zinc-900 dark:text-zinc-800"
                  : "border-neutral-200 text-neutral-500 hover:bg-neutral-50 dark:border-zinc-800 dark:text-neutral-400 dark:hover:bg-zinc-800/50"
                }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
