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
            <BackGroundImage>
                <img src={cover_bg} alt=""/>
            </BackGroundImage>
            <Text>
               {/* <h2>TOMAR <span>DUAS</span> CAPSULAS</h2>
               <h2>  AO DIA</h2> */}
            </Text>
            {/* <Caps variants={FadeScaleCaps} initial='hidden' animate='show' >
                <img src={caps} alt=""/>
            </Caps> */}
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      height:30rem;
      @media screen and (max-width: 768px){
        height: 50rem;
        position: relative;
    }
`;

const BackGroundImage = styled(motion.div)`
     width: 100%;
     height: 100%;
     position: absolute;
     z-index: -100;
     object-fit: cover;
     top: 0;
     img {
         height: 100%;
         width: 100%;
         object-fit: cover;
     }


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
     width: 30rem;
     background: red;
     img {
         width: 40rem;
         @media screen and (max-width: 768px){
              width: 35rem;
     }
        
     }
     @media screen and (max-width: 768px){
        margin-right: 28rem;
        margin-top: 29rem;
    }

     /* @media screen and (min-width: 1500px){
        margin-right: 1400px;
        img{
            width: 800px;
            height: 700px;
        }
     } */

     /* @media screen and (max-width: 1600px){
        margin-right: 700px;
        img{
            width: 800px;
            height: 700px;
        }
     } */

`;



export default Cover;
