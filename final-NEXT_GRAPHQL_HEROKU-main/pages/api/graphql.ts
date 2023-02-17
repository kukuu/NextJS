import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';

import Cors from 'micro-cors';
export const apolloServer = new ApolloServer({ typeDefs, resolvers });


const startServer = apolloServer.start();

// Responsible for setting up the CORS headers, HTTP request methods, and the path for the GraphQL endpoint
// Check for CORS
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
  // Intentional delay to simulate a slow response from server, so we can see the loading state

  await new Promise(resolve => setTimeout(resolve, 2000));

  // Responsible for handling the request and response
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};
export const config = {
  api: {
    bodyParser: false,
  },
};
