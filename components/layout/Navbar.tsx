"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeToggle } from '@/components/atoms/ThemeToggle';


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Logs", href: "/logs" },
  ];

  const isActive = (href: string) => 
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center p-4">
      <nav className={`${inter.className} relative w-full max-w-5xl bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_40px_rgba(0,0,0,0.4)] rounded-full px-6 py-3 flex items-center justify-between`}>

        {/* Wordmark — extrabold for strong brand presence */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white shrink-0">
          DENVER<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop Nav links — medium weight, clean spacing */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium tracking-normal transition-colors hover:text-accent-500 flex items-center min-h-[44px] min-w-[44px] px-2 ${isActive(link.href)
                ? "text-accent-600 dark:text-accent-400"
                : "text-gray-700 dark:text-gray-400"
                }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Badge + Theme Toggle + Hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full transition-all shrink-0">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-[9px] md:text-xs font-bold md:font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 whitespace-nowrap">
              <span className="hidden md:inline">INTERN </span>
              @ MIH
            </span>
          </div>
          
          <ThemeToggle />

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-neutral-900 dark:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden w-full max-w-5xl mt-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-neutral-200 dark:border-white/[0.08] rounded-[2rem] p-3 shadow-2xl shadow-black/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-6 min-h-[52px] text-base font-bold rounded-2xl transition-all ${isActive(link.href)
                    ? "bg-accent-500/10 text-accent-600 dark:text-accent-400"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5"
                    }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-500" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};