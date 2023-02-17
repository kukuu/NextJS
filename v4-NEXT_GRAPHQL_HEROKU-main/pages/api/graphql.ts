import { ApolloServer } from 'apollo-server-micro';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import * as casual from 'casual';
import Cors from 'micro-cors';


export const apolloServer = new ApolloServer({ typeDefs, resolvers });


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
