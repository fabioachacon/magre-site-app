import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import caps from '../img/flask_caps.png';
import cover from '../img/cover3.png';
import flask from '../img/flask_new.png';
import ticker from '../img/tick.png'


//Animation
import {StaggerAnim, TextAnim, FadeScale} from '../animations';

const Cover = () => {
    return (
        <StyledCover>
           <ImageCover>
               <img src={cover} alt=""/>
           </ImageCover>
           <CenterBox>
              <FlaskImage>
                  <motion.img src={flask} alt=""/>
                  <img className='ticker' src={ticker} alt=""/>
                  <Text variants={{...StaggerAnim, show: {...StaggerAnim.show, transition: {staggerChildren: 0.3}}}}>
                      <Hide>
                       <motion.h3 variants={TextAnim}>mais do que</motion.h3>
                      </Hide>
                      <Hide>
                       <motion.h3 variants={TextAnim}>um emagrecedor,</motion.h3>
                      </Hide>
                       <motion.h3 variants={FadeScale}><span>magrecaps</span></motion.h3>
                      <Hide>
                       <motion.h3 variants={TextAnim}>é energia</motion.h3>
                      </Hide>
                      <Hide>
                       <motion.h3 variants={TextAnim}>para a sua vida.</motion.h3>
                      </Hide>
                  </Text>
              </FlaskImage>
           </CenterBox>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      height:95vh;
      background: #e7e9eb;
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      @media screen and (max-width: 760px){
        height: 40rem;
        position: relative;
        top: 4rem;
    }
`;

const ImageCover = styled(motion.div)`
    height: 90%;
    position: absolute;
    width: 50%;
    left: -1rem;
    margin-top: 3.5rem;
    img{
        width: 100%;
        height: 100%;
        object-position: bottom;
        object-fit: fill;
    }

`;

const CenterBox = styled(motion.div)`
  height: 95%;
  width: 55%;
  display: flex;
  margin-bottom: -7rem;
  z-index: 1;
  position: relative;
  @media screen and (min-height: 800px){
    margin-bottom: -10rem;
  }
  @media screen and (max-width: 760px){
    margin-bottom: -10rem;
    margin-right: 0.5rem;
  }
`;

const FlaskImage = styled(motion.div)`
     height: 100%;
     width:66%;
     max-width: 60rem;
     display: flex;
     align-items: center;
     position: relative;
     img {
         width: 94%;
         height: 96%;
     }
     @media screen and (max-width: 760px){
        height: 87%;
        width: 75%;
    }
    .ticker{
      height: 5.5rem;
      width: 5.5rem;
      align-self: flex-start;
      position: absolute;
      margin-left: 14rem;
      margin-top: 0.5rem;
      @media screen and (max-width: 760px){
        margin-bottom: 10rem;
      }
  }
`;

const Text = styled(motion.div)`
    position: absolute;
    right: -1.5rem;
    margin-bottom: 14rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
         h3 {
             color: #917e41;;
             font-weight: normal;
         }
         span {
             font-weight: bold;
             color: #415740;
         }
    @media screen and (max-width: 760px){
        font-size: 1.1rem;
        right: -3rem;
        margin-top: 4rem;
    }
`;

const Hide = styled(motion.div)`
   overflow: hidden;

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
