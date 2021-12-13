import React, { useState, useEffect } from 'react';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import RenderTime from '../RenderTime';
import { ButtomPrewNext, PauseButton, PauseDiv } from '../styledComponents/WorkoutPageSC';
import { RootStateOrAny, useSelector } from 'react-redux';
import Timer from '../timer/Timer';
import Video from '../Video';
import CompletePage from './CompletePage';
import './Timer.css';
import './ExercisesPage.css';
import './WorkoutPage.css';

export default function WorkoutPage() {

    const state = useSelector((state: RootStateOrAny) => state.data);
    const [questions] = useState(state && state.data.questions);
    const [duration, setDuration] = useState(5);
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
    console.log(numberExrcise, numberQuestion, numberOfExercises, numberOfQuestions);

    useEffect(() => {
        console.log(2);
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
        console.log(3);
        if(numberQuestion !== numberOfQuestions) {
            if(duration === -1 && isReady) {
                setDuration(questions[numberQuestion].exercises[numberExrcise].duration);
                setColorTimer('#FF4081');
                setIsReady(false);
                setTitle(questions[numberQuestion].exercises[numberExrcise].title);
            } else if(duration === - 1 && !isReady) {
                if(numberExrcise < numberOfExercises - 1) {
                    prewNextExercise(1);
                } else {
                    setNumberQuestion(numberQuestion + 1);
                    setNumberExercise(0);
                }
            } else {
                setTimeout(() => {
                        setDuration(duration - 1);
                        setWorkoutTime(workoutTime + 1);
                }, 1000);
            }
        }
    }, [duration, isReady, numberExrcise, numberOfExercises, numberOfQuestions, numberQuestion, questions]);

    const prewNextExercise = (prewOrNext: number) => {
        setNumberExercise(numberExrcise + prewOrNext);
        setExerciseVideo(questions[numberQuestion].exercises[numberExrcise].video);
        setDuration(5);
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
                        <div className='main_block-timer'>
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
                                <Timer sec={duration} color={colorTimer} />
                                {/* <CountdownCircleTimer
                                strokeWidth={8}
                                size={150}
                                isPlaying={true}
                                duration={duration}
                                colors={[
                                    ['#1DE9B6', 0.33],
                                    ['#FFA500', 0.33],
                                    ['#FFA500', 0.33],
                                    ['#FF0000', 0.33],
                                ]}
                                onComplete={() => [true, 1000]}
                                >
                                    {RenderTime}
                                </CountdownCircleTimer> */}
                            </div>
                            <div>
                                <ButtomPrewNext disabled={false} onClick={() => setNumberExercise(numberExrcise + 1)}>&#9654;&#10073;</ButtomPrewNext>
                            </div>
                        </div>
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