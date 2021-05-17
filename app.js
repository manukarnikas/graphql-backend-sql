const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/Schema');
const bodyparser = require('body-parser');
 
const app = express();

app.use(bodyparser.json());

app.use('/graphql', graphqlHTTP({
  schema: schema.schema,
  rootValue: schema.resolvers,
  graphiql: true,
}));

app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));