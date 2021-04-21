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
import * as Yup from "yup";

interface ISearchForm {
  handleSubmit: (args: {}) => void;
}

const SearchSchema = Yup.object().shape({
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

const SearchForm: React.FC<ISearchForm> = ({ handleSubmit }) => {
  const handleSearch = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>,
  ) => {
    setSubmitting(false);
    handleSubmit({ ...values, filter: values.filter ? values.filter : null });
  };

  return (
    <div className="px-10 py-10 bg-gray-700 bg-opacity-70 rounded-md shadow-md border border-gray-800">
      <Formik
        validationSchema={SearchSchema}
        initialValues={{ title: "", filter: "" }}
        onSubmit={handleSearch}
      >
        {({ isSubmitting, isValid, errors, touched, dirty }) => (
          <Form className="flex justify-between flex-col sm:flex-row">
            <div className="md:w-6/12 flex mb-2 sm:mb-0">
              <span className="relative w-full mr-2">
                <Field
                  className={`${
                    errors?.title && touched.title
                      ? "border-red-500 border"
                      : "border-gray-700 border"
                  } p-2 rounded-md w-full`}
                  type="text"
                  name="title"
                  placeholder="Search for a movie title"
                />
                <div className="absolute text-sm text-red-500 pt-1 -top-7 md:top-auto">
                  <ErrorMessage name="title" />
                </div>
              </span>
              <span className="relative w-full mr-2">
                <Field
                  className={`${
                    errors?.filter && touched.filter
                      ? "border-red-500 border"
                      : "border-gray-700 border"
                  } p-2 rounded-md w-full h-full`}
                  as="select"
                  name="filter"
                  data-testid="filter"
                >
                  <option value="">- Sort by -</option>
                  <option value={MovieSort.releaseDate}>Release date</option>
                  <option value={MovieSort.title}>Title</option>
                  <option value={MovieSort.votesAverage}>Score</option>
                  <option value={MovieSort.votesCount}>Votes count</option>
                </Field>
                <div className="absolute text-sm text-red-500 pt-1 -top-7 md:top-auto">
                  <ErrorMessage name="filter" />
                </div>
              </span>
            </div>
            <button
              className="py-2 px-6 bg-white rounded-full disabled:opacity-50 "
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
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
