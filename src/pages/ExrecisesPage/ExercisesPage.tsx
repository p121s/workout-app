import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ExerciseCardMini from '../../components/ExerciseCardMini/ExerciseCardMini';
import WorkoutDayCard from '../../components/WorkoutDayCard/WorkoutDayCard';
import background from '../../images/8159213eb1178bb3edb090bde2e17e3b.jpeg';
import { BlockAllExercises, HR } from './ExercisesPage.styled';
import { BlockSpiner } from '../../components/shared/shared.styled';
import { SpanInLink } from '../../components/controls/buttons';
import { Exercise, Question } from '../pages.interfaces';
import { Spinner } from '../../components/shared/shared.styled';

export default function ExercisesPage() {

    const allExercises = useSelector((allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data);
    const [questions, setQuestions] = useState<Question[]>([]);
  
    useEffect(() => {
        allExercises && setQuestions(allExercises.data.questions);
    }, [allExercises]);

    useEffect(() => {
        questions && localStorage.setItem(
            'exercisesId',
            `${questions.map((question: Question) => question.exercises.map((exercise: Exercise) => exercise.id)).flat()}`
        );
    }, [questions])

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
                {questions.map((question: Question) => (
                    <React.Fragment key={question.title}>
                        <HR />
                        <h3>{question.title}</h3>
                        {question.exercises.map((exercise: Exercise) => (
                            
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
                <Spinner />
            </BlockSpiner>}
            
            <Link to='/workout'>
                <SpanInLink>{localStorage.getItem('currentExerciseNum') ? 'Resume' : 'Start Workout'}</SpanInLink>
            </Link>
        </>
    );
}