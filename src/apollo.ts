import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql'
});

apolloClient.defaultOptions = {
  query: {
    fetchPolicy: 'network-only'
  }
};

export default apolloClient;
