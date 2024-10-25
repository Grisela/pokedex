import { OperationVariables, useLazyQuery } from "@apollo/client";
import { DocumentNode } from "graphql/language/ast";
import isUndefined from "lodash/isUndefined";
import isEmpty from "lodash/isEmpty";

interface argsType<V, D> {
  variables?: V;
  onCompleted?: (Data: D) => void;
  onError?: (err: Error) => void;
}

interface argsFetchDataType<V> {
  variables?: V;
}

interface queryResult<D> {
  data?: D;
  error?: Error;
  loading?: boolean;
}

const useSimpleLazyQuery = <D>(
  query: DocumentNode,
  args?: argsType<Partial<OperationVariables> | undefined, D>
): [
  (
    args?: argsFetchDataType<Partial<OperationVariables> | undefined>
  ) => Promise<unknown>,
  queryResult<D>
] => {
  const [
    getQuery,
    { called, fetchMore, error: errorFetch, data: dataFetch, loading },
  ] = useLazyQuery(query, {
    onCompleted: (data) => args?.onCompleted && args?.onCompleted(data),
    onError: (error) => args?.onError && args?.onError(error),
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const refetchData = (variables: Partial<OperationVariables> | undefined) => {
    return fetchMore({
      variables,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return fetchMoreResult;
      },
    }).then((res) => res?.data);
  };

  const fetchData = (
    argsFetchData?: argsFetchDataType<Partial<OperationVariables> | undefined>
  ): Promise<unknown> => {
    let variables;

    if (!isUndefined(argsFetchData) && !isEmpty(argsFetchData?.variables))
      variables = argsFetchData?.variables;
    else if (!isUndefined(args) && !isEmpty(args?.variables))
      variables = args?.variables;

    if (called) {
      return refetchData(variables);
    } else {
      return getQuery({
        variables,
      }).then((res) => res?.data);
    }
  };

  return [fetchData, { error: errorFetch, data: dataFetch, loading }];
};

export default useSimpleLazyQuery;
