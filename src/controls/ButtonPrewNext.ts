import styled from "styled-components";
import { ButtPrevNxt } from "./buttons.interfaces";

export const ButtonPrevNext = styled.button<ButtPrevNxt>`
    width: 70px;
    height: 50px;
    background: white;
    border-radius: 7px;
    border: 2px solid
        ${({ disabled, theme: { colors } }) => (disabled ? colors.gray : colors.purple)};
    color: ${({ disabled, theme: { colors } }) => (disabled ? colors.gray : colors.purple)};
    margin: 10px;

    @media screen and (max-width: 500px) {
        width: 55px;
        height: 35px;
    }
`;