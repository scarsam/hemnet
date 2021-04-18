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
        name: "Buck",
      },
    },
    result: {
      data: {
        dog: { id: "1", name: "Buck", breed: "bulldog" },
      },
    },
  },
];

describe("Components Pre Onboarding One Session Who To Pay Page", () => {
  const render = () => {
    return r(
      <MockedProvider mocks={mocks}>
        <Dashboard />
      </MockedProvider>,
    );
  };

  it("greets the user with their preferred first name", async () => {
    const { getByText } = render();

    await waitFor(() =>
      expect(
        getByText("Welcome to your Gusto account, Sam"),
      ).toBeInTheDocument(),
    );
  });
});
