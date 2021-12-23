import styled from "styled-components";
import { PropagateLoader } from 'react-spinners';

export const BlockSpiner = styled.div`
    text-align: center;
`;

export const Spinner = styled(PropagateLoader).attrs(({theme}: any) => ({color: theme.colors.purple,}))``;