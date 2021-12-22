import { SET_DATA_API } from '../../constants/constants';

const INIT_STATE = {
    data: '',
}

export default function reducerAllExercises(state = INIT_STATE, action: any) {
    switch(action.type) {
        case SET_DATA_API:
            return {...state, data: action.payload};
        default:
            return state;
    }
}