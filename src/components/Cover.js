import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import caps from '../img/flask_caps.png';
import cover from '../img/cover3.png';
import flask from '../img/flask_new.png';

//Animation
import {FadeScaleCaps} from '../animations';


const Cover = () => {

    return (
        <StyledCover>
           <ImageCover>
               <img src={cover} alt=""/>
           </ImageCover>
           <CenterBox>
              <FlaskImage>
                  <motion.img src={flask} alt=""/>
                  <div className="text">
                      <h3>mais do que</h3>
                      <h3>um emagrecedor,</h3>
                      <h3><span>magrecaps</span></h3>
                      <h3>é energia</h3>
                      <h3>para a sua vida.</h3>
                  </div>
              </FlaskImage>
           </CenterBox>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      height:96vh;
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
    left: -2rem;
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
  margin-bottom: -7rem;
  z-index: 1;
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
     .text{
         position: absolute;
         right: 0;
         margin-bottom: 15rem;
         text-transform: uppercase;
         font-family: 'Montserrat', sans-serif;
         h3 {
             color: #917e41;;
             font-weight: normal;
         }
         span {
             font-weight: bold;
             color: #415740;
         }
    @media screen and (max-width: 760px){
        font-size: 1.2rem;
        right: -4rem;
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
