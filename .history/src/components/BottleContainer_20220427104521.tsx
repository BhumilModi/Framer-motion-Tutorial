import { motion } from "framer-motion";
import React from "react";
import { bottle } from "variants";

const BottleContainer = () => {
  return (
    <motion.div
    motion.div variants={bottle} initial="initial" animate="animate" className="bottleWrapper"
    >
      <img src="/images/juice.png" className="bottle" alt="bottle" />
    </motion.div>
  );
};

export default BottleContainer;
