import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const railsCsrfToken = document
  .querySelector("meta[name=csrf-token]")
  ?.getAttribute("content");

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
    headers: {
      "X-CSRF-Token": railsCsrfToken,
    },
  }),
});
