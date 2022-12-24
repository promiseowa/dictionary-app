import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.scss";

const Results = ({ results }) => {
  if (results) {
    return (
      <div className="Results">
        <div className="box-results">
          <h3>{results.word}</h3>
          {results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
