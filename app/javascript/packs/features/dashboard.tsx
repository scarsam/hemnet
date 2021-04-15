import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import { Search, SearchVariables } from "./__generated__/Search";

const SEARCH_QUERY = gql`
  query Search($title: String!, $page: Int) {
    searchMovieBy(title: $title, page: $page) {
      totalPages
      totalResults
      page
      movies {
        backdropPath
        id
        overview
        posterPath
        releaseDate
        title
        voteAverage
        voteCount
      }
      config {
        baseUrl
        posterSizes
        backdropSizes
      }
    }
  }
`;

const Dashboard = () => {
  const [submitValue, setSubmitValue] = useState("");

  const { loading, error, data } = useQuery<Search, SearchVariables>(
    SEARCH_QUERY,
    {
      variables: { title: submitValue },
      skip: submitValue === "",
    },
  );

  if (error) return <p>Error! ${error.message}</p>;

  // const { movies, totalResults } = data?.searchMovieBy;

  console.log(data?.searchMovieBy?.movies);
  return (
    <div className="bg-gray-900">
      <SearchForm handleSubmit={setSubmitValue} />
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div className="container m-auto">
          {data?.searchMovieBy?.totalResults && (
            <p>Results ({data?.searchMovieBy?.totalResults})</p>
          )}
          <div className="grid grid-cols-3 gap-4">
            {data?.searchMovieBy?.movies.map((movie) => (
              <Card
                key={movie.id}
                config={data?.searchMovieBy?.config}
                movie={movie}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
