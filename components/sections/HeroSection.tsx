import Image from "next/image";
import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-accent-600 dark:text-accent-400 mb-6 block">
            Internship Portfolio 2025
          </span>
          <h1 className="text-6xl md:text-8xl font-syne font-extrabold leading-[0.9] tracking-tighter mb-8 text-neutral-900 dark:text-white">
            Denver <br />
            <span className="text-accent-600 dark:text-accent-400">Tandingan.</span>
          </h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-300 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Crafting premium digital experiences through minimal design and performant code. Frontend intern @ TechStream.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button href="/work">
              View Work
              {/* Arrow right inline SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
            <Button href="/logs" variant="outline">
              Read Logs
            </Button>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
          <div className="absolute inset-0 bg-accent-500 rounded-3xl rotate-6 -z-10 opacity-20" />
          <div className="absolute inset-0 border-2 border-neutral-200 dark:border-neutral-700 rounded-3xl -rotate-3 -z-10" />
          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Denver Tandingan — Frontend Developer & UI/UX Designer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
