import { apiSlice } from '..';

import { IVendorListReq, IVendorResult } from '../schema';

export const vendorListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorList: builder.query<IVendorResult, IVendorListReq>({
      query: (params) => ({
        url: '/mobile/v3/restaurant/vendors-list?&filters={"superType":[1]}',
        params,
      }),
    }),
  }),
});

export const { useGetVendorListQuery } = vendorListApiSlice;
