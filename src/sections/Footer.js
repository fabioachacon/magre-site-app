import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import whatsapp from '../img/wtapp.png';
import logo from '../img/logo-color.png';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="social">
              <Social>
                <button>
                  <img src={whatsapp} alt="icon"/>
                  <p>whatsapp</p>
                </button>
              </Social>
            </div>
            <TextLogo>
              <p>Todos os Direitos Reservados a Magrecaps. 2020</p>
              <img src={logo} alt=""/>
            </TextLogo>
        </StyledFooter>
    )
}

const StyledFooter = styled(motion.div)`
     height: 4rem;
     background: #ffffff;
     display: flex;
     justify-content: space-between;
     align-items: center;
`;

const  Logo = styled(motion.div)`
   
`;

const TextLogo = styled.div`
   margin-left: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   img {
       width: 15%;
       margin-left: 1.5rem;

   }
   p{
       font-size: 0.8rem;
       color: rgba(135, 136, 139, 255);
       font-family: 'Montserrat', sans-serif;
   }

`;

const Social = styled.div`
   button {
            margin-left: 4rem;
            display: flex;
            align-items: center;
            padding: 0.5rem 1.5rem;
            background: #bcd24c;
            border: none;
            outline: none;
            border-radius: 1.2rem;
            color: white;
            font-weight: bold;
            font-family: sans-serif;
            p {
                margin-left: 0.4rem;
            }
        }
`;


export default Footer;
