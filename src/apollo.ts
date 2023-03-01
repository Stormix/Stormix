import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';

const client = new ApolloClient({
  uri: 'https://cms.stormix.co/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default client;
