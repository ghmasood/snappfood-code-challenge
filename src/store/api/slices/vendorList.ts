import { apiSlice } from '..';

import type { VendorListReq, VendorResult } from '../schema';

const defaultLocation = { lat: 35.75323, long: 51.23452 };

export const vendorListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVendorList: builder.query<VendorResult, VendorListReq>({
      query: (params) => ({
        url: '/mobile/v3/restaurant/vendors-list?&filters={"superType":[1]}',
        params: { ...params, lat: params.lat ?? defaultLocation.lat, long: params.long ?? defaultLocation.long },
      }),
    }),
  }),
});

export const { useGetVendorListQuery } = vendorListApiSlice;
