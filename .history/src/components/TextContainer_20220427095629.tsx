import React from "react";

const TextContainer = () => {
  return (
    <div className="textContainer">
      <div className="textContainer-top">
        <span className="text-green-600">Find your clean juice</span>
        <span className="first-letter:text-5xl">2 /4</span>
      </div>
      <div className="textContainer-middle">
        <span>ORANGE</span>
      </div>

      <div className="textContainer-bottom">
        <button>show all the juices</button>
        <p>
          Your healthy <span> life </span> <br /> starts here with us!
        </p>
      </div>
    </div>
  );
};

export default TextContainer;
