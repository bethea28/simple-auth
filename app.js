const { ApolloServer, AuthenticationError } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolver');
// const getUser = require('./auth');


const getUser = (token) => {
  if (token !== '1234567890') {
    throw new AuthenticationError('Invalid token');
  }

  const user = {
    id: 1,
    username: 'demouser',
    role: 'admin'
    // role: 'nonadmin'

  }

  return user;
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user token from the headers
    const token = req.headers.token || '';// can name header anything

    // throw error if token is missing
      if (!token) {
        throw new AuthenticationError('Required token is missing');
      }

    // try to retrieve a user with the token
    const user = getUser(token);

    // add the user to the context
    return { user };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
