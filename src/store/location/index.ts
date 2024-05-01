import { createSlice } from '@reduxjs/toolkit';
import { ILocationStore } from 'store/type';
import reducers from './reducers';

export const locationInitialState: ILocationStore = {
  lat: 35.774,
  long: 51.418,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState: locationInitialState,
  reducers: {
    ...reducers,
  },
});

export const { setLocation } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
