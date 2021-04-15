/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_searchMovieBy_movies {
  __typename: "Movie";
  backdropPath: string | null;
  id: number | null;
  overview: string | null;
  posterPath: string | null;
  releaseDate: string | null;
  title: string | null;
  voteAverage: number | null;
  voteCount: number | null;
}

export interface Search_searchMovieBy_config {
  __typename: "Config";
  baseUrl: string | null;
  posterSizes: string[] | null;
  backdropSizes: string[] | null;
}

export interface Search_searchMovieBy {
  __typename: "SearchResult";
  totalPages: number;
  totalResults: number;
  page: number;
  movies: Search_searchMovieBy_movies[];
  config: Search_searchMovieBy_config;
}

export interface Search {
  searchMovieBy: Search_searchMovieBy;
}

export interface SearchVariables {
  title: string;
  page?: number | null;
}
