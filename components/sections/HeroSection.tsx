"use client";

import Image from "next/image";
import { Button } from "../atoms/Button";
import { motion, useReducedMotion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  getSlideLeftVariant,
  getSlideRightVariant,
  getFadeUpVariantWithDelay,
  getFadeUpVariant
} from "@/lib/animations";
import { HeroData } from "@/data/hero";

const crossfadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, shouldReduceMotion, data.images.length]);

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
              {data.label}
            </motion.span>

            <h1 className="font-plusJakarta font-extrabold tracking-[-0.04em] mb-5 leading-none flex flex-col md:block">
              <span className="text-[clamp(3.2rem,9vw,5.8rem)] leading-[0.92] block text-neutral-900 dark:text-white">
                {data.firstName}
              </span>
              <span className="text-[clamp(2.3rem,6.5vw,4.2rem)] leading-[0.95] block text-accent-500">
                {data.lastName}
              </span>
            </h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={getFadeUpVariantWithDelay(shouldReduceMotion, 0.2)}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6"
            >
              {data.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                    badge.variant === "accent"
                      ? "bg-accent-50 dark:bg-accent-950 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-800"
                      : "bg-neutral-100 dark:bg-zinc-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-zinc-700"
                  }`}
                >
                  {badge.text}
                </span>
              ))}
            </motion.div>

            <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
              {data.subtitle}
            </p>

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
              {data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-plusJakarta font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile Photo Carousel */}
          <motion.div
            initial={false}
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

              {/* Photo Container */}
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-xl ring-1 ring-neutral-200 dark:ring-zinc-700 relative bg-neutral-100 dark:bg-zinc-800">
                
                <AnimatePresence mode="wait">
                  {!shouldReduceMotion ? (
                    <motion.div
                      key={currentIndex % data.images.length}
                      variants={crossfadeVariants}
                      initial={currentIndex === 0 ? false : "hidden"}
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <motion.div
                        className="relative w-full h-full"
                        animate={{ 
                          scale: isHovered ? 1.02 : 1.05 
                        }}
                        transition={{ 
                          duration: 3.5, 
                          ease: "linear" 
                        }}
                      >
                        <Image
                          src={data.images[currentIndex % data.images.length] || data.images[0]}
                          alt={`Profile photo ${(currentIndex % data.images.length) + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top grayscale-[15%] brightness-[1.03]"
                          priority={currentIndex % data.images.length === 0}
                          fetchPriority={currentIndex % data.images.length === 0 ? "high" : "auto"}
                        />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <div key={currentIndex % data.images.length} className="relative w-full h-full">
                      <Image
                        src={data.images[currentIndex % data.images.length] || data.images[0]}
                        alt={`Profile photo ${(currentIndex % data.images.length) + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top grayscale-[15%] brightness-[1.03]"
                        priority={currentIndex % data.images.length === 0}
                        fetchPriority={currentIndex % data.images.length === 0 ? "high" : "auto"}
                      />
                    </div>
                  )}
                </AnimatePresence>

                {/* Indicators with progress bar */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                  {data.images.map((_, idx) => {
                    const isActive = idx === (currentIndex % data.images.length);
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className="relative w-8 h-1 rounded-full bg-white/30 overflow-hidden"
                        aria-label={`Go to image ${idx + 1}`}
                      >
                        {isActive && (
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={isHovered ? {} : { width: "100%" }}
                            transition={{ 
                              duration: 3.5, 
                              ease: "linear" 
                            }}
                            className="h-full bg-accent-500"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};