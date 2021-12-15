import React from 'react';
import { TimerBlock, TimerLine, TimerBody, TimerCounter } from './Timer.styled';

export default function Timer({sec, color, duration}: any) {
    return (
        <>
            {
                sec !== -1 ? (
                <TimerBlock color={color} duration={duration}>
                        <TimerLine color={color} duration={duration}></TimerLine>
                        <TimerBody>
                            <TimerCounter color={color}>
                                {sec}
                            </TimerCounter>
                        </TimerBody>
                    </TimerBlock>
                ) : (
                    ''
                )  
            }
        </>
    )
}