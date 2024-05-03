import { createSlice } from '@reduxjs/toolkit';

import type { VendorListReq } from 'store/api/schema';

import reducers from './reducers';

export const apiQueryInitialState: VendorListReq = {
  lat: 35.77364,
  long: 51.41831,
  page_size: 10,
  page: 0,
};

export const apiQuerySlice = createSlice({
  name: 'apiQuery',
  initialState: apiQueryInitialState,
  reducers: {
    ...reducers,
  },
});

export const { setLocation, setPage } = apiQuerySlice.actions;

export const apiQueryReducer = apiQuerySlice.reducer;
