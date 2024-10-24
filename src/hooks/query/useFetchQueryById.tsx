import { useEffect, useReducer } from "react";
import useFetch from "./useFetch";

interface IReducerTemplate {
  url: string;
  byId?: {
    id: string;
  };
}

export interface IReducerInit<D> {
  isFetching?: boolean;
  data?: D;
}

const useFetchQueryById = <D,>({ url, byId }: IReducerTemplate) => {
  const { fetchData, isLoading } = useFetch(url);

  const initReducer: IReducerInit<D> = {
    isFetching: true,
    data: [] as D,
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
      let url;
      if (byId) {
        url = `/${byId.id}`;
      }
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

export default useFetchQueryById;
