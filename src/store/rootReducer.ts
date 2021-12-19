import { combineReducers } from 'redux';
import reducerAllExercises from './reduserAllExercises/reducerAllExercises';
import reducerCurrentWorkout from './reducerCurrentWorkout/reducerCurrentWorkout';

export const rootReducer = combineReducers({
    reducerAllExercises,
    reducerCurrentWorkout,
});
