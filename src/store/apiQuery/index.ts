import { createSlice } from '@reduxjs/toolkit';

import type { QueryStore } from 'store/type';

import reducers from './reducers';

export const apiQueryInitialState: QueryStore = {
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

export const { setPage } = apiQuerySlice.actions;

export const apiQueryReducer = apiQuerySlice.reducer;
