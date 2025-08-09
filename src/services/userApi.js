import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  // import and create a api using Must @reduxjs/toolkit/query/react
  reducerPath: "userApi", //reducer path is assign our own name
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    
    getUserApi: builder.query({
      query: () => "users",
    }),
   
    getUserApiId: builder.query({
      query: (id) => `users/${id}`,
    }),
     
  }),
});

export const { useGetUserApiQuery, useGetUserApiIdQuery } = userApi;
