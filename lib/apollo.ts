import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BackendURL } from "config";

const apolloClient = new ApolloClient({
  uri: BackendURL,
  cache: new InMemoryCache(),
});

export default apolloClient;
