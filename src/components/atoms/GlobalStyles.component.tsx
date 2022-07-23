import { createGlobalStyle } from 'styled-components';
import { palette } from '../../constants';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.darker};
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
    text-align: center;
  }
`;
