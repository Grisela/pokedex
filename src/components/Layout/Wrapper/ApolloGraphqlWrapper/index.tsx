import client from "@/services/apolloClient";
import { ApolloProvider } from "@apollo/client";

const ApolloGraphqlWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloGraphqlWrapper;
