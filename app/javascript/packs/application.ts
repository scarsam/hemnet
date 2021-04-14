// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import { Test } from "./__generated__/Test";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "stylesheets/application";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// client
//   .query<Test>({ query: GET_TEST })
//   .then((result) => console.log("GraphQL result: ", result.data));
