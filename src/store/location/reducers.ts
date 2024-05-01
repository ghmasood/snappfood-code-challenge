import { PayloadAction } from '@reduxjs/toolkit';
import { ILocationStore } from 'store/type';

const reducers = {
  setLocation: (
    _state: ILocationStore,
    action: PayloadAction<ILocationStore>
  ) => {
    return action.payload;
  },
};

export default reducers;
