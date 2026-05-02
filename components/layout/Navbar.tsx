"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Logs", href: "/logs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full max-w-5xl bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_40px_rgba(0,0,0,0.4)] rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-plusJakarta text-xl font-extrabold tracking-tighter text-neutral-900 dark:text-white">
          DENVER<span className="text-accent-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-500 flex items-center min-h-[44px] min-w-[44px] px-2 ${
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "text-accent-600 dark:text-accent-400"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
              aria-current={(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-accent-50 dark:bg-accent-950 border border-accent-200 dark:border-accent-900 rounded-full">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent-700 dark:text-accent-300">
              Available for work
            </span>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
