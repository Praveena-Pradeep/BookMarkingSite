// components/Search.js
import React from 'react';

const Search = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search bookmarks"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
