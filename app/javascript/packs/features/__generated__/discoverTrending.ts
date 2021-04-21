/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: discoverTrending
// ====================================================

export interface discoverTrending_trendingMovies_movies {
  __typename: "Movie";
  backdropPath: string | null;
  posterPath: string | null;
  title: string | null;
}

export interface discoverTrending_trendingMovies_config {
  __typename: "Config";
  baseUrl: string | null;
  posterSizes: string[] | null;
  backdropSizes: string[] | null;
}

export interface discoverTrending_trendingMovies {
  __typename: "SearchResult";
  movies: discoverTrending_trendingMovies_movies[];
  config: discoverTrending_trendingMovies_config;
}

export interface discoverTrending {
  trendingMovies: discoverTrending_trendingMovies;
}
