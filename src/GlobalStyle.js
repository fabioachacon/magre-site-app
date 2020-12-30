import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   html, 
   body {
      @media (max-width: 756px) {
         font-size: 40%;
      }
   }

`;