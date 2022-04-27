import React from "react";
import Leaves from "./Leaves";

const LeafContainer = () => {
  return (
    <div>
      <Leaves className="leafWrapper-1" imageUrl="./images/leaf01.png" />
      <Leaves className="leafWrapper-2" imageUrl="./images/leaf02.png" />
      <Leaves className="leafWrapper-3" imageUrl="./images/leaf03.png" />
      <Leaves className="leafWrapper-4" imageUrl="./images/leaf04.png" />
      <Leaves className="leafWrapper-5" imageUrl="./images/leaf05.png" />
    </div>
  );
};

export default LeafContainer;
