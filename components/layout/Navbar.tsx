"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Logs", href: "/logs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className={`${inter.className} w-full max-w-5xl bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_40px_rgba(0,0,0,0.4)] rounded-full px-6 py-3 flex items-center justify-between`}>

        {/* Wordmark — extrabold for strong brand presence */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          DENVER<span className="text-accent-500">.</span>
        </Link>

        {/* Nav links — medium weight, clean spacing */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium tracking-normal transition-colors hover:text-accent-500 flex items-center min-h-[44px] min-w-[44px] px-2 ${(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                ? "text-accent-600 dark:text-accent-400"
                : "text-gray-700 dark:text-gray-400"
                }`}
              aria-current={(link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Badge + Theme Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              INTERN @ MIH
            </span>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};