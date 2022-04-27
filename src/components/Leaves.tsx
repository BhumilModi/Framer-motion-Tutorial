/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { jiggle, leaves } from "variants";
const Leaves = ({ className, imageUrl, animate }) => {
  return (
    <motion.div variants={leaves} className={className}>
      <motion.img
        custom={animate}
        variants={jiggle}
        src={imageUrl}
        className="leaf"
      />
    </motion.div>
  );
};

export default Leaves;
