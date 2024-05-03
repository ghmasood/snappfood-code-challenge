import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import type { RootState } from 'store';
import ENV from 'utils/environments';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.BASE_URL,
    prepareHeaders: (
      headers
      // { getState }
    ) => {
      //We can implement a mechanism to automatically add an Authorization header to every outgoing request.

      // const store = getState() as RootState;
      // const token = store.auth.token;
      // if (token) {
      //   headers.set('Authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),

  endpoints: () => ({}),
  tagTypes: [],
});
