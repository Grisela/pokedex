import { useReducer } from "react";
import { IReducerInit } from "../query/useFetchQuery";

interface IProps {
  fetchOnLoad?: boolean;
  limit?: number;
  offset?: number;
}

const useDefaultFetchState = <D,>(props: IProps) => {
  const { fetchOnLoad = false, limit = 60, offset = 0 } = props;

  const initReducer: IReducerInit<D> = {
    isFetching: fetchOnLoad,
    data: [] as D,
    limit,
    offset,
  };

  const [state, dispatch] = useReducer(
    (curr: IReducerInit<D>, acc: IReducerInit<D>) => {
      const value = {
        ...curr,
        ...acc,
      };
      return value;
    },
    initReducer
  );

  return { state, dispatch };
};

export default useDefaultFetchState;
