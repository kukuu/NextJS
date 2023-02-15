import { gql } from "@apollo/client";
import { ApolloServer } from 'apollo-server-micro';
 import { typeDefs } from '../graphql/schema';
import { resolvers } from '../graphql/resolvers';



it('returns health test is ok', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  
    const response = await testServer.executeOperation({
      query: gql`
      query allPersonQuery($first: Int, $after: Int) {
        people(first: $first, after: $after) {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            cursor
            node {
              address
              email
              id
              name
              phone
            }
          }
        }
      }
      `,
      variables: { "first":4,
      "after": 0 },
    });
  
    // Note the use of Node's assert rather than Jest's expect; if using
    // TypeScript, `assert`` will appropriately narrow the type of `body`
    // and `expect` will not.

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.hello).toBe('Hello world!');
  });