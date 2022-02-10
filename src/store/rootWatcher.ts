import { allExercisesWatcher } from "./allExercises/getAllExercises";
import { all } from "redux-saga/effects";

export function* rootWatcher(): any {
    yield all([allExercisesWatcher()]);
}
