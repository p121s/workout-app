import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllExercises } from '../../store/reduserAllExercises/asyncActions';
import { setCurrentWorkout } from '../../store/reducerCurrentWorkout/actionCreators';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseCardMini from '../../components/ExerciseCardMini/ExerciseCardMini';
import WorkoutDayCard from '../../components/WorkoutDayCard/WorkoutDayCard';
import background from '../../images/8159213eb1178bb3edb090bde2e17e3b.jpeg';
import { HR } from './ExercisesPage.styled';
import { SpanInLink } from '../../components/controls/buttons';
import { Exercise, Question } from '../pages.interfaces';

export default function ExercisesPage() {

    const allExercises = useSelector((allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentWorkout, setThisCurrentWorkout] = useState<Exercise[]>([]);

    console.log(questions);

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
            <h1>&#8629;</h1>
            <WorkoutDayCard
                backgroundSrc={`${background}`}
                day={1}
                workoutName='Morning Flexibility Routine'
                workoutDescription='Easy • 15 min • No equipment'
             />
            
            {questions ? questions.map((question: any) => (
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
            )) : 'loading'}
            <Link to='/workout'>
                <SpanInLink>Start Workout</SpanInLink>
            </Link>
        </>
    );
}