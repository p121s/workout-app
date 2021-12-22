import React from 'react';
import * as Styled from './Timer.styled';
import { TimerProps } from './Timer.interfases';

export default function Timer({sec, color, duration, isPause}: TimerProps) {
    return (
        <>
            {
                sec !== -1 ? (
                <Styled.TimerBlock color={color} duration={duration} isPause={isPause}>
                        <Styled.TimerLine color={color} duration={duration} isPause={isPause}></Styled.TimerLine>
                        <Styled.TimerBody>
                            <Styled.TimerCounter color={color}>
                                {sec}
                            </Styled.TimerCounter>
                        </Styled.TimerBody>
                    </Styled.TimerBlock>
                ) : (
                    ''
                )  
            }
        </>
    )
}