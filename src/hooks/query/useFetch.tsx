import { useLazyGetDataQuery } from "@/services/apiServices";
import { isNull } from "lodash";

const useFetch = (url: string) => {
  const [getData, { data, isFetching, isError, isLoading }] =
    useLazyGetDataQuery();

  const fetchData = async (odata: string | null = null) => {
    const finalUrl = !isNull(odata) ? `${url}${odata}` : url;
    try {
      const { data } = await getData(finalUrl);
      return { data };
    } catch (err) {
      return { err };
    }
  };

  return { fetchData, data, isFetching, isError, isLoading };
};

export default useFetch;
