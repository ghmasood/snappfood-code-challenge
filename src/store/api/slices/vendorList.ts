import { apiSlice } from '..';

import type { VendorListReq, VendorResult } from '../schema';

export const vendorListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorList: builder.query<VendorResult, VendorListReq>({
      query: (params) => ({
        url: '/mobile/v3/restaurant/vendors-list?&filters={"superType":[1]}',
        params,
      }),
    }),
  }),
});

export const { useGetVendorListQuery } = vendorListApiSlice;
