import React from "react";
import { Link } from "react-router-dom";
import { SpanInLink } from "../../components/controls/buttons";
import * as Styled from "./CompletePage.styled";

export default function CompletePage({workoutTime}: any) {
    return (
        <>
            <Styled.CheckMarkPar>&#10003;</Styled.CheckMarkPar>
            <Styled.MainPar>Workout Completed!</Styled.MainPar>
            <Styled.SecondPar>Nice job. You're done. Here's the workout summary.</Styled.SecondPar>
            <Styled.MinutesPar>Minutes</Styled.MinutesPar>
            <Styled.NumberPar>{workoutTime}</Styled.NumberPar>
            <Link to='/'>
                <SpanInLink>Save & Continue</SpanInLink>
            </Link>
        </>
    );
}