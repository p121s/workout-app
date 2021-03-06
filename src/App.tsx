import { useEffect } from "react";
import { asyncSetAllExercises } from "./store/allExercises/actionCreators";
import { useDispatch } from "react-redux";
import ExercisesPage from "./pages/ExercisesPage/ExercisesPage";
import { Routes, Route } from "react-router";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
import { AppBlock } from "./App.styled";
import Theme from "./theme/Theme";

function App(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncSetAllExercises());
    }, [dispatch]);

    return (
        <Theme>
            <AppBlock>
                <Routes>
                    <Route path="/" element={<ExercisesPage />} />
                    <Route path="/workout" element={<WorkoutPage />} />
                </Routes>
            </AppBlock>
        </Theme>
    );
}

export default App;
