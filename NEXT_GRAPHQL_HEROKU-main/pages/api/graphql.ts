import { ApolloServer } from 'apollo-server-micro';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import * as casual from 'casual';
import Cors from 'micro-cors';

// const cors = Cors();

// const mocks = {
//   Query: () => ({
//     people: (parent, args, context, info) => {
//       console.log("Args",args);
//       let response = {};
//       response.pageInfo = {
//         hasNextPage: true,
//         endCursor: casual.uuid,
//       };
//       response.edges = [];
//       for (let i = 0; i < 60; i++) {
//         const generatedId = casual.uuid;
//         response.edges.push({
//           cursor: generatedId,
//           node: {
//             id: generatedId,
//             name: casual.name,
//             address: casual.address,
//             email: casual.email,
//             phone: casual.phone,
//           },
//         });
//       }
//       return response;
//     },
//   }),
// };

export const apolloServer = new ApolloServer({ typeDefs, resolvers });

// const apolloServer = new ApolloServer({
//   schema: addMocksToSchema({
//     schema: makeExecutableSchema({ typeDefs, resolvers }),
//     mocks, preserveResolvers: true,
//   }),
// });

const startServer = apolloServer.start();


export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await new Promise(resolve => setTimeout(resolve, 2000));

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};
export const config = {
  api: {
    bodyParser: false,
  },
};
