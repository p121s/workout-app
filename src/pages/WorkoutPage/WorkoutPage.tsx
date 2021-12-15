import React, { useState, useEffect } from 'react';
import { MainBlockTimer, ButtomPrewNext, PauseButton, PauseDiv } from './WorkoutPage.styled';
import { RootStateOrAny, useSelector } from 'react-redux';
import Timer from '../../components/Timer/Timer';
import Video from '../../components/Video/Video';
import CompletePage from '../CompletePage/CompletePage';
import '../ExrecisesPage/ExercisesPage.css';

export default function WorkoutPage() {

    const state = useSelector((state: RootStateOrAny) => state.data);
    const [questions] = useState(state && state.data.questions);
    const [duration, setDuration] = useState(1);
    const [counter, setCounter] = useState(0);
    const [isReady, setIsReady] = useState(true);
    const [numberQuestion, setNumberQuestion] = useState<number>(0);
    const [numberExrcise, setNumberExercise] = useState<number>(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
    const [numberOfExercises, setNumberOfExercises] = useState<number>(0);
    const [exerciseVideo, setExerciseVideo] = useState();
    const [colorTimer, setColorTimer] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [title, setTitle] = useState('');
    const [workoutTime, setWorkoutTime] = useState(0);
    // const [exercisePhoto, setExercisePhoto] = useState();
    // console.log(numberExrcise, numberQuestion, numberOfExercises, numberOfQuestions);

    useEffect(() => {
        if(numberQuestion === numberOfQuestions && numberOfQuestions) {
            setIsComplete(true);
        } else {
            setNumberOfQuestions(questions.length);
            setNumberOfExercises(questions[numberQuestion].exercises && questions[numberQuestion].exercises.length);
            setExerciseVideo(questions[numberQuestion].exercises[numberExrcise].video);
            setColorTimer('#1DE9B6');
            setTitle('GetReady');
        }
    }, [numberExrcise, numberOfQuestions, numberQuestion])

    useEffect(() => {
        if(numberQuestion !== numberOfQuestions) {
            if(counter === -1 && isReady) {
                nextGetReady();
            } else if(counter === - 1 && !isReady) {
                if(numberExrcise < numberOfExercises - 1) {
                    nextExercise(1);
                } else {
                    setNumberQuestion(numberQuestion + 1);
                    setNumberExercise(0);
                }
            } else {
                setTimeout(() => {
                        setCounter(counter - 1);
                        setWorkoutTime(workoutTime + 1);
                }, 1000);
            }
        }
    }, [counter, duration, isReady, numberExrcise, numberOfExercises, numberOfQuestions, numberQuestion, questions]);

    const nextGetReady = () => {
        setCounter(questions[numberQuestion].exercises[numberExrcise].duration);
        setDuration(questions[numberQuestion].exercises[numberExrcise].duration + 1)
        setColorTimer('#FF4081');
        setIsReady(false);
        setTitle(questions[numberQuestion].exercises[numberExrcise].title);
    }

    const nextExercise = (prewOrNext: number) => {
        setNumberExercise(numberExrcise + prewOrNext);
        setExerciseVideo(questions[numberQuestion].exercises[numberExrcise].video);
        setCounter(5);
        setDuration(6);
        setColorTimer('#1DE9B6');
        setIsReady(true);
        setTitle('Get Ready');
    }

    return (
        <div style={{textAlign: 'center'}}>
            {
                !isComplete ? (
                    <>
                        <h2>{title}</h2>
                        <MainBlockTimer className='main_block-timer'>
                            <div>
                                <ButtomPrewNext
                                    disabled={numberQuestion === 0 && numberExrcise === 0 ? true : false}
                                    onClick={() => {
                                        setNumberExercise(numberExrcise - 1);
                                    }}
                                >
                                    &#10073;&#9664;
                                </ButtomPrewNext>
                            </div>
                            <div className='timer-wrapper'>
                                <Timer sec={counter} color={colorTimer} duration={duration} />
                            </div>
                            <div>
                                <ButtomPrewNext disabled={false} onClick={() => setNumberExercise(numberExrcise + 1)}>&#9654;&#10073;</ButtomPrewNext>
                            </div>
                        </MainBlockTimer>
                        <Video exerciseVideo={exerciseVideo} />
                        <PauseDiv>
                            <PauseButton>&#10073;&#10073;</PauseButton>
                        </PauseDiv>
                    </>
                ) : (
                    <CompletePage workoutTime={((workoutTime + 1) / 60).toFixed(2)} />
                )
            }
            
        </div>
    );
}