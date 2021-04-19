import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const railsCsrfToken = document
  .querySelector("meta[name=csrf-token]")
  ?.getAttribute("content");

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GRAPHQL_API_URL,
    headers: {
      "X-CSRF-Token": railsCsrfToken,
    },
  }),
});
