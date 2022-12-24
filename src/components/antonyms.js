import React from "react";
import "./antonyms.scss";

const Antonyms = ({ antonyms }) => {
  if (antonyms.length !== 0) {
    return (
      <div className="Antonyms">
        <p>
          <em>Antonyms</em>
        </p>
        <ul>
          {antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Antonyms;
