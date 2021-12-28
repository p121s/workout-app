import styled, { keyframes } from "styled-components";
import { TimerLineAngBlockProps } from "./Timer.interfases";

const lineRotate = keyframes`
    0% {}
    100% {
        transform: rotate(360deg);
    }
`;

const maskLeft = keyframes`
    0% {
        visibility: visible;
    }
    50% {
        visibility: hidden;
    }
    100% {
        visibility: hidden;
    }
`;

const maskRight = keyframes`
    0% {
        visibility: hidden;
    }
    50% {
        visibility: visible;
    }
    100% {
        visibility: visible;
    }
`;

export const TimerBlock = styled.div<TimerLineAngBlockProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: white;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: ${({ color }) => color};
        z-index: 4;
        animation: ${maskLeft} ${({ duration }) => duration}s steps(1, end)
            forwards;
        animation-play-state: ${({ isPause }) =>
            isPause ? `paused` : `running`};
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: white;
        z-index: 4;
        animation: ${maskRight} ${({ duration }) => duration}s steps(1, end)
            forwards;
        animation-play-state: ${({ isPause }) =>
            isPause ? `paused` : `running`};
    }

    @media screen and (max-width: 500px) {
        width: 115px;
        height: 115px;
    }
`;

export const TimerLine = styled.div<TimerLineAngBlockProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    animation: ${lineRotate} ${({ duration }) => duration}s linear forwards;
    animation-play-state: ${({ isPause }) => (isPause ? `paused` : `running`)};

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.white};
    }
`;

export const TimerBody = styled.div`
    display: flex;
    justify-content: center;
    aling-items: center;
    width: 135px;
    height: 135px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    z-index: 5;

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 100px;
    }
`;

export const TimerCounter = styled.div`
    font-size: 40px;
    margin-top: 45px;
    color: ${({ color }) => color};

    @media screen and (max-width: 500px) {
        font-size: 30px;
        margin-top: 35px;
    }
`;
