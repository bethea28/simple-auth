const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type userData {
    name: String
    passWord: String
    role: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    signUp(name: String, passWord: String, role: String): userData
  }
`;

module.exports = typeDefs;