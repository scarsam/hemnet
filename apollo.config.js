module.exports = {
  client: {
    output: "app/javascript",
    outputFlat: true,
    includes: ["./app/javascript/**/*.ts", "./app/javascript/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "HemnetSchema",
      localSchemaFile: "./app/graphql/schema.graphql",
    },
  },
};
