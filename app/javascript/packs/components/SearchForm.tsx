import React, { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit(searchValue);
  };

  return (
    <form className="p-10 bg-red-400" onSubmit={handleSearch}>
      <input
        placeholder="Search for a movie"
        type="text"
        name="search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
