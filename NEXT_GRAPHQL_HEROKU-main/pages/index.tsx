import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { AwesomePerson } from '../components/AwesomePerson';
import { Suspense } from 'react';
import { useState } from 'react';

const AllPersons = gql`
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
`;

function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllPersons, {
    variables: { first: 20 },
  });
  const [bottomLoading, setBottomLoading] = useState(false);
  console.log(data);

  if (loading) return <p className="text-red-500">Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { endCursor, hasNextPage } = data?.people.pageInfo;

  return (
    <div>
      <Head>
        <title>People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-5 px-5">
        <div>
          <h1 className="text-4xl font-bold mb-4">Awesome People</h1>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.people.edges.map(({node}, i) => (
        
           <AwesomePerson
            id={node.id}
           name={node.name}
            address={node.address}
            email={node.email}
            phone={node.phone}

         />

          ))}
        </div>
        {bottomLoading && <p className="flex-center w-6 h-6 border-4 rounded-full animate-spin border-blue-500 border-t-blue-500 border-l-blue-500 border-b-blue-700 border-r-blue-700 border-t-gradient-to-r from-blue-400 to-blue-500 mx-auto my-10"></p>}
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              setBottomLoading(true);
              fetchMore({
                variables: { after: 10 },
                updateQuery: (prev, { fetchMoreResult }) => {
                  setBottomLoading(false);
                  console.log("More", fetchMoreResult);
                  console.log("Prev", prev);
                  // if (!fetchMoreResult) return prev;
                  
                  fetchMoreResult.people.edges = [
                    ...prev.people.edges,
                    ...fetchMoreResult.people.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You've reached the end!
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
