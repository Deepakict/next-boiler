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
import {DemoActions, demoDataFailure, getDemo, setDemo} from './demoSlice';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getData(): Promise<any> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.ok) {
      const result: Todo[] = await response.json();
      return result;
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getDemoDataEpic: Epic<
  RootActions,
  RootActions,
  RootState
> = action$ =>
  action$.pipe(
    filter(getDemo.match),
    debounceTime(250),
    map((x: DemoActions) => x.payload),
    mergeMap(() => {
      return from(getData()).pipe(
        map((res: any) => {
          return setDemo(res);
        }),
        takeUntil(action$.pipe(filter(getDemo.match))),
        catchError(error => {
          return of(demoDataFailure(error));
        })
      );
    })
  );
