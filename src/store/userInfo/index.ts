import { createSlice } from '@reduxjs/toolkit';
import { IUserInfoStore } from 'store/type';
import reducers from './reducers';

export const userInfoInitialState: IUserInfoStore = {
  location: {
    lat: 35.774,
    long: 51.418,
  },
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: userInfoInitialState,
  reducers: {
    ...reducers,
  },
});

export const { setLocation } = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
