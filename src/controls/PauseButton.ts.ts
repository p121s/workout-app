import styled from "styled-components";

export const PauseButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.purple};
    color: white;
    font-weight: bold;
`;
