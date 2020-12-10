import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import logo from '../img/magre-logo.png';
import wtapp from '../img/wtapp.png';

const Nav = () => {
    return (
        <div className='mainNav'>
            <StyledNav>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul>
                    <li>SENE EXTRATO SECO</li>
                    <li>ATUAÇÃO</li>
                    <li>CONTRAINDICAÇÃO</li>
                    <li>COMPOSIÇÃO</li>
                    <li>CONTATO</li>
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
    
    }
    .wp-button{
        margin-right: 6rem;
        button {
            display: flex;
            align-items: center;
            padding: 0.5rem 1.3rem;
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
        font-size: 0.8rem;
        color:#616161;
        cursor: pointer;

    }

`;


export default Nav;

