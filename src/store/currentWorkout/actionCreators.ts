import { SET_CURRENT_WORKOUT } from "../../constants/constants";

export const setCurrentWorkout = (payload: any) => ({
    type: SET_CURRENT_WORKOUT,
    payload,
});
