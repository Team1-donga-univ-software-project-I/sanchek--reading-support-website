module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "sanchek-backend",
      url: "http://localhost:4000/graphql",
    },
  },
};
