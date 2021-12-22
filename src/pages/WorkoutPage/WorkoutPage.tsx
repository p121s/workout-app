/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { MainBlockTimer, PauseDiv } from './WorkoutPage.styled';
import { ButtomPrewNext, PauseButton } from '../../components/controls/buttons';
import { RootStateOrAny, useSelector } from 'react-redux';
import Timer from '../../components/Timer/Timer';
import Video from '../../components/Video/Video';
import CompletePage from '../CompletePage/CompletePage';
import { Exercise } from '../pages.interfaces';
import { BlockSpiner } from '../../components/shared/shared.styled';
import { PropagateLoader } from 'react-spinners';

export default function WorkoutPage() {

    const currentWorkout: Exercise[] = useSelector((currentWorkout: RootStateOrAny) => currentWorkout.reducerCurrentWorkout.currentWorkout);
    const [currentExerciseNum, setCurrentExerciseNum] = useState<number>(Number(localStorage.getItem('currentExerciseNum')));
    const [duration, setDuration] = useState<number>(6);
    const [counter, setCounter] = useState<number>(5);
    const [colorTimer, setColorTimer] = useState<string>('#1DE9B6');
    const [title, setTitle] = useState<string>('Get Ready');
    const [workoutTime, setWorkoutTime] = useState<number>(0);
    const currentTimeout = useRef<any>(0);

    const [isReady, setIsReady] = useState<boolean>(true);
    const [isPause, setIsPause] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('currentExerciseNum', `${currentExerciseNum}`);
    }, [currentExerciseNum]);

    useEffect(() => {
        if(currentExerciseNum !== 0 && currentExerciseNum >= currentWorkout.length) {
            clearTimeout(currentTimeout.current);
            setIsComplete(true);
            localStorage.clear();
        }
    }, [currentExerciseNum, currentWorkout.length])

    useEffect(() => {
        if(!isPause && !isComplete) {
            if(counter === -1 && isReady) {
                nextExercise();
            } else if(counter === - 1 && !isReady) {
                nextGetReady(1);
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

    const nextGetReady = (prewOrNext: number) => {
        setCurrentExerciseNum(currentExerciseNum + prewOrNext);
        setCounter(5);
        setDuration(6);
        setColorTimer('#1DE9B6');
        setIsReady(true);
        setTitle('Get Ready');
    }

    const paused = () => {
        clearTimeout(currentTimeout.current);
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
                                        nextGetReady(-1);
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
                                        nextGetReady(1);
                                    }}
                                >
                                    &#9654;&#10073;
                                </ButtomPrewNext>
                            </div>
                        </MainBlockTimer>
                        {currentWorkout ? <Video
                            exerciseVideo={currentWorkout[currentExerciseNum]?.video}
                            poster={currentWorkout[currentExerciseNum]?.photo} 
                            isPause={isPause}
                            isReady={isReady}
                        /> : <BlockSpiner>
                        <PropagateLoader color={`${(props: any) => props.theme.colors.purple}`} />
                    </BlockSpiner>}
                        
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