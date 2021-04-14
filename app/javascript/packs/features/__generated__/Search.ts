/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_searchMovieBy_movies {
  __typename: "Movie";
  Title: string | null;
  Runtime: string | null;
  BoxOffice: string | null;
  imdbRating: string | null;
}

export interface Search_searchMovieBy {
  __typename: "SearchResult";
  response: string;
  totalResults: string;
  movies: Search_searchMovieBy_movies[];
}

export interface Search {
  searchMovieBy: Search_searchMovieBy;
}

export interface SearchVariables {
  title: string;
}
