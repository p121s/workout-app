import { combineReducers } from "redux";
import reducerAllExercises from "./allExercises/reducer";

export const rootReducer = combineReducers({
    reducerAllExercises,
});
