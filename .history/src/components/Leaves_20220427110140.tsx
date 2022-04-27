/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { jiggle, leaves } from "variants";
const Leaves = ({ className, imageUrl }) => {
  return (
    <motion.div variants={leaves} className={className}>
      <motion.img variants={jiggle} src={imageUrl} className="leaf"></img>
    </motion.div>
  );
};

export default Leaves;
