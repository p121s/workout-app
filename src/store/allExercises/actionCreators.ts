import { SET_DATA_API } from "../store.constants";
import { Action } from "./allExercises.types";

export const setAllExercises = (payload: string): Action => ({
    type: SET_DATA_API,
    payload,
});
