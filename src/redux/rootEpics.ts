import {combineEpics} from 'redux-observable';
import {fetchTodosFromApi} from '@/redux/todo/todoEpic';

const epics = [fetchTodosFromApi];

export const rootEpic = combineEpics(...epics);
