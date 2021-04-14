import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Search, SearchVariables } from "./__generated__/Search";

const SEARCH_QUERY = gql`
  query Search($title: String!) {
    searchMovieBy(title: $title) {
      response
      totalResults
      movies {
        Title
        Runtime
        BoxOffice
        imdbRating
      }
    }
  }
`;

const Dashboard = () => {
  const [submitValue, setSubmitValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { loading, error, data } = useQuery<Search, SearchVariables>(
    SEARCH_QUERY,
    {
      variables: { title: submitValue },
      skip: submitValue === "",
    },
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitValue(searchValue);
  };

  if (error) return <p>Error! ${error.message}</p>;

  return (
    <>
      <form className="p-10 bg-red-400" onSubmit={handleSearch}>
        <input
          placeholder="Search for a movie"
          type="text"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? <p>Loading..</p> : JSON.stringify(data, null, 2)}
    </>
  );
};

export default Dashboard;
