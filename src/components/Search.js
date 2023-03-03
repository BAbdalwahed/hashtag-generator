import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [ready, setReady] = useState(false);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/search/${searchValue}`
      );
      setSearchResults(response);
      console.log("Search result: ", searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search">
      <h1>#Hashtify</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search for hashtags{}</label>
          <input
            type="text"
            id="search-input"
            name="search-input"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-results">
        {ready && <SearchResults searchResults={searchResults} />}
      </div>
    </div>
  );
};

export default Search;
