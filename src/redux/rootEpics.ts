import {combineEpics} from 'redux-observable';
import {getDemoDataEpic} from '@/redux/todo/demoEpic';

const epics = [getDemoDataEpic];

export const rootEpic = combineEpics(...epics);
