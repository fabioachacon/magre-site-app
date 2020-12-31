import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import logo from '../img/logo-color.png'
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  
    return (
        <StyledFooter>
            <CenterBox>
              <SocialMedia>
                <div className="text">
                  <h2>siga o nosso instagram</h2>
                </div>
                <LogoWrapper>
                 <IntagramLogo />
                </LogoWrapper>
              </SocialMedia>
              <Magre>
                <div className="text">
                  Todos os direitos reservados a Magrecaps. &copy;2020
                </div>
                <MagreLogo>
                  <img src={logo} alt=""/>
                </MagreLogo>
              </Magre>
            </CenterBox>
        </StyledFooter>
    )
}


const StyledFooter = styled.div`
   height: 10vh;
   display: flex;
   justify-content: center;
   background: #ffffff;
   @media screen and (max-width: 768px){
    height: 7vh;
   }
`;

const CenterBox = styled.div`
    height: 100%;
    width: 75%;
    display: flex;
    max-width: 70rem;
    @media screen and (max-width: 760px){
      width: 100%;
    }
`;

const SocialMedia = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 1.2rem;
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      font-weight: normal;
      color: #998853;
      @media screen and (max-width: 760px){
        font-size: 1rem;
      }
    }
`;

const Magre = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .text{
    padding-right:1rem;
    font-family: 'Montserrat', sans-serif;
    color: rgba(135, 136, 139, 255);
    font-size: small;
    @media screen and (max-width: 760px){
       font-size: 1.2rem;
    }
  }
`;

const MagreLogo = styled.div`
   height: 50%;
   width: 20%;
   display: flex;
   align-items: center;
   justify-content: center;
   img {
     width: 100%;
     height: 100%
   }
`;

const LogoWrapper = styled.div`
   height: 35px;
   width: 36px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   border: 1px solid #acc142;
   margin-left: 0.5rem;
   @media screen and (max-width: 760px){
       height: 25px;
       width:26px;
    }
`;

const IntagramLogo = styled(AiOutlineInstagram)`
      font-size: 1.6rem;
      color: #acc142;
      cursor: pointer;
      @media screen and (max-width: 760px){
       font-size: 2.5rem;
      }
`;



export default Footer;
