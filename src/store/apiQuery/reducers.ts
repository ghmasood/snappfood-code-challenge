import { PayloadAction } from '@reduxjs/toolkit';
import { IVendorListReq } from 'store/api/schema';

const reducers = {
  setLocation: (
    state: IVendorListReq,
    action: PayloadAction<Pick<IVendorListReq, 'lat' | 'long'>>
  ) => {
    return { ...state, ...action.payload };
  },

  setPage: (state: IVendorListReq, action: PayloadAction<number>) => {
    return { ...state, page: action.payload };
  },
};

export default reducers;
