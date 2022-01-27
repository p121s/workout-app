import { Link } from "react-router-dom";
import { SpanInLink } from "../../controls/SpanInLink";
import * as Styled from "./CompletePage.styled";
import { CompletePageProps } from "./CompletePage.interfaces";

export default function CompletePage({ workoutTime }: CompletePageProps): JSX.Element {
    return (
        <>
            <Styled.CheckMarkPar>&#10003;</Styled.CheckMarkPar>
            <Styled.MainPar>Workout Completed!</Styled.MainPar>
            <Styled.SecondPar>
                Nice job. You&apos;re done. Here&apos;s the workout summary.
            </Styled.SecondPar>
            <Styled.MinutesPar>Minutes</Styled.MinutesPar>
            <Styled.NumberPar>{workoutTime}</Styled.NumberPar>
            <Link to="/">
                <SpanInLink>Save & Continue</SpanInLink>
            </Link>
        </>
    );
}
