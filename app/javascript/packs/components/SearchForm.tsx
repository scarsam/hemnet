import React, { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit(searchValue);
  };

  return (
    <form className="px-10 py-8 bg-gray-800" onSubmit={handleSearch}>
      <input
        className="p-2"
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
