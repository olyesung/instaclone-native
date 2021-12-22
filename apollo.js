import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://smart-bird-28.loca.lt/graphql",
  cache: new InMemoryCache(),
});
export default client;
