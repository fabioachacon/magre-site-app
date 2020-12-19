import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html {
      @media (max-width: 756px) {
         font-size: 40%;
      }
   }

`;