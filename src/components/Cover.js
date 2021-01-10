import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import caps from '../img/flask_caps.png';
import cover from '../img/cover3.png';
import flask from '../img/flask_new_mod.png';
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
                       <motion.h3 variants={FadeScale}><span>magre caps</span></motion.h3>
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
      height:85vh;
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
    height: 100%;
    position: absolute;
    width: 60%;
    left: 0;
    img{
      width: 100%;
      height: 100%;
      object-position: -5rem;
      object-fit: fill;
      @media screen and (max-width: 760px){
        object-position: -5rem 4rem;
      }
    }
`;

const CenterBox = styled(motion.div)`
  height: 100%;
  width: 53%;
  display: flex;
  z-index: 1;
  position: relative;
  @media screen and (min-height: 800px){
    margin-bottom: -10rem;
  }
  @media screen and (max-width: 760px){
    height: 90%;
    width: 54%;
    margin-bottom: -3rem;
  }
`;

const FlaskImage = styled(motion.div)`
     height: 100%;
     width: 68%;
     max-width: 60rem;
     display: flex;
     align-items: flex-end;
     position: relative;
     margin-top: 4rem;
     img {
         width: 90%;
         height: 100%;
     }
     @media screen and (max-width: 760px){
        height: 100%;
        width: 80%;
    }
    .ticker{
        height: 6rem;
        width: 6rem;
        align-self: flex-start;
        position: absolute;
        margin-left: 15rem;
      @media screen and (max-width: 760px){
        margin-bottom: 10rem;
      }
  }
`;

const Text = styled(motion.div)`
    position: absolute;
    right: -2rem;
    top: 0;
    margin-top: 7.5rem;
    text-transform: uppercase;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
         h3 {
             color: #917e41;;
             font-weight: normal;
         }
         span {
             font-weight: bold;
             color: #415740;
         }
    @media screen and (max-width: 760px){
        font-size: 1.4rem;
        right: -3rem;
    }
`;

const Hide = styled(motion.div)`
   overflow: hidden;

`;


export default Cover;
