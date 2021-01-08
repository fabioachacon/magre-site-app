import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   html, 
   body {
      @media (max-width: 760px) {
         font-size: 40%;
      }
   }

`;