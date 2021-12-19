import { SET_CURRENT_WORKOUT, SET_CURRENT_EXERCISE, GET_CURRENT_EXERCISE } from "../../constants/constants";

const INIT_STATE = {
    currentWorkout: [],
    currentExercise: 0,
}

export default function reducerCurrentWorkout (state = INIT_STATE, action: any) {
    switch(action.type) {
        case SET_CURRENT_WORKOUT:
            return {...state, currentWorkout: action.payload};
        case SET_CURRENT_EXERCISE:
            return {...state, currentExercise: action.payload};
        case GET_CURRENT_EXERCISE:
            return INIT_STATE.currentExercise;
        default:
            return state;
    }
}