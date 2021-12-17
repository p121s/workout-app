import React, { useState, useEffect } from 'react';
import { MainBlockTimer, ButtomPrewNext, PauseButton, PauseDiv } from './WorkoutPage.styled';
import { RootStateOrAny, useSelector } from 'react-redux';
import Timer from '../../components/Timer/Timer';
import Video from '../../components/Video/Video';
import CompletePage from '../CompletePage/CompletePage';

export default function WorkoutPage() {

    const state = useSelector((state: RootStateOrAny) => state.data);
    const [duration, setDuration] = useState(6);
    const [counter, setCounter] = useState(5);
    const [isReady, setIsReady] = useState(true);
    const [allExercises, setAllExercises] = useState<any[]>([]);
    const [currentExerciseNum, setCurrentExerciseNum] = useState<number>(0);
    const [colorTimer, setColorTimer] = useState('#1DE9B6');
    const [isComplete, setIsComplete] = useState(false);
    const [title, setTitle] = useState('Get Ready');
    const [workoutTime, setWorkoutTime] = useState(0);
    const [isPause, setIsPause] = useState(false);
    console.log(allExercises[currentExerciseNum]?.video);
    

    useEffect(() => {
        state && setAllExercises(state.data.questions.map(({exercises}: any) => exercises).flat());
    }, [state])

    useEffect(() => {
        console.log(allExercises.length);
        if(currentExerciseNum !==0 && currentExerciseNum === allExercises.length) {
            setIsComplete(true);
        }
    }, [allExercises, allExercises.length, currentExerciseNum])

    useEffect(() => {
        if(!isPause) {
            if(counter === -1 && isReady) {
                nextGetReady();
            } else if(counter === - 1 && !isReady) {
                nextExercise();
            } else {
                const timeout = setTimeout(() => {
                        setCounter(counter - 1);
                        setWorkoutTime(workoutTime + 1);
                }, 1000);
                // clearTimeout(timeout);
            }
        }
    }, [counter, isReady, isPause]);

    const nextGetReady = () => {
        setCounter(allExercises[currentExerciseNum].duration);
        setDuration(allExercises[currentExerciseNum].duration + 1);
        setColorTimer('#FF4081');
        setIsReady(false);
        setTitle(allExercises[currentExerciseNum].title);
    }

    const nextExercise = () => {
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
                                        setCurrentExerciseNum(currentExerciseNum - 1);
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
                                    disabled={currentExerciseNum === allExercises.length - 1 ? true : false}
                                    onClick={() => setCurrentExerciseNum(currentExerciseNum + 1)}
                                >
                                    &#9654;&#10073;
                                </ButtomPrewNext>
                            </div>
                        </MainBlockTimer>
                        <Video
                            exerciseVideo={allExercises[currentExerciseNum]?.video}
                            poster={allExercises[currentExerciseNum]?.photo} />
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