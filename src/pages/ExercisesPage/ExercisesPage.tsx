import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import ExerciseCardMini from "../../components/ExerciseCardMini/ExerciseCardMini";
import WorkoutDayCard from "../../components/WorkoutDayCard/WorkoutDayCard";
import background from "../../images/8159213eb1178bb3edb090bde2e17e3b.jpeg";
import { BlockAllExercises, HR } from "./ExercisesPage.styled";
import { BlockSpinner, Spinner } from "../../components/shared/shared.styled";
import { SpanInLink } from "../../components/controls/buttons";
import { Question } from "../../interfaces/Question.interfaces";
import { Exercise } from "../../interfaces/Exercise.interfaces";
import { workingWithStorage } from "../../services/storageService/workingWithStorage";

export default function ExercisesPage(): JSX.Element {

    const { getStorageItem, setStorageItem } = workingWithStorage;
    const allExercises = useSelector(
        (allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data
    );
    const [questions, setQuestions] = useState<Question[]>([]);
    const [exercisesId, setExercisesId] = useState<number[]>([]);

    useEffect(() => {
        allExercises && setQuestions(allExercises.data.questions);
    }, [allExercises]);

    useEffect(() => {
        questions &&
            setExercisesId(
                questions
                    .map((question: Question) =>
                        question.exercises.map(({id}: Exercise) => id)
                    )
                    .flat()
            );
    }, [questions]);

    useEffect(() => {
        exercisesId && setStorageItem("exercisesId", `${exercisesId}`);
    }, [exercisesId]);

    return (
        <>
            <WorkoutDayCard
                backgroundSrc={`${background}`}
                day={1}
                workoutName="Morning Flexibility Routine"
                workoutDescription="Easy • 15 min • No equipment"
            />
            {allExercises ? (
                <>
                    <BlockAllExercises>
                        {questions.map((question: Question) => (
                            <React.Fragment key={question.title}>
                                <HR />
                                <h3>{question.title}</h3>
                                {question.exercises.map(({id, photo, title, duration}: Exercise) => (
                                    <ExerciseCardMini
                                        key={id}
                                        src={photo}
                                        title={title}
                                        duration={duration}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </BlockAllExercises>
                </>
            ) : (
                <BlockSpinner>
                    <Spinner />
                </BlockSpinner>
            )}

            {allExercises ? (
                <Link to="/workout">
                    <SpanInLink>
                        {getStorageItem("currentExerciseNum") ? "Resume" : "Start Workout"}
                    </SpanInLink>
                </Link>
            ) : ''
                
            }
            
        </>
    );
}
