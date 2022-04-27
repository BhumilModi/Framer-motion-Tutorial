import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },
};
