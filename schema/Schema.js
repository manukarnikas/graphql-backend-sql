var { buildSchema } = require('graphql');

const books = [{
    name: 'Eragon',
    author: 'Christopher Paolini'
}]
 
var schema = buildSchema(`
  type Book{
    name: String
    author: String
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
      addBook(name:String,author:String): Book
  }
`);
 
var resolvers = { 
    //Query
    getBooks: async () => {
        return await books;
    },
    // Mutation
    addBook: async (args)=>{
        console.log('add book args',args)
        books.push(args);
        return args;
    }
};

module.exports = {
    schema,
    resolvers
}