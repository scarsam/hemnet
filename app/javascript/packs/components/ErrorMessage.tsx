import React from "react";
import { ApolloError } from "@apollo/client/core";

const ErrorMessage: React.VFC<{ error: ApolloError }> = ({ error }) => {
  const message = error?.message;
  return <p className="text-white text-2xl text-center">Error! ${message}</p>;
};

export default ErrorMessage;
