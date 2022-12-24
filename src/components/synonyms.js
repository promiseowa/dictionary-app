import React from "react";
import "./Synonyms.scss";

const Synonyms = ({ synonyms }) => {
  if (synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <p>
          <em> Synonyms</em>
        </p>
        <ul>
          {synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
