import React from "react";
import { Link } from "react-router-dom";
import { SpanInLink } from "../../components/controls/buttons";
import { CheckMarkPar, MainPar, MinutesPar, NumberPar, SecondPar } from "./CompletePage.styled";

export default function CompletePage({workoutTime}: any) {
    return (
        <>
            <CheckMarkPar>&#10003;</CheckMarkPar>
            <MainPar>Workout Completed!</MainPar>
            <SecondPar>Nice job. You're done. Here's the workout summary.</SecondPar>
            <MinutesPar>Minutes</MinutesPar>
            <NumberPar>{workoutTime}</NumberPar>
            <Link to='/'>
                <SpanInLink>Save & Continue</SpanInLink>
            </Link>
        </>
    );
}