import React from "react";
import { render as r, waitFor, fireEvent, act } from "@testing-library/react";
import Dashboard, {
  SEARCH_QUERY,
} from "../../app/javascript/packs/features/dashboard";
import { MockedProvider } from "@apollo/client/testing";

jest.mock("../../app/javascript/packs/icons/star.svg", () => <p>image</p>);

const mocks = [
  {
    request: {
      query: SEARCH_QUERY,
      variables: {
        title: "dark",
        page: 1,
        filter: "title",
      },
    },
    result: {
      data: {
        searchMovieBy: {
          totalPages: 5,
          totalResults: 10,
          page: 1,
          __typename: "SearchResult",
          movies: [
            {
              __typename: "Movie",
              backdropPath: "image/path",
              id: 1,
              overview: "this is the overview text",
              posterPath: "poster path",
              releaseDate: "12-12-12",
              title: "Dark",
              voteAverage: 5,
              voteCount: 20,
            },
            {
              __typename: "Movie",
              backdropPath: "image/path",
              id: 2,
              overview: "this is the overview text",
              posterPath: "poster path",
              releaseDate: "12-12-12",
              title: "Zark",
              voteAverage: 2,
              voteCount: 15,
            },
          ],
          config: {
            baseUrl: "image/path",
            posterSizes: ["size1", "size2"],
            backdropSizes: ["size1", "size2"],
            __typename: "Config",
          },
        },
      },
    },
  },
];

describe("Movie Dashboard", () => {
  const render = () => {
    return r(
      <MockedProvider mocks={mocks}>
        <Dashboard />
      </MockedProvider>,
    );
  };

  it("searches for movies", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render();

    const searchInput = getByPlaceholderText("Search for a movie title");
    const searchFilter = getByTestId("filter");
    const searchButton = getByText("Search movie");

    fireEvent.change(searchInput, {
      target: { value: "dark" },
    });
    fireEvent.change(searchFilter, {
      target: { value: "title" },
    });

    act(() => {
      searchButton.click();
    });

    await waitFor(() => {
      expect(getByText("Results (10)")).toBeInTheDocument();
    });
  });
});
