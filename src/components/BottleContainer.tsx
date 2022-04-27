import { motion } from "framer-motion";
import React from "react";
import { bottle, bottlebounce } from "variants";

const BottleContainer = () => {
  return (
    <motion.div
      variants={bottle}
      initial="initial"
      animate="animate"
      className="bottleWrapper"
    >
      <motion.img
        variants={bottlebounce}
        src="/images/juice.png"
        className="bottle"
        alt="bottle"
      />
    </motion.div>
  );
};

export default BottleContainer;
