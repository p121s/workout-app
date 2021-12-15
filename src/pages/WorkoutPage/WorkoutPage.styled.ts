import styled from 'styled-components';
import { ButtPrewNxt } from './WorkoutPage.interfases';

export const MainBlockTimer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
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

export const PauseDiv = styled.div`
    position: fixed;
    width: 100%;
    padding: 15px 0;
    left: 0;
    bootom: 0;
    border-top: 3px solid lightgray;
    margin-top: 25px;
`;

export const PauseButton = styled.button`
    padding: 19px 15px;
    border: none;
    border-radius: 40px;
    background-color: #AA00FF;
    color: white;
    font-weight: bold;
`;