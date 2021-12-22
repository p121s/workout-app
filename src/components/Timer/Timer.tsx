import React from 'react';
import * as Styled from './Timer.styled';

export default function Timer({sec, color, duration, isPause}: any) {
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