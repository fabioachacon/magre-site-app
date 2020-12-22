import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

//Images
import wtapp from '../img/wtapp.png';
import logo_color from '../img/logo-color.png';
import {FaBars, FaWhatsapp} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';


//Animations
import {buttonAnim} from '../animations';

const NavBarResp = () => {
    
    const [activeState, setActiveState] = useState(false);

    const toggleSideBar = () => {
        setActiveState(!activeState);
    }

    const logoClickHandler = () => {
        scroll.scrollToTop();
    }

    return (
        <Wrapper>
            <MagreLogo onClick={logoClickHandler}>
                <img src={logo_color} alt="magre logo"/>
            </MagreLogo>
            <NavBar className={activeState ? 'active': ''}> 
              <NavLinks>
                <li>
                 <Link to="presentation" smooth={true} offset={-80} duration={900}>SENE EXTRATO SECO</Link>
                </li>
                 <li>
                 <Link to="action" smooth={true} offset={-80} duration={900}>ATUAÇÃO</Link>
                </li>
                <li>
                 <Link to="articles" smooth={true} offset={-100} duration={900}>ARTIGOS</Link>
                </li>
                <li>
                  <Link to="content-table" smooth={true} offset={-80} duration={900}>COMPOSIÇÃO</Link>
                </li>
              </NavLinks>
              <ButtonWrapper>
                  <a href="">
                    <button>
                      <WhatsAppIcon />
                       whatsapp
                    </button>
                  </a>
              </ButtonWrapper>
           </NavBar>
           <BurgerWrapper onClick={toggleSideBar}>
              {activeState ? <Close /> : <Burger />}
           </BurgerWrapper> 
        </Wrapper>
    )
}


const Wrapper = styled.div`
     height: 15vh;
     background: white;
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     z-index: 1000;
    @media screen and (max-width: 768px){
        justify-content: space-between;
        height: 11vh;
        .active {
            transform: translateX(0%); 
        }
    }
`;

const NavBar = styled.nav`
   display: flex;
   align-items: center;
   width: 54%;
   justify-content: space-around;
   @media screen and (max-width: 1024px){
        width: 90%;
    }
   @media screen and (max-width: 768px){
        position: absolute;
        right: 0;
        height: 50vh;
        width: 55%;
        top: 10.3vh;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateX(100%); 
        transition: transform 0.3s ease-in;
        justify-content: space-evenly;
 }
`;

const NavLinks = styled.ul`
     list-style: none;
     display: flex;
     font-size: .7rem;
     width: 75%;
     justify-content: space-evenly;
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
    height: 60%;
    font-size: 1.6rem;
}
`;

const MagreLogo = styled(motion.div)`
   margin-left: 2rem;
   position: relative;
   left: 2.5rem;
   cursor: pointer;
   img {
       height: 2.6rem;
   }
   @media screen and (max-width: 768px){
    margin-left: 3rem;
    img {
       height: 6.5rem;
     }
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
        background: #bcd24c;
        color: white;
        font-weight: bold;
        border-radius: 10rem;
        border: none;
        outline: none;
        @media screen and (max-width: 768px){
           padding: 1.4rem 3rem;
           margin-left: 1.3rem;
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

const BurgerWrapper = styled(motion.div)`
     margin-right: 5rem;
     cursor: pointer;
`;

const Burger = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        font-size: 3.5rem;
        color: gray;
    }
`;

const Close = styled(IoMdClose)`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        font-size: 4rem;
        color: gray;
    }
`;



export default NavBarResp;
