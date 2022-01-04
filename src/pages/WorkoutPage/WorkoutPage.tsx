import { useState, useEffect, useRef } from "react";
import * as Styled from "./WorkoutPage.styled";
import * as Controls from "../../components/controls/buttons";
import { RootStateOrAny, useSelector } from "react-redux";
import Timer from "../../components/Timer/Timer";
import Video from "../../components/Video/Video";
import CompletePage from "../CompletePage/CompletePage";
import { Question } from "../Question.interfaces";
import { Exercise } from "../Exercise.interfaces";
import { BlockSpiner, Spinner } from "../../components/shared/shared.styled";

export default function WorkoutPage(): JSX.Element {
    const allWorkout = useSelector(
        (allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data
    );
    const [exercisesId] = useState(
        localStorage
            .getItem("exercisesId")
            ?.split(",")
            .map((id) => +id)
    );
    const [currentExerciseNum, setCurrentExerciseNum] = useState<number>(
        Number(localStorage.getItem("currentExerciseNum"))
    );
    const [currentWorkout, setCurrentWorkout] = useState<Exercise[]>([]);
    const [duration, setDuration] = useState<number>(6);
    const [timerCounter, setTimerCounter] = useState<number>(5);
    const [colorTimer, setColorTimer] = useState<string>("#1DE9B6");
    const [title, setTitle] = useState<string>("Get Ready");
    const [workoutTime, setWorkoutTime] = useState<number>(0);
    const currentTimeout = useRef<any>(0);

    const [isReady, setIsReady] = useState<boolean>(true);
    const [isPause, setIsPause] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [isTimerAnimatStart, setIsTimerAnimatStart] = useState(false);

    useEffect(() => {
        if (isTimerAnimatStart) {
            setIsTimerAnimatStart(false);
        }
    }, [isTimerAnimatStart]);

    useEffect(() => {
        const tempArrayAllExercises =
            allWorkout &&
            allWorkout.data.questions.map((question: Question) => question.exercises).flat();
        allWorkout &&
            setCurrentWorkout(
                tempArrayAllExercises.filter(
                    (exercise: Exercise) =>
                        exercise.id === exercisesId?.find((id) => id === exercise.id)
                )
            );
    }, [allWorkout, exercisesId]);

    useEffect(() => {
        localStorage.setItem("currentExerciseNum", `${currentExerciseNum}`);
    }, [currentExerciseNum]);

    useEffect(() => {
        if (
            currentExerciseNum !== 0 &&
            currentWorkout.length &&
            currentExerciseNum >= currentWorkout.length
        ) {
            clearTimeout(currentTimeout.current);
            setIsComplete(true);
            localStorage.clear();
        }
    }, [currentExerciseNum, currentWorkout.length]);

    useEffect(() => {
        if (!isPause && !isComplete) {
            if (timerCounter === -1 && isReady) {
                nextExercise();
            } else if (timerCounter === -1 && !isReady) {
                nextGetReady(1);
            } else {
                currentTimeout.current = setTimeout(() => {
                    setTimerCounter(timerCounter - 1);
                    setWorkoutTime(workoutTime + 1);
                }, 1000);
            }
        }
        return () => clearTimeout(currentTimeout.current);
    }, [timerCounter, isReady, isPause, currentTimeout.current]);

    const nextExercise = () => {
        setTimerCounter(currentWorkout[currentExerciseNum].duration);
        setDuration(currentWorkout[currentExerciseNum].duration + 1);
        setColorTimer("#FF4081");
        setIsReady(false);
        setTitle(currentWorkout[currentExerciseNum].title);
    };

    const nextGetReady = (prewOrNext: number) => {
        setCurrentExerciseNum(currentExerciseNum + prewOrNext);
        setTimerCounter(5);
        setDuration(6);
        setColorTimer("#1DE9B6");
        setIsReady(true);
        setTitle("Get Ready");
    };

    const paused = () => {
        clearTimeout(currentTimeout.current);
        setIsPause(!isPause);
    };

    return (
        <Styled.MainBlockWorkout>
            {!isComplete ? (
                <>
                    <h2>{title}</h2>
                    <Styled.MainBlockTimer>
                        <div>
                            <Controls.ButtomPrewNext
                                disabled={currentExerciseNum === 0 ? true : false}
                                onClick={() => {
                                    currentTimeout.current && clearTimeout(currentTimeout.current);
                                    setIsTimerAnimatStart(true);
                                    nextGetReady(-1);
                                }}
                            >
                                &#10073;&#9664;
                            </Controls.ButtomPrewNext>
                        </div>
                        <Timer
                            sec={timerCounter}
                            color={colorTimer}
                            duration={duration}
                            isPause={isPause}
                            isStart={isTimerAnimatStart}
                        />
                        <div>
                            <Controls.ButtomPrewNext
                                disabled={
                                    currentExerciseNum === currentWorkout.length - 1 ? true : false
                                }
                                onClick={() => {
                                    currentTimeout.current && clearTimeout(currentTimeout.current);
                                    setIsTimerAnimatStart(true);
                                    nextGetReady(1);
                                }}
                            >
                                &#9654;&#10073;
                            </Controls.ButtomPrewNext>
                        </div>
                    </Styled.MainBlockTimer>
                    {currentWorkout ? (
                        <Video
                            exerciseVideo={currentWorkout[currentExerciseNum]?.video}
                            isPause={isPause}
                            isReady={isReady}
                        />
                    ) : (
                        <BlockSpiner>
                            <Spinner />
                        </BlockSpiner>
                    )}

                    <Styled.PauseDiv>
                        <Controls.PauseButton onClick={paused}>
                            {isPause ? <span>&#9654;</span> : <span>&#10073;&#10073;</span>}
                        </Controls.PauseButton>
                    </Styled.PauseDiv>
                </>
            ) : (
                <CompletePage workoutTime={+((workoutTime + 1) / 60).toFixed(2)} />
            )}
        </Styled.MainBlockWorkout>
    );
}
