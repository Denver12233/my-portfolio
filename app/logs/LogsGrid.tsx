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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const itemsPerPage = 6;

  // 1. Search Logic with Normalization (Strip spaces and lowercase)
  const filteredLogs = logs.filter((log) => {
    const normalize = (str: string) => str.replace(/\s+/g, "").toLowerCase();
    const query = normalize(searchQuery);

    if (!query) return true;

    const matchesTitle = normalize(log.title).includes(query);
    const matchesExcerpt = normalize(log.excerpt).includes(query);
    const matchesTags = log.tags.some((tag) => normalize(tag).includes(query));

    return matchesTitle || matchesExcerpt || matchesTags;
  });

  // Helper to extract week number from title (e.g., "Week 8 – Polish & Performance" -> 8)
  const getWeekNumber = (title: string) => {
    const match = title.match(/Week\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 0;
  };

  // 2. Sort Logic
  const sortedLogs = [...filteredLogs].sort((a, b) => {
    const weekA = getWeekNumber(a.title);
    const weekB = getWeekNumber(b.title);

    if (weekA !== weekB) {
      return sortOrder === "asc" ? weekA - weekB : weekB - weekA;
    }

    // Fallback to date if week numbers are same or missing
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 3. Pagination Logic
  const totalPages = Math.ceil(sortedLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = sortedLogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-12">
      {/* Header with Sort Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-600 dark:text-accent-400 mb-3 block">
            Reflections
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-plusJakarta font-extrabold tracking-tight">
              Internship Logs
            </h2>
            <button
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                setCurrentPage(1);
              }}
              className="px-4 py-1.5 rounded-full border border-neutral-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-neutral-500 hover:bg-neutral-50 dark:hover:bg-zinc-800/50 transition-all mt-2"
            >
              {sortOrder === "asc" ? "↑ Oldest First" : "↓ Newest First"}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Search by week or topic..."
            className="w-full px-5 py-3 rounded-xl border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
        </div>
      </div>

      {sortedLogs.length > 0 ? (
        <>
          <StaggerContainer key={`${currentPage}-${sortOrder}-${searchQuery}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </>
      ) : (
        <div className="text-center py-20 bg-neutral-50 dark:bg-zinc-900/30 rounded-3xl border border-dashed border-neutral-200 dark:border-zinc-800">
          <p className="text-neutral-500 dark:text-zinc-400 font-light">No logs match your search.</p>
        </div>
      )}
    </div>
  );
};
