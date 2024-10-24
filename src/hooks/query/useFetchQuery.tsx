import { useEffect, useReducer } from "react";
import useFetch from "./useFetch";

interface IReducerTemplate {
  url: string;
  fetchOnLoad?: boolean;
  limit?: number;
  offset?: number;
}

export interface IReducerInit<D> {
  isFetching?: boolean;
  data?: D;
  limit?: number;
  offset?: number;
}

const useFetchQuery = <D,>({
  url,
  fetchOnLoad = false,
  limit = 25,
  offset = 0,
}: IReducerTemplate) => {
  const { fetchData, isLoading } = useFetch(url);

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

  useEffect(() => {
    const fetch = async () => {
      const url = `?limit=${state.limit}&offset=${state.offset}`;
      const { data = [] } = await fetchData(url);
      dispatch({
        data,
        isFetching: false,
      });
    };

    if (state.isFetching) {
      fetch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isFetching]);

  return { isLoading, state, dispatch };
};

export default useFetchQuery;
