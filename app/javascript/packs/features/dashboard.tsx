import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Test } from "../__generated__/Test";

const GET_TEST = gql`
  query Test {
    testField
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery<Test>(GET_TEST);

  if (loading) return <p>Loading...</p>;

  return <p className="p-10">Hello there {data.testField}</p>;
};

export default Dashboard;
