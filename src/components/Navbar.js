import React, {useRef} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

//Images
import wtapp from '../img/wtapp.png';
import logo_color from '../img/logo-color.png';

//Animations
import {buttonAnim} from '../animations';

const Navbar = () => {

    const logoClickHandler = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav>
            <MagreLogo onClick={logoClickHandler}>
                <img src={logo_color} alt=""/>
            </MagreLogo>
            <List>
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
            </List>
            <WpButton>
                <button>
                    <div className="wp-logo">
                      <img src={wtapp} alt=""/>
                    </div>
                    <a href="">whatsapp</a>
                </button>
            </WpButton>
        </Nav>
    )
}

const Nav = styled(motion.div)`
    height: 6rem;
    width: 100%;
    top: 0;
    background: #ffffff;
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const List = styled(motion.div)`
    margin-right: 1rem;
    li {
        display: inline-block;
        list-style: none;
        font-size: 0.7rem;
        margin-left: 3rem;
        cursor: pointer;
        color: rgba(97, 97, 97, 255);
        font-family: Helvetica, sans-serif;
    }
    li:after{
        content: "";
        display: block;
        height: 2px;
        top: 2px;
        position: relative;
        background: #bcd24c;
        transition: width 0.2s ease-in-out 0s, left 0.2s ease-in-out 0s;
        width: 0;
    }
    li:hover:after {
        width: 100%;
        left: 0;
    }
`;

const MagreLogo = styled(motion.div)`
   cursor: pointer;
   img {
       width: 11rem;
   }
`;

const WpButton = styled(motion.div)`
    position: relative;
    right: 3rem;
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
      img{
          margin-top: 0.2rem;
          margin-right: 0.4rem;
          width: 1.2rem;
      }
    }
`;


export default Navbar;
