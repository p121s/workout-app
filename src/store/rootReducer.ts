import { combineReducers } from "redux";
import reducerAllExercises from "./allExercises/reducer";
import reducerCurrentWorkout from "./currentWorkout/reducer";

export const rootReducer = combineReducers({
    reducerAllExercises,
    reducerCurrentWorkout,
});
