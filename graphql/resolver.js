const books = require('../data');

const resolvers = {
  Query: {
    books: (_, args, { user }) => {
      if (user && user.role !== 'admin') {
        throw new Error('Not Authorized');
      }

      return books
    }
  },
  Mutation: {
    signUp:(_, args, context)=>{
      console.log('mutations', args.name)
      // console.log('args',args.passWord)
      // console.log('datat',data)
      // return `${args.name} ${args.passWord}`
      return {
        name:args.name,
        passWord:args.passWord,
        role: args.role
      }
    }
  }
};
// https://javascript.plainenglish.io/simple-authentication-and-authorization-in-graphql-5293c0458fc
module.exports = resolvers;