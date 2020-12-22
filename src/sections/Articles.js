import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import arrow from '../img/arrow.png';
import { FiArrowRight } from "react-icons/fi";

const Articles = () => {

    return (
        <StyledArticles id='articles'>
            <Title>
               <Text>
                 <h3>NOTÍCIAS &</h3>
                 <h3>ARTIGOS</h3>
               </Text>
            </Title>
            <CenterBox>
               <LeftBox>
                  <Story>
                    <OuterCircle>
                      <InnerCircle>
                        <p>28</p>
                        <p>nov</p>
                      </InnerCircle>
                    </OuterCircle>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius hic expedita sunt dolorem, tenetur esse!</h3>
                      </News>
                      <Arrow>
                        <a href="">VEJA MAIS</a>
                        <ArrowIcon />
                      </Arrow>
                    </HeadLine>
                  </Story>
                  <Story>
                    <OuterCircle>
                      <InnerCircle>
                        <p>28</p>
                        <p>nov</p>
                      </InnerCircle>
                    </OuterCircle>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nam!</h3>
                      </News>
                      <Arrow>
                        <a href="">VEJA MAIS</a>
                        <ArrowIcon />
                      </Arrow>
                    </HeadLine>
                  </Story>
                  <Story>
                    <OuterCircle>
                      <InnerCircle>
                        <p>28</p>
                        <p>nov</p>
                      </InnerCircle>
                    </OuterCircle>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum earum laboriosam doloribus mollitia vel nam.</h3>
                      </News>
                      <Arrow>
                        <a href="">VEJA MAIS</a>
                        <ArrowIcon />
                      </Arrow>
                    </HeadLine>
                  </Story>
               </LeftBox>
               <RightBox>
                 <Video>
                   <video controls src="https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4"></video>
                 </Video>
               </RightBox>
            </CenterBox>
        </StyledArticles>
    )
}

const StyledArticles = styled(motion.div)`
    height: 40rem;
    background: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
      height: 40rem;
    }
`;

const CenterBox = styled(motion.div)`
    height: 80%;
    width: 70%;
    display: flex;
    @media screen and (max-width: 768px){
      height: 80%;
      width: 90%;
  
    }
`;

const Title = styled(motion.div)`
   height: 4rem;
   margin-top: 6rem;
   display: flex;
   justify-content: center;
   width: 100%;
`;

const Text = styled(motion.div)`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.3rem;
    h3:nth-child(1){
      color: #415740;
    }
    h3:nth-child(2){
      color: #bcd24c;
    }
    @media screen and (max-width: 768px){
      width: 90%;
      font-size: 1.6rem;

    }
`;

const LeftBox = styled(motion.div)`
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Story = styled(motion.div)`
    height: 7rem;
    width: 100%;
    display: flex;
    margin-bottom: 0.3rem;
    align-items: center;
    @media screen and (max-width: 768px){
      margin-bottom: 0.8rem;
    }
    
`;

const OuterCircle = styled(motion.div)`
    width: 6rem;
    height: 85%;
    background: none;
    border: 2px solid #b5ca4a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerCircle = styled(motion.div)`
    width: 68%;
    height: 68%;
    background: #3f543e;
    border-radius: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    color: white;
    p:nth-child(1){
      font-weight: bolder;
      font-size: 1.4rem;
    }
    p:nth-child(2){
      font-size: 1.1rem;
      position: relative;
      bottom: 0.3rem;
    }
`;

const HeadLine = styled(motion.div)`
    width: 70%;
    height: 100%;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
`;

const News = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    justify-self: center;
    h3{
      display: flex;
      align-items: center;
      height: 90%;
      position: relative;
      top: 0.6rem;
      color: rgba(95, 95, 95, 255);
      font-size: 0.74rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: lighter;
    }
`;

const Arrow = styled(motion.div)`
   display: flex;
   align-self: center;
   align-items: center;
   position: relative;
   width: 80%;
   justify-content: flex-end;
   a{
     text-decoration: none;
     margin-right: 0.5rem;
     letter-spacing: 1.5px;
     font-weight: bold;
     font-size: 0.6rem;
     color: #a5b64f;
     font-family: 'Montserrat', sans-serif;
   }
   @media screen and (max-width: 768px){
       top: 0.4rem;
    }
`;

const ArrowIcon = styled(FiArrowRight)`
     display: flex;
     align-items: center;
     padding: 0.1rem;
     border: 1.4px solid #bacd55;
     color: gray;
     border-radius: 50%;
     font-size: 1.5rem;
`;

// Right Box

const RightBox = styled(motion.div)`
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Video = styled.div`
   width: 96%;
   height: 68%;
   position: relative;
   top: 0.4rem;
   video{
     width: 100%;
     height: 100%;
     object-fit: cover;
     outline: none;
   }
`;
  


export default Articles;

