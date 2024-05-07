import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66349ced9bb0df2359a218d1.mockapi.io/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
      }),
    }),
  }),
});
