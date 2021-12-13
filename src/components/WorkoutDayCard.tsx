import React from 'react';
import { MainDivDayCard, ParDayNumber, ParWorkoutDescription, ParWorkoutName } from './styledComponents/WorkoutDayCardSC';

export default function WorkoutDayCard({backgroundSrc, day, workoutName, workoutDescription}: any) {

    return (
        <>
            <MainDivDayCard background={backgroundSrc}></MainDivDayCard>
            <ParDayNumber>Day {day}</ParDayNumber>
            <ParWorkoutName>{workoutName}</ParWorkoutName>
            <ParWorkoutDescription>{workoutDescription}</ParWorkoutDescription>
        </>
    );
}