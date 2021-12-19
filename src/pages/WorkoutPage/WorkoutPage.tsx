/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { MainBlockTimer, ButtomPrewNext, PauseButton, PauseDiv } from './WorkoutPage.styled';
import { RootStateOrAny, useSelector } from 'react-redux';
import Timer from '../../components/Timer/Timer';
import Video from '../../components/Video/Video';
import CompletePage from '../CompletePage/CompletePage';

export default function WorkoutPage() {

    const currentWorkout = useSelector((currentWorkout: RootStateOrAny) => currentWorkout.reducerCurrentWorkout.currentWorkout);
    const [duration, setDuration] = useState(6);
    const [counter, setCounter] = useState(5);
    const [isReady, setIsReady] = useState(true);
    const [currentExerciseNum, setCurrentExerciseNum] = useState<number>(0);
    const [colorTimer, setColorTimer] = useState('#1DE9B6');
    const [isComplete, setIsComplete] = useState(false);
    const [title, setTitle] = useState('Get Ready');
    const [workoutTime, setWorkoutTime] = useState(0);
    const [isPause, setIsPause] = useState(false);

    const currentTimeout = useRef<any>(0);

    console.log(currentWorkout);

    useEffect(() => {
        if(currentExerciseNum !== 0 && currentExerciseNum === currentWorkout.length) {
            clearTimeout(currentTimeout.current);
            setIsComplete(true);
        }
    }, [currentExerciseNum, currentWorkout.length])

    useEffect(() => {
        if(!isPause) {
            if(counter === -1 && isReady) {
                nextExercise();
            } else if(counter === - 1 && !isReady) {
                nextGetReady();
            } else {
                currentTimeout.current = setTimeout(() => {
                        setCounter(counter - 1);
                        setWorkoutTime(workoutTime + 1);
                }, 1000);
            }
        }
    }, [counter, isReady, isPause]);

    const nextExercise = () => {
        setCounter(currentWorkout[currentExerciseNum].duration);
        setDuration(currentWorkout[currentExerciseNum].duration + 1);
        setColorTimer('#FF4081');
        setIsReady(false);
        setTitle(currentWorkout[currentExerciseNum].title);
    }

    const nextGetReady = () => {
        setCurrentExerciseNum(currentExerciseNum + 1);
        setCounter(5);
        setDuration(6);
        setColorTimer('#1DE9B6');
        setIsReady(true);
        setTitle('Get Ready');
    }

    const paused = () => {
        setIsPause(!isPause);
    };

    return (
        <div style={{textAlign: 'center'}}>
            {
                !isComplete ? (
                    <>
                        <h2>{title}</h2>
                        <MainBlockTimer className='main_block-timer'>
                            <div>
                                <ButtomPrewNext
                                    disabled={currentExerciseNum === 0 ? true : false}
                                    onClick={() => {
                                        currentTimeout.current && clearTimeout(currentTimeout.current);
                                        setCurrentExerciseNum(currentExerciseNum - 1);
                                        nextGetReady();
                                    }}
                                >
                                    &#10073;&#9664;
                                </ButtomPrewNext>
                            </div>
                            <div className='timer-wrapper'>
                                <Timer sec={counter} color={colorTimer} duration={duration} isPause={isPause} />
                            </div>
                            <div>
                                <ButtomPrewNext
                                    disabled={currentExerciseNum === currentWorkout.length - 1 ? true : false}
                                    onClick={() => {
                                        currentTimeout.current && clearTimeout(currentTimeout.current);
                                        setCurrentExerciseNum(currentExerciseNum + 1);
                                        nextGetReady();
                                    }}
                                >
                                    &#9654;&#10073;
                                </ButtomPrewNext>
                            </div>
                        </MainBlockTimer>
                        <Video
                            exerciseVideo={currentWorkout[currentExerciseNum]?.video}
                            poster={currentWorkout[currentExerciseNum]?.photo} />
                        <PauseDiv>
                            <PauseButton onClick={paused}>
                                {isPause ? <span>&#9654;</span> : <span>&#10073;&#10073;</span>}
                            </PauseButton>
                        </PauseDiv>
                    </>
                ) : (
                    <CompletePage workoutTime={((workoutTime + 1) / 60).toFixed(2)} />
                )
            }
            
        </div>
    );
}