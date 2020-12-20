import React, {useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

//Images
import wtapp from '../img/wtapp.png';
import logo_color from '../img/logo-color.png';
import {FaBars, FaWhatsapp} from 'react-icons/fa';


//Animations
import {buttonAnim} from '../animations';

const NavBarResp = () => {

    const [active, setActive] = useState(null);

    return (
        <Wrapper>
            <MagreLogo>
                <img src={logo_color} alt=""/>
            </MagreLogo>
           <NavBar> 
              <NavLinks>
                <li>
                 <Link to="presentation" smooth={true} offset={-80} duration={900}>SENE EXTRATO SECO</Link>
                </li>
                 <li>
                 <Link to="action" smooth={true} offset={-80} duration={900}>ATUAÇÃO</Link>
                </li>
                <li>
                 <Link to="side-effects" smooth={true} offset={-100} duration={900}>CONTRAINDICAÇÃO</Link>
                </li>
                <li>
                  <Link to="content-table" smooth={true} offset={-80} duration={900}>COMPOSIÇÃO</Link>
                </li>
              </NavLinks>
              <ButtonWrapper>
                 <button>
                    <WhatsAppIcon />
                    <a href="">whatsapp</a>
                  </button>
              </ButtonWrapper>
           </NavBar>
           <BurgerWrapper>
              <Burger />
           </BurgerWrapper> 
        </Wrapper>
    )
}


const Wrapper = styled.div`
     min-height: 15vh;
     background: white;
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     display: flex;
     justify-content: space-around;
     align-items: center;
     z-index: 1000;
    @media screen and (max-width: 768px){
        justify-content: space-between;
    }
`;

const NavBar = styled.nav`
   display: flex;
   align-items: center;
   width: 60%;
   justify-content: space-around;
   @media screen and (max-width: 1024px){
        width: 90%;
    }
  @media screen and (max-width: 768px){
    position: absolute;
    right: 0;
    height: 70vh;
    width: 55%;
    top: 14vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center; 
 }
`;

const NavLinks = styled.ul`
     list-style: none;
     display: flex;
     font-size: .7rem;
     width: 70%;
     justify-content: space-around;
    li {
        cursor: pointer;
        color: rgba(97, 97, 97, 255);
        font-family: Helvetica, sans-serif;
        transition: all 0.3s ease-in-out;
    &:hover{
        opacity: 0.8;
    }
    :after{
        content: "";
        display: block;
        height: 2px;
        top: 2px;
        position: relative;
        background: #bcd24c;
        transition: width 0.2s ease-in-out 0s, left 0.2s ease-in-out 0s;
        width: 0;
    }
    &:hover:after {
        width: 100%;
        left: 0;
    }
}
/* @media screen and (max-width: 2000px){
    width: 60%;
} */
@media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    height: 70%;
    font-size: 1.6rem;
}
`;

const MagreLogo = styled(motion.div)`
   margin-left: 2rem;
   img {
       height: 2.6rem;
   }
   @media screen and (max-width: 768px){
    margin-left: 3rem;
    img {
       height: 5.5rem;

     }
    }
`;

const ButtonWrapper = styled(motion.div)`
    button {
      display: flex;
      align-items: center;
      padding: 0.4rem 1.3rem;
      background: #bcd24c;
      font-weight: bold;
      border-radius: 10rem;
      border: none;
      outline: none;
      a{
        text-decoration: none;
        color: white;
        font-family: Helvetica, sans-serif;
      }
      @media screen and (max-width: 768px){
        padding: 1.4rem 3rem;
        margin-left: 1.3rem;
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

const Burger = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        font-size: 3.8rem;
        color: gray;
    }
`;

const BurgerWrapper = styled(motion.div)`
     margin-right: 5rem;

`;



export default NavBarResp;
