import styled from "styled-components";
import { DivProps } from "./WorkoutDayCard.interfases";

export const MainDivDayCard = styled.div<DivProps>`
    width: 100%;
    height: 450px;
    border-radius: 7px;
    background: url("${({ background }) => background}") center / cover no-repeat gray;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
        border-radius: 0px;
    }
`;

export const ParagraphDayCard = styled.p`
    margin: 15px 0;

    @media screen and (max-width: 500px) {
        margin: 15px 15px;
    }
`;

export const ParDayNumber = styled(ParagraphDayCard)`
    font-size: 16px;
`;

export const ParWorkoutName = styled(ParagraphDayCard)`
    font-weight: bold;
`;

export const ParWorkoutDescription = styled(ParagraphDayCard)`
    font-size: 13px;
`;
