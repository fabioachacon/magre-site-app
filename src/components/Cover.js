import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import cover from '../img/cover.png';
import caps from '../img/flask_caps.png';

//Animation
import {FadeScaleCaps} from '../animations';
import {useScroll} from '../components/useScroll';


const Cover = () => {

    const [element, controls] = useScroll();

    return (
        <StyledCover  ref={element} initial='hidden' animate={controls} >
            <Text>
               <motion.h2>O <span>SENE</span></motion.h2>
               <motion.h2><span>EXTRATO SECO</span></motion.h2>
               <motion.h2>QUE RESOLVE</motion.h2>
            </Text>
            <Caps variants={FadeScaleCaps} >
                <img src={caps} alt=""/>
            </Caps>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      background-image: url(${cover});
      background-repeat: no-repeat;
      background-size: 100% 500px;
      min-height: 500px;
      width: 100%;
      margin-top: 5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
`;

const Text = styled(motion.div)`
     font-size: 0.8rem;
     margin-right: 10rem;
     text-align: right;
     font-family: 'Montserrat', sans-serif;
     margin-right: 15rem;
     margin-bottom: 10rem;
     h2{
         font-weight: lighter;
         color: #415740;
         font-size: 1.5rem;
         span {
             color: #415740;
             font-weight: bold;
         }
     }

`;

const Caps = styled(motion.div)`
     position: absolute;
     margin-top: 330px;
     margin-right: 250px;
     z-index: 1;
     img{ 
         width: 74%;
     }
`;



export default Cover;
