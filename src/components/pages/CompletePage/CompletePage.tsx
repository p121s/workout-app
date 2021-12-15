import React from "react";
import { Link } from "react-router-dom";
import { CheckMarkPar, MainPar, MinutesPar, NumberPar, SecondPar } from "./CompletePage.styled";

export default function CompletePage({workoutTime}: any) {
    return (
        <>
            <CheckMarkPar>&#10003;</CheckMarkPar>
            <MainPar>Workout Completed!</MainPar>
            <SecondPar>Nice job. You're done. Here's the workout summary.</SecondPar>
            <p>Burned Calories</p>
            <MinutesPar>Minutes</MinutesPar>
            <NumberPar>{workoutTime}</NumberPar>
            <Link to='/' className="start_workout">
                Save & Continue
            </Link>
        </>
    );
}