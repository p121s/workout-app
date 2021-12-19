import { setAllExercises } from "./actionCreators"

export const getAllExercises = () => {
    return (dispatch: any) => {
        fetch(`${process.env.REACT_APP_SOURCE_API}`)
            .then(responce => responce.json())
            .then(responce => dispatch(setAllExercises(responce)))
    }
}