import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import whatsapp from '../img/wtapp.png';
import logo from '../img/logo-color.png'
import { AiOutlineInstagram } from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  
    return (
        <StyledFooter>
           <CenterBox>
             <Buttons>
                <ButtonWrapper>
                  <a href="">
                    <button>
                     <WhatsAppIcon />
                     whatsapp
                    </button>
                  </a>
                </ButtonWrapper>
                <LogoWrapper>
                  <a href="">
                    <InstagramLogo />
                  </a>
                </LogoWrapper>
             </Buttons>
             <NameLogo>
               <h3>Todos os direitos reservados a MagreCaps.  ©2020</h3>
               <Logo>
                <img src={logo} alt=""/>
               </Logo>
             </NameLogo>
           </CenterBox>
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
  
`;

const Buttons = styled.div`
   width: 20%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   @media screen and (max-width: 768px){
     width: 35%;
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
   h3{
     font-size: 0.8rem;
     font-weight: lighter;
     color: gray;
     font-family: "Montserrat", sans-serif;
     @media screen and (max-width: 768px){
      font-size: 1rem;
      }
   }
   @media screen and (max-width: 768px){
      width: 60%;
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

const ButtonWrapper = styled(motion.div)`
    a{
      text-decoration: none;
      font-family: Helvetica, sans-serif;
      button {
      display: flex;
      cursor: pointer;
      align-items: center;
      padding: 0.4rem 1.3rem;
      background:#BCD24C;
      color: white;
      font-weight: bold;
      border-radius: 10rem;
      border: none;
      outline: none;
      @media screen and (max-width: 768px){
        padding: 0.8rem 1.2rem;
        font-size: 1.4rem;
      }
    }
    }

`;

const WhatsAppIcon = styled(FaWhatsapp)`
   color: white;
   font-size: 1.4rem;
   margin-right: 0.4rem;
   @media screen and (max-width: 768px){
       font-size: 3rem;
       margin-right: 0.8rem;
    }
`;

const LogoWrapper = styled.div`
  border: 1px solid #acc143;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 1px 3.5px;
  @media screen and (max-width: 768px){
    padding: 2px 3px;
   }

`;

const InstagramLogo = styled(AiOutlineInstagram)`
     font-size: 1.2rem;
     font-weight: bold;
     color: #acc143;
     position: relative;
     top: 2px;
     @media screen and (max-width: 768px){
      font-size: 2.6rem;
      top: 0.7px;
   }
`;




export default Footer;
