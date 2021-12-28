import * as Styled from "./ExerciseCardMini.styled";
import { ExerciseCardMiniProps } from "./ExerciseCardMini.interfases";

export default function ExerciseCardMini({
    src,
    title,
    duration,
}: ExerciseCardMiniProps): JSX.Element {
    return (
        <Styled.MainDiv>
            <Styled.DivImage>
                <Styled.Image src={src} alt="Exercise" />
            </Styled.DivImage>
            <Styled.DivText>
                <Styled.ParNameExercise>{title}</Styled.ParNameExercise>
                <Styled.ParTime>{duration} sec</Styled.ParTime>
            </Styled.DivText>
        </Styled.MainDiv>
    );
}
