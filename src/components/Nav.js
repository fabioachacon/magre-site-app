import React, {useRef} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

//Images
import logo from '../img/magre-logo.png';
import wtapp from '../img/wtapp.png';
import logo_color from '../img/logo-color.png';

//Animations
import {buttonAnim} from '../animations';

const Nav = () => {

    const listRef = useRef();
    
    const logoClickHandler = () => {
        scroll.scrollToTop();
    }

    const hoverHandler  = (e) => {
        
    }
    
    return (
        <div className='mainNav'>
            <StyledNav>
                <div className="logo" onClick={logoClickHandler}>
                    <motion.img whileHover={{scale: 1.1, transition: {duration: 0.5}}} src={logo_color} alt=""/>
                </div>
                <ul>
                    <li ref={listRef} onMouseEnter={hoverHandler} >
                     <Link to="presentation" smooth={true} offset={-80} duration={900}>SENE EXTRATO SECO</Link>
                     <Line className='line' />
                    </li>
                    <li>
                     <Link to="action" smooth={true} offset={-80} duration={900}>ATUAÇÃO</Link>
                     <Line className='line' />
                     </li>
                    <li>
                      <Link to="side-effects" smooth={true} offset={-100} duration={900}>CONTRAINDICAÇÃO</Link>
                      <Line className='line' />
                    </li>
                    <li>
                      <Link to="content-table" smooth={true} offset={-80} duration={900}>COMPOSIÇÃO</Link>
                      <Line className='line' />
                    </li>
                    {/* <li>
                      <Link>CONTATO</Link>
                      <Line />
                    </li> */}
                </ul>
                <motion.div variants={buttonAnim} whileHover='hover' className="wp-button">
                    <button>
                      <img src={wtapp} alt="icon"/>
                      <a href="https://duckduckgo.com/">whatsapp</a>
                    </button>
                </motion.div>
            </StyledNav>
        </div>
    )
}


const StyledNav = styled(motion.nav)`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #ffffff;
    height: 6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1000;
    .logo{
        margin-left: 5rem;
        cursor: pointer;
        img {
            margin-left: 5rem;
            width: 65%;

        }
        @media (min-width: 1500px){
              position: relative;
              left: 20rem;
              img {
                  width: 75%;
              }
        }
        }
    }
    .wp-button{
        margin-right: 10rem;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 2rem;
            background: #bcd24c;
            border: none;
            outline: none;
            border-radius: 1rem;
            color: white;
            font-weight: bold;
            font-family: Helvetica, sans-serif;
            cursor: pointer;
            a {
                color: white;
            }
        }
        img{
            margin-right: 10px;
            width: 25%;
        }
        @media (min-width: 1500px){
            margin-right: 30rem;
            button {
                padding: 0.8rem 3rem;
            }
        }
    }

    ul{
        margin-left: 5rem;
        display: flex;
        width: 100%;
        align-items: center;
        @media (min-width: 1500px){
            margin-left: 500px;
        }
    }
    li{
        list-style: none;
        margin-left: 2rem;
        font-size: 0.7rem;
        color:  rgba(97, 97, 97, 255);
        font-family: Helvetica, sans-serif;
        transition: all 0.5s ease-in-out;
        &:hover{
           opacity: 0.8;
        }
        @media (min-width: 1500px){
            font-size: 1.4rem;
        }
    }
    li:after{
        background: none repeat scroll 0 0 transparent;
        content: "";
        display: block;
        height: 2px;
        top: 0.5px;
        position: relative;
        background: #bcd24c;
        transition: width 0.5s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    li:hover:after {
        width: 100%;
        left: 0;

    }
    a{
        text-decoration: none;
        color:  rgba(97, 97, 97, 255);
        cursor: pointer;
    }
 
`;

const Line = styled(motion.div)`
   height: 0.1rem;
   background: #bcd24c;
   position: relative;
   top: 2px;
   width: 0%;
`;


export default Nav;

