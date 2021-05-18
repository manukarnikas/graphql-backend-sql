var { buildSchema } = require('graphql');

const books = [{
    id:1,
    name: 'Eragon',
    author: 1
}];

const authors = [{
    id:101,
    author: 'Cristopher Paolini'
}]
 
var schema = buildSchema(`

 type Author{
     id: Int
     author: String
 }

  type Book{
    id: Int
    name: String
    author: Author
  }

  type Query {
    getAuthor(id:Int): Author
    getBook: Book
    getBooks: [Book]
  }

  type Mutation {
      addBook(name:String,author:Int): Book
  }
`);
 
var resolvers = { 
    //Query
    getAuthor:(parent,args)=>{
        return authors.filter(val=>val.id==parent.id);
    },
    getBook: (args)=>{
        return books.filter(val=> val.id==args.id);
    },
    getBooks: () => {
        return books;
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