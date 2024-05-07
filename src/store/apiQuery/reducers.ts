import { PayloadAction } from '@reduxjs/toolkit';

import type { QueryStore } from 'store/type';

const reducers = {
  setPage: (state: QueryStore, action: PayloadAction<number>) => {
    return { ...state, page: action.payload };
  },
};

export default reducers;
