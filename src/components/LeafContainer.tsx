import { motion } from "framer-motion";
import React from "react";
import { allLeaves } from "variants";
import Leaves from "./Leaves";

const LeafContainer = () => {
  return (
    <motion.div variants={allLeaves} initial="initial" animate="animate">
      <Leaves
        animate={1.8}
        className="leafWrapper-1"
        imageUrl="./images/leaf01.png"
      />
      <Leaves
        animate={1.6}
        className="leafWrapper-2"
        imageUrl="./images/leaf02.png"
      />
      <Leaves
        animate={1.3}
        className="leafWrapper-3"
        imageUrl="./images/leaf03.png"
      />
      <Leaves
        animate={1.7}
        className="leafWrapper-4"
        imageUrl="./images/leaf04.png"
      />
      <Leaves
        animate={1.4}
        className="leafWrapper-5"
        imageUrl="./images/leaf05.png"
      />
    </motion.div>
  );
};

export default LeafContainer;
