import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      <div className="textContainer-top">
        <motion.span
          variants={fadeIn()}
          initial="initial"
          animate="animate"
          className="text-green-600"
        >
          Find your clean juice
        </motion.span>
        <motion.span
          variants={fadeIn()}
          initial="initial"
          animate="animate"
          className="first-letter:text-5xl"
        >
          2 /4
        </motion.span>
      </div>
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="textContainer-middle"
      >
        <span>ORANGE</span>
      </motion.div>

      <div className="textContainer-bottom">
        <button>show all the juices</button>
        <p>
          Your healthy <span> life </span> <br /> starts here with us!
        </p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
