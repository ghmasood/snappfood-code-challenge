import { PayloadAction } from '@reduxjs/toolkit';
import { ILocationStore, IUserInfoStore } from 'store/type';

const reducers = {
  setLocation: (
    state: IUserInfoStore,
    action: PayloadAction<ILocationStore>
  ) => {
    return { ...state, location: action.payload };
  },
};

export default reducers;
