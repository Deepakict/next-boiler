import { combineEpics } from "redux-observable";
import { getDemoDataEpic } from "./demo/demoEpic";


const epics = [getDemoDataEpic];

export const rootEpic = combineEpics(...epics);
