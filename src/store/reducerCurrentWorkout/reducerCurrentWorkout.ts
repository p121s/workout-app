import { SET_CURRENT_WORKOUT } from "../../constants/constants"

const INIT_STATE = {
    currentWorkout: [],
}

console.log(INIT_STATE.currentWorkout);

export default function reducerCurrentWorkout (state = INIT_STATE, action: any) {
    switch(action.type) {
        case SET_CURRENT_WORKOUT:
            return {...state, currentWorkout: action.payload};
        default:
            return state;
    }
}