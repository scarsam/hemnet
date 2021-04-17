import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import { MovieSort } from "../globalTypes";

const SearchForm = ({ handleSubmit }) => {
  const handleSearch = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>,
  ) => {
    setSubmitting(false);
    handleSubmit({ ...values, filter: values.filter ? values.filter : null });
  };

  return (
    <div className="px-10 py-8 bg-gray-800 bg-opacity-70">
      <Formik initialValues={{ title: "", filter: "" }} onSubmit={handleSearch}>
        {({ isSubmitting }) => (
          <Form className="flex justify-between">
            <div className="w-2/6 flex">
              <Field
                className="p-2 rounded-md mr-2 w-full"
                type="text"
                name="title"
                placeholder="Search for a movie title"
              />
              <ErrorMessage name="movie" component="div" />
              <Field className="p-2 rounded-md" as="select" name="filter">
                <option value="">- Sort by -</option>
                <option value={MovieSort.releaseDate}>Release date</option>
                <option value={MovieSort.title}>Title</option>
                <option value={MovieSort.votesAverage}>Votes</option>
                <option value={MovieSort.votesCount}>Votes count</option>
              </Field>
              <ErrorMessage name="filter" component="div" />
            </div>
            <button
              className="py-2 px-6 bg-white rounded-full"
              type="submit"
              disabled={isSubmitting}
            >
              Search movie
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
