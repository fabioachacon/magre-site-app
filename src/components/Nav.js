import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import {useLocation} from 'react-router-dom';


//Images
import logo from '../img/magre-logo.png';
import wtapp from '../img/wtapp.png';


const Nav = () => {
    const logoClickHandler = () => {
        scroll.scrollToTop();
    }
    
    return (
        <div className='mainNav'>
            <StyledNav>
                <div className="logo" onClick={logoClickHandler}>
                    <motion.img whileHover={{scale: 1.1, transition: {duration: 0.5}}} src={logo} alt=""/>
                </div>
                <ul>
                    <li>
                     <Link to="presentation" smooth={true} offset={-80} duration={900}>SENE EXTRATO SECO</Link>
                     <Line 
                     transition={{duration: 0.75}} 
                     initial={{width: "0%"}}
                     animate={{width: "100%"}}
                      />
                    </li>
                    <li>
                     <Link to="action" smooth={true} offset={-80} duration={900}>ATUAÇÃO</Link>
                     <Line />
                     </li>
                    <li>
                      <Link to="">CONTRAINDICAÇÃO</Link>
                      <Line />
                    </li>
                    <li>
                      <Link to="content-table" smooth={true} offset={-80} duration={900}>COMPOSIÇÃO</Link>
                      <Line />
                    </li>
                    <li>
                      <Link>CONTATO</Link>
                      <Line />
                    </li>
                </ul>
                <div className="wp-button">
                    <button>
                    <img src={wtapp} alt="icon"/>
                     whatsapp
                    </button>
                </div>
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
        margin-left: 3rem;
        cursor: pointer;
        img {
            margin-left: 5rem;
            width: 55%;

        }
    }
    .wp-button{
        margin-right: 6rem;
        button {
            display: flex;
            align-items: center;
            padding: 0.5rem 1.5rem;
            background: #bcd24c;
            border: none;
            outline: none;
            border-radius: 1rem;
            color: white;
            font-weight: bold;
            font-family: sans-serif;
        }
        img{
            margin-right: 10px;
            width: 20%;
        }
    }

    ul{
        margin-right: 3rem;
        display: flex;
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

