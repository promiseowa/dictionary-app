import React from "react";
import Example from "./Example";
import "./Meaning.scss";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

const Meaning = ({ meaning }) => {
  return (
    <div className="Meaning">
      <h4>{meaning.partOfSpeech}</h4>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              {definition.definition}
              <Example example={definition.example} />
            </p>
          </div>
        );
      })}

      <Synonyms synonyms={meaning.synonyms} />
      <Antonyms antonyms={meaning.antonyms} />
    </div>
  );
};

export default Meaning;
