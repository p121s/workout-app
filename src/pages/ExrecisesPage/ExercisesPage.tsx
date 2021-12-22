import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllExercises } from '../../store/allExercises/asyncActions';
import { setCurrentWorkout } from '../../store/currentWorkout/actionCreators';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseCardMini from '../../components/ExerciseCardMini/ExerciseCardMini';
import WorkoutDayCard from '../../components/WorkoutDayCard/WorkoutDayCard';
import background from '../../images/8159213eb1178bb3edb090bde2e17e3b.jpeg';
import { BlockAllExercises, HR } from './ExercisesPage.styled';
import { BlockSpiner } from '../../components/shared/shared.styled';
import { SpanInLink } from '../../components/controls/buttons';
import { Exercise, Question } from '../pages.interfaces';
import { PropagateLoader } from 'react-spinners';

export default function ExercisesPage(props: any) {

    const allExercises = useSelector((allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentWorkout, setThisCurrentWorkout] = useState<Exercise[]>([]);

    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getAllExercises());
    }, [dispatch]);

    useEffect(() => {
        allExercises && setQuestions(allExercises.data.questions);
    }, [allExercises]);

    useEffect(() => {
        questions && setThisCurrentWorkout(questions.map(({exercises}: any) => exercises).flat());
    }, [questions])

    useEffect(() => {
        dispatch(setCurrentWorkout(currentWorkout));
    }, [currentWorkout, dispatch])

    return (
        <>
            <WorkoutDayCard
                    backgroundSrc={`${background}`}
                    day={1}
                    workoutName='Morning Flexibility Routine'
                    workoutDescription='Easy • 15 min • No equipment'
                />
            {allExercises ? <>
                <BlockAllExercises>
                {questions.map((question: any) => (
                    <React.Fragment key={question.title}>
                        <HR />
                        <h3>{question.title}</h3>
                        {question.exercises.map((exercise: any) => (
                            
                            <ExerciseCardMini
                                key={exercise.id}
                                src={exercise.photo}
                                title={exercise.title}
                                duration={exercise.duration}
                            />
                        ))}
                    </React.Fragment>
                ))}
                </BlockAllExercises>
            </> : <BlockSpiner>
                <PropagateLoader color={`${(props: any) => props.theme.colors.purple}`} />
            </BlockSpiner>}
            
            <Link to='/workout'>
                <SpanInLink>{localStorage.getItem('currentExerciseNum') ? 'Resume' : 'Start Workout'}</SpanInLink>
            </Link>
        </>
    );
}