import styled from "styled-components";

interface DivProps {
    background: string,
}

export const MainDivDayCard = styled.div<DivProps>`
    width: 100%;
    height: 450px;
    border-radius: 7px;
    background: url("${({background}) => background}") center / cover no-repeat gray;
`;

export const ParagraphDayCard = styled.p`
    margin: 15px 0;
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