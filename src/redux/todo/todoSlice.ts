import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '@/redux/todo/todoEpic';

export interface StateTodo {
  todos: Array<Todo>;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: StateTodo = {
  todos: [],
  isLoading: false,
  error: undefined,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos(state) {
      state.isLoading = true;
    },
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    todoError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {getTodos, setTodos, todoError} = todoSlice.actions;
export const todosReducer = todoSlice.reducer;

export type TodoActions =
  | ReturnType<typeof getTodos>
  | ReturnType<typeof setTodos>
  | ReturnType<typeof todoError>;
