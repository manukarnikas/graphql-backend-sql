const { gql } = require('apollo-server');

const books = [{
    id:1,
    name: 'Eragon',
    author: 101
}];

const authors = [{
    id:101,
    name: 'Cristopher Paolini'
}]
 
var typeDefs =gql`

 type Author{
     id: Int
     name: String
 }

  type Book{
    id: Int
    name: String
    author: Author
  }

  type Query {
    books: [Book]
  }

  type Mutation {
      addBook(name:String,author:Int): Book
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
 
var resolvers = { 
    Book: {
        author: (parent)=>{
            console.log('-->parent',parent)
            const author = authors.filter(val=>{
                return val.id === parent.author;
           });
           if(!author.length){
                return;
           }
           console.log('author',author);
           return author[0];
        }
    },
    Query: {
        books: () => {
            return books;
        },
    },
    Mutation: {
        addBook: async (args)=>{
            books.push(args);
            return args;
        },
    }
   
};

module.exports = {
    typeDefs,
    resolvers
}