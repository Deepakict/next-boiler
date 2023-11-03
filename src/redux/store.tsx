import {configureStore} from '@reduxjs/toolkit';
import {rootReducer, RootState} from './rootReducer';
import {createEpicMiddleware} from 'redux-observable';
import {RootActions} from './rootActions';
import {rootEpic} from './rootEpics';

const epicMiddleware = createEpicMiddleware<
  RootActions,
  RootActions,
  RootState
>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type {RootState};
