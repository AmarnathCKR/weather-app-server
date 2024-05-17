const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const WeatherModel = require("./models/watherSchema");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();

mongoose.connect("mongodb://localhost/weather-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
    await server.start();
    server.applyMiddleware({ app });
})();

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});