import React from 'react';
import  * as Styled  from './ExerciseCardMini.styled';

export default function ExerciseCardMini({src, title, duration}: any) {
    return (
            <Styled.MainDiv>
                <Styled.DivImage>
                    <Styled.Image src={src} alt='Exercise' />
                </Styled.DivImage>
                <Styled.DivText>
                    <Styled.ParNameExercise>
                        {title}
                    </Styled.ParNameExercise>
                    <Styled.ParTime>
                        {duration} sec
                    </Styled.ParTime>
                </Styled.DivText>
            </Styled.MainDiv>
    );
}