import { Dispatch } from "react";
import { setAllExercises } from "./actionCreators";
import { Action } from "./allExercises.types";

export const getAllExercises = () => {
    return (dispatch: Dispatch<Action>): void => {
        fetch(`${process.env.REACT_APP_SOURCE_API}`)
            .then((responce) => responce.json())
            .then((responce) => dispatch(setAllExercises(responce)));
    };
};
