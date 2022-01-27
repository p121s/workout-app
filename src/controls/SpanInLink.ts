import styled from "styled-components";

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