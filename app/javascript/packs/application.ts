// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { Test } from "./__generated__/Test";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "stylesheets/application";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

const railsCsrfToken = document
  .querySelector("meta[name=csrf-token]")
  ?.getAttribute("content");

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
    headers: {
      "X-CSRF-Token": railsCsrfToken,
    },
  }),
});

const GET_TEST = gql`
  query Test {
    testField
  }
`;

client
  .query<Test>({ query: GET_TEST })
  .then((result) => console.log("GraphQL result: ", result.data));
