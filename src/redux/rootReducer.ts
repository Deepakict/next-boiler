import {demoReducer} from './demo/demoSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  demoReducer: demoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
