import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import cover_bg from '../img/cover_bg.png'
import caps from '../img/flask_caps.png';

//Animation
import {FadeScaleCaps} from '../animations';



const Cover = () => {

    return (
        <StyledCover>
            <Text>
               <h2>TOMAR <span>DUAS</span> CAPSULAS</h2>
               <h2>  AO DIA</h2>
            </Text>
            <Caps variants={FadeScaleCaps} initial='hidden' animate='show' >
                <img src={caps} alt=""/>
            </Caps>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      background-image: url(${cover_bg});
      background-repeat: no-repeat;
      background-size: 100vw 90vh;
      min-height: 550px;
      width: 100%;
      margin-top: 5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
`;

const Text = styled(motion.div)`
     font-size: 0.8rem;
     margin-right: 10rem;
     text-align: left;
     font-family: 'Montserrat', sans-serif;
     margin-right: 15rem;
     margin-bottom: 10rem;
     h2 {
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
     margin-top: 350px;
     margin-right: 300px;
     z-index: 1;
     img { 
         width: 75%;
     }
`;



export default Cover;
