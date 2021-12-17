import { setDataFromAPI } from "./actionCreators"

export const getDataFromAPI = () => {
    return (dispatch: any) => {
        fetch(`${process.env.REACT_APP_SOURCE_API}`)
            .then(responce => responce.json())
            .then(responce => dispatch(setDataFromAPI(responce)))
    }
}