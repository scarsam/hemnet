import { MovieSort } from "../globalTypes";

import * as Yup from "yup";

export const SearchSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[a-zA-Z0-9 ]+$/, "Please enter valid title")
    .required("Please enter a movie title"),
  filter: Yup.string()
    .oneOf([
      MovieSort.releaseDate,
      MovieSort.title,
      MovieSort.votesAverage,
      MovieSort.votesCount,
    ])
    .required("Please select a filter"),
});
