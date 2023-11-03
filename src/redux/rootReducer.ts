import {todosReducer} from '@/redux/todo/todoSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
