import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import logo from '../img/logo-color.png'
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  
    return (
        <StyledFooter>
         
        </StyledFooter>
    )
}


const StyledFooter = styled.div`
   height: 10vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: #ffffff;
   @media screen and (max-width: 768px){
    height: 8vh;
   }

`;

const CenterBox = styled.div`
   height: 80%;
   width: 85%;
   display: flex;
   justify-content: space-around;
   @media screen and (max-width: 768px){
     width: 100%;
     justify-content: space-between;
   }
   @media screen and (max-width: 320px){
     background: white;
  
   }
  
`;

const Buttons = styled.div`
   width: 80%;
   height: 100%;
   background: red;
   
   @media screen and (max-width: 768px){
     width: 35%;
   }
   @media screen and (max-width: 320px){
    width: 40%;
   }
`;

const NameLogo = styled.div`
   height: 100%;
   width: 45%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   justify-self: center;
   margin-right: 3rem;
   p{
     font-size: 0.8rem;
     color: gray;
     font-family: "Montserrat", sans-serif;
     @media screen and (max-width: 768px){
      font-size: 1rem;
    }
   }
   @media screen and (max-width: 768px){
      width: 90%;
  }
`;

const Logo = styled.div`
   width: 25%;
   height: 100%;
   display: flex;
   align-items: center;
    img {
      width: 100%;
    }
    @media screen and (max-width: 768px){
      font-size: 1rem;
      width: 27%;
    }
`;


const LogoWrapper = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #acc143;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    padding: 2px 3px;
   }
   @media screen and (max-width: 320px){
    padding: 1px 2px;
   }

`;

const InstagramLogo = styled(AiOutlineInstagram)`
     font-size: 1.3rem;
     font-weight: bold;
     color: #acc143;
     position: relative;
     top: 2px;
     @media screen and (max-width: 768px){
      font-size: 2.6rem;
      top: 0.7px;
    }
   @media screen and (max-width: 320px){
      font-size: 2rem;
      top: 0.7px;
   }
`;




export default Footer;
