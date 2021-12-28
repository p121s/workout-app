import * as Styled from "./Timer.styled";
import { TimerProps } from "./Timer.interfases";

export default function Timer({
    sec,
    color,
    duration,
    isPause,
    isStart,
}: TimerProps): JSX.Element {
    return (
        <>
            {sec !== -1 && !isStart ? (
                <Styled.TimerBlock
                    color={color}
                    duration={duration}
                    isPause={isPause}
                >
                    <Styled.TimerLine
                        color={color}
                        duration={duration}
                        isPause={isPause}
                    ></Styled.TimerLine>
                    <Styled.TimerBody>
                        <Styled.TimerCounter color={color}>
                            {sec}
                        </Styled.TimerCounter>
                    </Styled.TimerBody>
                </Styled.TimerBlock>
            ) : (
                ""
            )}
        </>
    );
}
