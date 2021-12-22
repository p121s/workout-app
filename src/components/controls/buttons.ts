import styled from "styled-components";
import { ButtPrewNxt } from "./buttons.interfases";

export const SpanInLink = styled.span`
    width: 55.6%;
    text-align: center;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.purple};
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
    border: 2px solid ${({disabled, theme: {colors}}) => disabled ? colors.gray : colors.purple};
    color: ${({disabled, theme: {colors}}) => disabled ? colors.gray : colors.purple};
    margin: 10px;

    @media screen and (max-width: 500px) {
        width: 55px;
        height: 35px;
    }
`;

export const PauseButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.purple};
    color: white;
    font-weight: bold;
`;