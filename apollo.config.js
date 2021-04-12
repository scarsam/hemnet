module.exports = {
  client: {
    output: "app/javascript",
    outputFlat: true,
    includes: ["./app/javascript/**/*.ts"],
    tagName: "gql",
    service: {
      name: "HemnetSchema",
      localSchemaFile: "./app/graphql/schema.graphql",
    },
  },
};
