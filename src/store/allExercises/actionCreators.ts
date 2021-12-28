/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SET_DATA_API } from "../../constants/constants";

export const setAllExercises = (payload: any) => ({
    type: SET_DATA_API,
    payload,
});
