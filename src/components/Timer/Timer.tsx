import { useRef, useState, useEffect } from "react";
import * as Styled from "./Timer.styled";
import { TimerProps } from "./Timer.interfaces";

export default function Timer({
    color,
    duration,
    isPause,
    isStart,
    isCompletedTimer,
}: TimerProps): JSX.Element {
    const currentTimeout = useRef<any>(0);
    const [timerCounter, setTimerCounter] = useState(0);

    useEffect(() => {
        setTimerCounter(duration);
    }, [duration, isStart]);

    useEffect(() => {
        if (timerCounter === -1) {
            isCompletedTimer();
        }
    }, [timerCounter]);

    useEffect(() => {
        if (timerCounter > -1 && !isPause) {
            currentTimeout.current = setTimeout(() => {
                setTimerCounter(timerCounter - 1);
            }, 1000);
        }
        return () => clearTimeout(currentTimeout.current);
    }, [timerCounter, isPause]);
    return (
        <>
            {timerCounter > -1 && !isStart ? (
                <Styled.TimerBlock color={color} duration={duration} isPause={isPause}>
                    <Styled.TimerLine
                        color={color}
                        duration={duration}
                        isPause={isPause}
                    ></Styled.TimerLine>
                    <Styled.TimerBody>
                        <Styled.TimerCounter color={color}>{timerCounter}</Styled.TimerCounter>
                    </Styled.TimerBody>
                </Styled.TimerBlock>
            ) : (
                ""
            )}
        </>
    );
}
