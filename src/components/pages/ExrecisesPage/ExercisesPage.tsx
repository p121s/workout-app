import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseCardMini from '../../ExerciseCardMini/ExerciseCardMini';
import WorkoutDayCard from '../../WorkoutDayCard/WorkoutDayCard';
import background from '../../../images/8159213eb1178bb3edb090bde2e17e3b.jpeg';
import { HR } from './ExercisesPage.styled';
import './ExercisesPage.css';

export default function ExercisesPage() {

    const state = useSelector((state: RootStateOrAny) => state.data);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(state && state.data.questions);
    }, [state]);

    console.log(state);

    return (
        <>
            <h1>&#8629;</h1>
            <WorkoutDayCard
                backgroundSrc={`${background}`}
                day={1}
                workoutName='Morning Flexibility Routine'
                workoutDescription='Easy • 15 min • No equipment'
             />
            
            {questions && questions.map((question: any) => (
                <React.Fragment key={`${question.title}_rect_fragment`}>
                    <HR key={`${question.title}_hr`}></HR>
                    <h3 key={`${question.title}_h3`}>{question.title}</h3>
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
            <Link to='/workout' className="start_workout">
                Start Workout
            </Link>
        </>
    );
}