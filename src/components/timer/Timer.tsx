import React from 'react';
import { TimerProgress, TimerTextTime } from '../styledComponents/TimerSC';

export default function Timer({sec, color}: any) {
    return (
        <>
            <TimerProgress color={color}>
                <TimerTextTime color={color}>
                    {sec}
                </TimerTextTime>
            </TimerProgress>
        </>
    );
}