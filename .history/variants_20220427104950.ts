import { animate, Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const bottle: Variants = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,

    transition: {
      duration: 0.6,
      type: "spring",
      delay: 3,
    },
  },
};
export const bottlebounce: Variants = {
  initial: {},
  animate: {
    y: [40, 5, 40],

    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
