import styled from "styled-components";

export const AppBlock = styled.div`
    width: 55.6%;
    height: ${document.documentElement.clientHeight};
    margin: 50px auto 120px;

    @media screen and (max-width: 500px) {
        margin: 0 auto 95px;
        width: 100%;
    }
`;