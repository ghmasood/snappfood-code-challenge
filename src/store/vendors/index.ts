import { createSlice } from '@reduxjs/toolkit';
import { vendorListApiSlice } from 'store/api/slices/vendorList';
import { IVendorsStore } from 'store/type';

export const vendorsInitialState: IVendorsStore = {
  vendors: [],
};

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: vendorsInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      vendorListApiSlice.endpoints.getVendorList.matchFulfilled,
      (
        state,
        {
          payload: {
            data: { finalResult },
          },
        }
      ) => {
        return { vendors: [...state.vendors, ...finalResult] };
      }
    );
  },
});

export const vendorsReducer = vendorsSlice.reducer;
