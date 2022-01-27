import styled from "styled-components";
import { PropagateLoader } from "react-spinners";

export const BlockSpinner = styled.div`
    text-align: center;
`;

export const Spinner = styled(PropagateLoader).attrs(({ theme }) => ({
    color: theme.colors.purple,
}))``;
