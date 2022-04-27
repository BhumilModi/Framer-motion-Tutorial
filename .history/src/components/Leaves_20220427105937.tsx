/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
const Leaves = ({ className, imageUrl }) => {
  return (
    <motion.div variants={leaves} className={className}>
      <img src={imageUrl} className="leaf"></img>
    </motion.div>
  );
};

export default Leaves;
