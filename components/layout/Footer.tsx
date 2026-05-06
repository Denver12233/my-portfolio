import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <TooltipProvider>
      <footer className="border-t border-neutral-100 dark:border-zinc-800">
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-plusJakarta font-bold text-2xl tracking-tight text-neutral-900 dark:text-white">
                  Denver<span className="text-accent-600">.</span>
                </h3>
                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                  Developer intern at MakerSpace InnovHub, building full-stack web systems across Sillag and PromptGraph.
                </p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Navigation
              </span>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  Home
                </Link>
                <Link href="/work" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  Work
                </Link>
                <Link href="/logs" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  Logs
                </Link>
              </div>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Contact
              </span>
              <div className="flex flex-col gap-3">
                <a href="mailto:tandingandenverm@gmail.com" className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  <Tooltip content="Email">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </Tooltip>
                  <span>tandingandenverm@gmail.com</span>
                </a>
                <a href="https://github.com/Denver12233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  <Tooltip content="GitHub">
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </Tooltip>
                  <span>github.com/Denver12233</span>
                </a>
                <a href="https://www.linkedin.com/in/tandingan-denver-m-374910392/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent-600 transition-colors">
                  <Tooltip content="LinkedIn">
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </Tooltip>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200 dark:border-zinc-800 flex justify-center items-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              © {currentYear} Denver Tandingan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </TooltipProvider>
  );
};
