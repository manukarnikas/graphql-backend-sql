const express = require('express');
const { ApolloServer } = require('apollo-server');
const {typeDefs,resolvers} = require('./schema/Schema');


const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(() => {
    console.log(`🚀  Server ready at PORT 4000...`);
  });