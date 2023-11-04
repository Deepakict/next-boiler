import {
  catchError,
  debounceTime,
  filter,
  from,
  map,
  mergeMap,
  of,
  takeUntil,
} from 'rxjs';
import {Epic} from 'redux-observable';
import {RootActions} from '../rootActions';
import {RootState} from '../rootReducer';
import {TodoActions, todoError, getTodos, setTodos} from './todoSlice';
import {makeGetRequest} from '@/utils';
import {ApiEndPoints} from '@/factory';
import _ from 'lodash';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getData(): Promise<Todo[] | undefined> {
  try {
    const response = await makeGetRequest<Todo[]>(ApiEndPoints.todo.getTodos);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined;
  }
}

export const fetchTodosFromApi: Epic<
  RootActions,
  RootActions,
  RootState
> = action$ =>
  action$.pipe(
    filter(getTodos.match),
    debounceTime(250),
    map((x: TodoActions) => x.payload),
    mergeMap(() => {
      return from(getData()).pipe(
        map(res => {
          const isDataValid = res && _.isArray(res);
          if (isDataValid) return setTodos(res);
          else return todoError('something went wrong');
        }),
        takeUntil(action$.pipe(filter(getTodos.match))),
        catchError(error => {
          return of(todoError(error));
        })
      );
    })
  );
