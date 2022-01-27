import { useState, useEffect } from "react";
import * as Styled from "./WorkoutPage.styled";
import * as Controls from "../../components/controls/buttons";
import { RootStateOrAny, useSelector } from "react-redux";
import Timer from "../../components/Timer/Timer";
import Video from "../../components/Video/Video";
import CompletePage from "../CompletePage/CompletePage";
import { Exercise } from "../../interfaces/Exercise.interfaces";
import { BlockSpinner, Spinner } from "../../components/shared/shared.styled";
import { workingWithStorage } from "../../services/storageService/localStorageService";
import { getCurrentWorkoutFromExercisesIdsString } from "./getCurrentWorkout";
import { getNumbersArrayFromString } from "./getNumberArrayFromString";

export default function WorkoutPage(): JSX.Element {
    const { getStorageItem, setStorageItem, clearStorage } = workingWithStorage;
    const allWorkout = useSelector(
        (allExercises: RootStateOrAny) => allExercises.reducerAllExercises.data
    );
    const [exercisesId] = useState<number[]>(
        getNumbersArrayFromString(getStorageItem("exercisesId"))
    );
    const [currentExerciseNum, setCurrentExerciseNum] = useState<number>(
        Number(getStorageItem("currentExerciseNum"))
    );
    const [currentWorkout, setCurrentWorkout] = useState<Exercise[]>([]);
    const [duration, setDuration] = useState<number>(5);
    const [workoutTime, setWorkoutTime] = useState<number>(5);
    const [isCompletedTimer, setIsCompletedTimer] = useState(false);
    const [isReady, setIsReady] = useState<boolean>(true);
    const [isPause, setIsPause] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [isTimerAnimationStart, setIsTimerAnimationStart] = useState<boolean>(false);
    const [isVideoUploadError, setIsVideoUploadError] = useState<boolean>(false);
    
    useEffect(() => {
        if (isTimerAnimationStart) {
            setIsTimerAnimationStart(false);
        }
    }, [isTimerAnimationStart]);

    useEffect(() => {
        setWorkoutTime(workoutTime + duration);
    }, [duration]);

    useEffect(() => {
        allWorkout &&
            setCurrentWorkout(
                getCurrentWorkoutFromExercisesIdsString(allWorkout.data.questions, exercisesId)
            );
    }, [allWorkout, exercisesId]);

    useEffect(() => {
        setStorageItem("currentExerciseNum", `${currentExerciseNum}`);
    }, [currentExerciseNum]);

    const shouldBeCompleted = () => {
        if (
            currentExerciseNum !== 0 &&
            currentWorkout.length &&
            currentExerciseNum >= currentWorkout.length
        ) {
            return true;
        } else {
            return false;
        }
    };

    const toCompleteWorkout = () => {
        setIsComplete(true);
        clearStorage();
    };

    useEffect(() => {
        if (shouldBeCompleted()) {
            toCompleteWorkout();
        }
    }, [shouldBeCompleted]);

    const nextExercise = () => {
        setDuration(currentWorkout[currentExerciseNum].duration);
        setIsReady(false);
    };

    const nextGetReady = (prevOrNext: number) => {
        setCurrentExerciseNum(currentExerciseNum + prevOrNext);
        setDuration(5);
        setIsReady(true);
    };

    useEffect(() => {
        if (isCompletedTimer) {
            if (isReady) {
                nextExercise();
            } else {
                nextGetReady(1);
            }
        }
        setIsCompletedTimer(false);
    }, [isCompletedTimer, isReady]);

    const paused = () => {
        setIsPause(!isPause);
    };

    const handleCompletedTimer = () => {
        setIsCompletedTimer(true);
    };

    const handleVideoUploadError = () => {
        setIsVideoUploadError(true);
    }

    return (
        <Styled.MainBlockWorkout>
            {allWorkout && !isVideoUploadError ? (
                !isComplete ? (
                    <>
                        <h2>
                            {duration === 5
                                ? "Get Ready"
                                : currentWorkout[currentExerciseNum].title}
                        </h2>
                        <Styled.MainBlockTimer>
                            <div>
                                <Controls.ButtonPrevNext
                                    disabled={currentExerciseNum === 0 ? true : false}
                                    onClick={() => {
                                        setIsTimerAnimationStart(true);
                                        nextGetReady(-1);
                                    }}
                                >
                                    &#10073;&#9664;
                                </Controls.ButtonPrevNext>
                            </div>
                            <Timer
                                color={duration === 5 ? "#1DE9B6" : "#FF4081"}
                                duration={duration}
                                isPause={isPause}
                                isStart={isTimerAnimationStart}
                                isCompletedTimer={handleCompletedTimer}
                            />
                            <div>
                                <Controls.ButtonPrevNext
                                    disabled={
                                        currentExerciseNum === currentWorkout.length - 1
                                            ? true
                                            : false
                                    }
                                    onClick={() => {
                                        setIsTimerAnimationStart(true);
                                        nextGetReady(1);
                                    }}
                                >
                                    &#9654;&#10073;
                                </Controls.ButtonPrevNext>
                            </div>
                        </Styled.MainBlockTimer>
                        {currentWorkout ? (
                            <Video
                                exerciseVideo={currentWorkout[currentExerciseNum]?.video}
                                isPause={isPause}
                                isReady={isReady}
                                handleVideoUploadError={handleVideoUploadError}
                            />
                        ) : (
                            <BlockSpinner>
                                <Spinner />
                            </BlockSpinner>
                        )}

                        <Styled.PauseDiv>
                            <Controls.PauseButton onClick={paused}>
                                {isPause ? <span>&#9654;</span> : <span>&#10073;&#10073;</span>}
                            </Controls.PauseButton>
                        </Styled.PauseDiv>
                    </>
                ) : (
                    <CompletePage workoutTime={+((workoutTime + 1) / 60).toFixed(2)} />
                )
            ) : (
                "No internet connection"
            )}
        </Styled.MainBlockWorkout>
    );
}
