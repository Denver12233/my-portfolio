"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { motion, useReducedMotion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  getSlideLeftVariant,
  getSlideRightVariant,
  getFadeUpVariantWithDelay,
  getFadeUpVariant
} from "@/lib/animations";

const PROFILE_IMAGES = [
  "/profile.jpg",
  "/profile2.jpg",
];

const crossfadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, shouldReduceMotion]);

  return (
    <section className="relative pt-24 pb-20 overflow-x-clip">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent-100/15 to-transparent rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">

          {/* LEFT — Text Content */}
          <div className="flex-1 min-w-0 text-center md:text-left overflow-hidden">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariant(shouldReduceMotion)}
              className="text-[11px] font-black uppercase tracking-[0.35em] text-accent-600 dark:text-accent-400 mb-5 block"
            >
              Internship Portfolio 2026
            </motion.span>

            <h1 className="font-plusJakarta font-extrabold tracking-[-0.04em] mb-5 leading-none flex flex-col md:block">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={getSlideLeftVariant(shouldReduceMotion)}
                className="text-[clamp(3.2rem,9vw,5.8rem)] leading-[0.92] block text-neutral-900 dark:text-white"
              >
                Denver
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={getSlideRightVariant(shouldReduceMotion)}
                className="text-[clamp(2.3rem,6.5vw,4.2rem)] leading-[0.95] block text-accent-500"
              >
                Tandingan.
              </motion.span>
            </h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.2)}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-zinc-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-zinc-700">
                Developer
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-950 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800">
                Intern @ MIH
              </span>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.3)}
              className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed"
            >
              Building real-world web experiences through clean code and intentional design.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.4)}
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <Button href="/work">
                View Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
              <Button href="/logs" variant="outline">
                Read Logs
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.5)}
              className="flex gap-10 justify-center md:justify-start mt-10 pt-8 border-t border-neutral-100 dark:border-zinc-800"
            >
              <div>
                <div className="text-2xl font-plusJakarta font-bold text-neutral-900 dark:text-white">4+</div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-plusJakarta font-bold text-neutral-900 dark:text-white">10+</div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-plusJakarta font-bold text-neutral-900 dark:text-white">5+</div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">Technologies</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Profile Photo Carousel */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.6)}
            className="shrink-0 w-full md:w-[280px] flex justify-center mt-8 md:mt-0"
          >
            <div
              className="relative w-full max-w-[280px] h-[340px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Accent gradient behind photo */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-accent-400/20 to-accent-600/5 rotate-3 scale-[1.02] -z-10" />

              {/* Photo Container: strict sizing limits CLS to 0 */}
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-xl ring-1 ring-neutral-200 dark:ring-zinc-700 relative bg-neutral-100 dark:bg-zinc-800">
                
                {/* 5. mode="wait" ensures safe DOM transitions. Fallback instantly switches if prefers-reduced-motion */}
                <AnimatePresence mode="wait">
                  {!shouldReduceMotion ? (
                    <motion.div
                      key={currentIndex % PROFILE_IMAGES.length}
                      variants={crossfadeVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      {/* Fixed sizing with object-fit guarantees 0 layout shifts */}
                      <Image
                        src={PROFILE_IMAGES[currentIndex % PROFILE_IMAGES.length] || PROFILE_IMAGES[0]}
                        alt={`Profile photo ${(currentIndex % PROFILE_IMAGES.length) + 1}`}
                        fill
                        className="object-cover object-top grayscale-[15%] brightness-[1.03]"
                        priority={currentIndex % PROFILE_IMAGES.length === 0}
                      />
                    </motion.div>
                  ) : (
                    <div key={currentIndex % PROFILE_IMAGES.length} className="absolute inset-0">
                      <Image
                        src={PROFILE_IMAGES[currentIndex % PROFILE_IMAGES.length] || PROFILE_IMAGES[0]}
                        alt={`Profile photo ${(currentIndex % PROFILE_IMAGES.length) + 1}`}
                        fill
                        className="object-cover object-top grayscale-[15%] brightness-[1.03]"
                        priority={currentIndex % PROFILE_IMAGES.length === 0}
                      />
                    </div>
                  )}
                </AnimatePresence>

                {/* Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {PROFILE_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === (currentIndex % PROFILE_IMAGES.length) ? "bg-accent-500" : "bg-white/50 hover:bg-white/90"
                        }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-3 z-20 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-700 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse flex-shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                  Open to work
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};