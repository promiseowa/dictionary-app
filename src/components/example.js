import React from "react";
import "./example.scss";

const Example = ({ example }) => {
  if (example) {
    return (
      <span className="Example">
        <br></br>
        e.g. <em>{example}</em>
      </span>
    );
  } else {
    return null;
  }
};

export default Example;
