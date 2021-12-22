import React from 'react';
import * as Styled from './WorkoutDayCard.styled';

export default function WorkoutDayCard({backgroundSrc, day, workoutName, workoutDescription}: any) {

    return (
        <>
            <Styled.MainDivDayCard background={backgroundSrc}></Styled.MainDivDayCard>
            <Styled.ParDayNumber>Day {day}</Styled.ParDayNumber>
            <Styled.ParWorkoutName>{workoutName}</Styled.ParWorkoutName>
            <Styled.ParWorkoutDescription>{workoutDescription}</Styled.ParWorkoutDescription>
        </>
    );
}