import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import Container from "../layouts/Container";
import { Search, SearchVariables } from "./__generated__/Search";
import { discoverTrending } from "./__generated__/discoverTrending";

export const SEARCH_QUERY = gql`
  query Search($title: String!, $page: Int, $filter: MovieSort) {
    searchMovieBy(title: $title, page: $page, filter: $filter) {
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

export const TRENDING_QUERY = gql`
  query discoverTrending {
    trendingMovies {
      movies {
        backdropPath
        posterPath
        title
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
  const [trendingMovie, setTrendingMovie] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState({ title: "", filter: null });

  const {
    loading: trendingLoading,
    error: trendingError,
    data: trendingData,
  } = useQuery<discoverTrending>(TRENDING_QUERY);

  const { loading, error, data } = useQuery<Search, SearchVariables>(
    SEARCH_QUERY,
    {
      variables: { page: currentPage, ...searchQuery },
      skip: searchQuery.title === "",
    },
  );

  if (error || trendingError)
    return <ErrorMessage error={error || trendingError} />;

  const buildMoviePath = (path) => {
    return `${path?.trendingMovies?.config?.baseUrl}/${path?.trendingMovies?.config?.backdropSizes[2]}/${path?.trendingMovies?.movies[0]?.backdropPath}`;
  };

  return (
    <div
      className={`py-5 px-2 h-full bg-no-repeat bg-cover bg-opacity-50 relative ${
        trendingMovie ? "hero-bg" : "hero-bg hero-bg-animation"
      }`}
      style={{
        backgroundImage: `url(${buildMoviePath(trendingData)})`,
      }}
    >
      <Container>
        <SearchForm
          handleSubmit={setSearchQuery}
          handleTrendingMovie={setTrendingMovie}
        />
      </Container>

      {loading || trendingLoading ? (
        <Loading />
      ) : (
        <Container>
          {data?.searchMovieBy?.totalResults && (
            <p className="text-white text-xl">
              Results ({data?.searchMovieBy?.totalResults})
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.searchMovieBy?.movies.map((movie) => (
              <Card
                key={movie.id}
                config={data?.searchMovieBy?.config}
                movie={movie}
              />
            ))}
          </div>
        </Container>
      )}
      {data?.searchMovieBy?.totalResults && (
        <Pagination
          currentPage={currentPage}
          totalPages={data?.searchMovieBy?.totalResults}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;

// Tests for GraphQL (Queries and filtering response)
// More client side tests
// Error handling both server and client side
