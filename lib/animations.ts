import { Variants } from "framer-motion";

export const getFadeUpVariant = (reducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
});

export const getFadeUpVariantWithDelay = (reducedMotion: boolean | null, delay: number): Variants => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay } 
  }
});

export const getFadeVariant = (): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
});

export const getStaggerContainer = (): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
});

export const getStaggerItem = (reducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
});

export const getSlideLeftVariant = (reducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, x: reducedMotion ? 0 : -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
});

export const getSlideRightVariant = (reducedMotion: boolean | null): Variants => ({
  hidden: { opacity: 0, x: reducedMotion ? 0 : 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
});
