import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ENV from 'utils/environments';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ENV.BASE_URL }),
  endpoints: () => ({}),
  tagTypes: [],
});
