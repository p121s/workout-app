import styled from "styled-components";
import { ButtPrewNxt } from "./buttons.interfases";

export const SpanInLink = styled.span`
    width: 55.6%;
    text-align: center;
    padding: 20px;
    background-color: #AA00FF;
    border: none;
    border-radius: 5px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-decoration: none;
    font-weight: 400;

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

export const ButtomPrewNext = styled.button<ButtPrewNxt>`
    width: 70px;
    height: 50px;
    background: white;
    border-radius: 7px;
    border: 2px solid ${({disabled}) => disabled ? 'gray' : '#AA00FF'} ;
    color: ${({disabled}) => disabled ? 'gray' : '#AA00FF'};
    margin: 10px;
`;

export const PauseButton = styled.button`
    padding: 19px 15px;
    border: none;
    border-radius: 40px;
    background-color: #AA00FF;
    color: white;
    font-weight: bold;
`;