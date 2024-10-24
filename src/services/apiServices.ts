import { baseUrl } from "@/constant/urls";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (odata: string) => `/${odata}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useLazyGetDataQuery } = api;
