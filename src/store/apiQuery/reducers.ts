import { PayloadAction } from '@reduxjs/toolkit';

import type { VendorListReq } from 'store/api/schema';

const reducers = {
  setLocation: (state: VendorListReq, action: PayloadAction<Pick<VendorListReq, 'lat' | 'long'>>) => {
    return { ...state, ...action.payload };
  },

  setPage: (state: VendorListReq, action: PayloadAction<number>) => {
    return { ...state, page: action.payload };
  },
};

export default reducers;
