import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
  type Person {
    id: ID!
    name: String
    address: String
    email: String
    phone: String
  }
  type Edge {
    cursor: Int
    node: Person
  }
  type Response {
    edges: [Edge]
    pageInfo: PageInfo
  }
  type PageInfo {
    hasNextPage: Boolean
    endCursor: Int
  }
  type Query {
    people(first: Int,after: Int): Response!
  }
  type Query {
    hello(name: String): String!
  }
`;