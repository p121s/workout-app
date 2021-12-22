import styled from "styled-components";
import { PropagateLoader } from 'react-spinners';

export const HR = styled.hr`
    border: none;
    height: 1px;
    background-color: lightgray;
    margin: 20px 0;
`;

export const BlockAllExercises = styled.div`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const Spinner = styled(PropagateLoader).attrs(({theme}: any) => ({color: theme.colors.purple,}))`
    color: ${({theme}) => theme.colors.purple};
`;
