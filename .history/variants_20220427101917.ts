import { Variants } from "framer-motion";

export const fadeIn = () : Variants = {
  return (
      initial: {
    y: 40,
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
  )
};


