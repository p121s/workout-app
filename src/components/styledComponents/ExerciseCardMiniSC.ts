import styled from 'styled-components';


export const MainDiv = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    textAlign: left;
    z-index: 5;
    transition: all 0.3s ease-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 3px 3px 5px lightgray;
    }
`;

export const DivImage = styled.div`
    margin-right: 15px;
    width: 74px;
    height: 74px;
`;

export const DivText = styled.div`

`;

export const Image = styled.img`
    margin: 5px;
    width: 64px;
    heidht: 64px;
    border-radius: 5px;
`;

export const Paragraph = styled.p`
    margin: 12px 0; 
`;

export const ParNameExercise = styled(Paragraph)`
    font-weight: bold;
`;

export const ParTime = styled(Paragraph)`
    font-size: 13px;
`;