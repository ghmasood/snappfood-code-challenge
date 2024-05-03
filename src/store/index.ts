import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api';
import { rtkQueryErrorLogger } from './api/middleware/error';
import { apiQueryReducer } from './apiQuery';
import { vendorsReducer } from './vendors';

const rootReducer = combineReducers({
  apiQuery: apiQueryReducer,
  vendors: vendorsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware).concat(rtkQueryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './apiQuery';
export * from './vendors';
