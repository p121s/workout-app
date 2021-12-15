import React from 'react';
import { TimerBlock, TimerLine, TimerBody, TimerCounter } from './Timer.styled';

export default function Timer({sec, color, duration}: any) {
    console.log(duration);
    return (
        <>
            <TimerBlock color={color} duration={duration}>
                <TimerLine color={color} duration={duration}></TimerLine>
                <TimerBody>
                    <TimerCounter>
                        {sec}
                    </TimerCounter>
                </TimerBody>
            </TimerBlock>
        </>
    );
}