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
  title: Yup.string().required(),
  filter: Yup.string()
    .oneOf([
      MovieSort.releaseDate,
      MovieSort.title,
      MovieSort.votesAverage,
      MovieSort.votesCount,
    ])
    .required(),
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
    <div className="px-10 py-8 bg-gray-800 bg-opacity-70">
      <Formik
        validationSchema={SearchSchema}
        initialValues={{ title: "", filter: "" }}
        onSubmit={handleSearch}
      >
        {({ isSubmitting, isValid, errors, touched }) => (
          <Form className="flex justify-between flex-col sm:flex-row">
            <div className="md:w-6/12 flex mb-2 sm:mb-0">
              <Field
                className={`${
                  errors?.title && touched.title
                    ? "border-red-500 border"
                    : "border-gray-700 border"
                } p-2 rounded-md mr-2 w-full`}
                type="text"
                name="title"
                placeholder="Search for a movie title"
              />
              <Field
                className={`${
                  errors?.filter && touched.filter
                    ? "border-red-500 border"
                    : "border-gray-700 border"
                } p-2 rounded-md`}
                as="select"
                name="filter"
              >
                <option value="">- Sort by -</option>
                <option value={MovieSort.releaseDate}>Release date</option>
                <option value={MovieSort.title}>Title</option>
                <option value={MovieSort.votesAverage}>Votes</option>
                <option value={MovieSort.votesCount}>Votes count</option>
              </Field>
            </div>
            <button
              className="py-2 px-6 bg-white rounded-full disabled:opacity-50 "
              type="submit"
              disabled={!isValid || isSubmitting}
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
