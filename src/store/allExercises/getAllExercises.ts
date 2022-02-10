import { setAllExercises } from "./actionCreators";
import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_SET_DATA_API } from "../store.constants";

const fetchAllExercises = () => fetch(`${process.env.REACT_APP_SOURCE_API}`);

export function* getAllExercises(): any {
    try {
        const data = yield call(fetchAllExercises);
        const json = yield call(() => new Promise((res) => res(data.json())));
        yield put(setAllExercises(json));
    } catch (e) {
        yield console.log(e);
    }
}

export function* allExercisesWatcher(): any {
    yield takeEvery(FETCH_SET_DATA_API, getAllExercises);
}
