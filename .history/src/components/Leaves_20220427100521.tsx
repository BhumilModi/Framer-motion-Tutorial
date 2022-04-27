/* eslint-disable @next/next/no-img-element */
import React from "react";

const Leaves = ({ className, imageUrl }) => {
  return (
    <div className={className}>
      <img src={imageUrl} className="leaf"></img>
    </div>
  );
};

export default Leaves;
