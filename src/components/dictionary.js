import React, { useState } from "react";
import "./dictionary.scss";
import axios from "axios";
import Results from "./results";
import PropagateLoader from "react-spinners/PropagateLoader";
import Photos from "./photos";
import { VscBook } from "react-icons/vsc";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("joy");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const showResults = (response) => {
    setResults(response.data[0]);
  };

  const showPhotos = (response) => {
    setPhotos(response.data.photos);
  };

  const search = () => {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResults);

    const pexelsApiKey =
      "563492ad6f91700001000001579827e1eb25453b9fe5dea983833ce7";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(showPhotos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const updateKeyword = (event) => {
    setKeyword(event.target.value);
  };
  const form = (
    <header className="App-header">
      <div className="container">
        <div className="welcomeWords>"
          <h1>
            <VscBook />
            Open Dictionary
          </h1>
          <h2>Go On...look up any word</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={updateKeyword}
            placeholder="Write a word"
          />
          <button>Search</button>
        </form>
        <p>
          <small>e.g. sunrise, wine, yoga, coding</small>
        </p>
      </div>
    </header>
  );

  if (results !== null) {
    return (
      <div className="Dictionary">
        {form}
        <div className="container">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading">
        <PropagateLoader color="#11b3d7" />
      </div>
    );
  }
};

export default Dictionary;
