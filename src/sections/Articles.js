import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import arrow from '../img/arrow.png';

const Articles = () => {
    return (
        <StyledArticles id='articles'>
            <Title>
              <Text>
                <h2>NOTÍCIAS &</h2>
                <h2>ARTIGOS</h2>
              </Text>
            </Title>
            <BoxWrapper>
               <Stories>
                  <Circle>
                     <OutSide>
                       <Inside>
                         <p>28</p>
                         <p>Nov</p>
                       </Inside>
                     </OutSide>
                     <div className="text">
                       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae.</h3>
                     </div>
                     <Arrow>
                       <a href="">veja mais</a>
                       <img src={arrow} alt=""/>
                     </Arrow>
                  </Circle>
                  <Circle>
                     <OutSide>
                       <Inside>
                         <p>28</p>
                         <p>Nov</p>
                       </Inside>
                     </OutSide>
                     <div className="text">
                       <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, soluta?</h3>
                     </div>
                     <Arrow>
                       <a href="">veja mais</a>
                       <img src={arrow} alt=""/>
                     </Arrow>
                  </Circle>
                  <Circle>
                     <OutSide>
                       <Inside>
                          <p>28</p>
                          <p>Nov</p>
                       </Inside>
                     </OutSide>
                     <div className="text">
                       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi.</h3>
                     </div>
                     <Arrow>
                       <a href="">veja mais</a>
                       <img src={arrow} alt=""/>
                     </Arrow>
                  </Circle>
               </Stories>
               <Video>
                  <video controls src="https://firebasestorage.googleapis.com/v0/b/neural-connect-frb.appspot.com/o/v1.mp4?alt=media&token=d70802bb-c503-431d-8bc4-35be854efc18"></video>
               </Video>
            </BoxWrapper>
        </StyledArticles>
    )
}

const StyledArticles = styled(motion.div)`
    min-height: 520px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  
`;

const BoxWrapper = styled(motion.div)`
     height: 400px;
     width: 900px;
     display: flex;
     justify-content: space-around;
     align-items: center;
`;

const OutSide = styled(motion.div)`
    height: 90px;
    width: 90px;
    border: 2px solid #c6d672;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
 `;

 const Inside = styled(motion.div)`
      height: 55px;
      width: 55px;
      background: #3f543e;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 50%;
      p:nth-child(1){
        font-weight: bolder;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.1rem;
      }
      p:nth-child(2){
        font-weight: 400;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
      }
 `;

 const Circle = styled(motion.div)`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      margin-top: 30px;
      h3{
        left: 10px;
        font-size: 0.7rem;
        color: rgba(95, 95, 95, 255);
        position: relative;
        max-width: 200px;
        font-family: 'Montserrat', sans-serif;
        text-align: left;

      }
 `;

 const Stories = styled(motion.div)`
     display: flex;
     flex-direction: column;
     width: 55%;
     height: 100%;
     justify-content: center;
     margin-left: 2rem;
     margin-bottom: 2rem;
 `;

 const Arrow = styled(motion.div)`
      display: flex;
      align-self: flex-end;
      justify-self: flex-end;
      width: 21%;
      height: 30px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      right: 40px;
      img{
        border: 1px solid rgba(181, 202, 74, 255);
        border-radius: 60%;
        padding: 7px 5px;
        width: 27%;
      }
      a{
        text-decoration: none;
        font-size: 0.72rem;
        font-family: 'Montserrat', sans-serif;
        color: rgba(181, 202, 74, 255);
      }
 `;

 const Video = styled(motion.div)`
       height: 260px;
       width: 55%;
       margin-right: 5rem;
       video {
         object-fit: cover;
         width: 100%;
         height: 100%;
       }
 `;

const Title = styled(motion.div)`
    height: 60px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
`;

const Text = styled(motion.div)`
    width: 64%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.9rem;
    font-family: "Montserrat", sans-serif;
    h2:nth-child(1){
      color: #415740;
    }
    h2:nth-child(2){
      color: #bcd24c;
    }
`;

export default Articles;

