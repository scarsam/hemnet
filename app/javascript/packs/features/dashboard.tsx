import React, { useState, useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [submitValue, setSubmitValue] = useState("");
  console.log(currentPage);
  const { loading, error, data } = useQuery<Search, SearchVariables>(
    SEARCH_QUERY,
    {
      variables: { title: submitValue, page: currentPage },
      skip: submitValue === "",
    },
  );

  if (error) return <p>Error! ${error.message}</p>;

  return (
    <div className="py-5">
      <div className="container m-auto">
        <SearchForm handleSubmit={setSubmitValue} />
      </div>

      {loading ? (
        <p>Loading..</p>
      ) : (
        <div className="container m-auto py-10">
          {data?.searchMovieBy?.totalResults && (
            <p className="text-white text-xl">
              Results ({data?.searchMovieBy?.totalResults})
            </p>
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
      {data?.searchMovieBy?.totalResults && (
        <Pagination
          totalPages={data?.searchMovieBy?.totalResults}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;
