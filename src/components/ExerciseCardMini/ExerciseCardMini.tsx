import React from 'react';
import { MainDiv, DivImage, Image, DivText, ParNameExercise, ParTime } from './ExerciseCardMini.styled';

export default function ExerciseCardMini({src, title, duration}: any) {
    return (
        <>
            <MainDiv>
                <DivImage>
                    <Image src={src} alt='Exercise' />
                </DivImage>
                <DivText>
                    <ParNameExercise>
                        {title}
                    </ParNameExercise>
                    <ParTime>
                        {duration} sec
                    </ParTime>
                </DivText>
            </MainDiv>
        </>
    );
}