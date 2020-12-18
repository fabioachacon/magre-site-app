import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import arrow from '../img/arrow.png';

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
                    <CircleOut>
                      <CircleIn>
                        <p>28</p>
                        <p>nov</p>
                      </CircleIn>
                    </CircleOut>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil, ea temporibus ipsum eaque quam assumenda est architecto qui distinctio!</h3>
                      </News>
                      <Arrow>
                        <a href="">veja mais</a>
                        <div className="icon">
                          <img src={arrow} alt=""/>
                        </div>
                      </Arrow>
                    </HeadLine>
                  </Story>
                  <Story>
                    <CircleOut>
                      <CircleIn>
                        <p>28</p>
                        <p>nov</p>
                      </CircleIn>
                    </CircleOut>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus deleniti officiis id sed saepe, temporibus quis sequi amet sunt.</h3>
                      </News>
                      <Arrow>
                        <a href="">veja mais</a>
                        <div className="icon">
                          <img src={arrow} alt=""/>
                        </div>
                      </Arrow>
                    </HeadLine>
                  </Story>
                  <Story>
                    <CircleOut>
                      <CircleIn>
                        <p>28</p>
                        <p>nov</p>
                      </CircleIn>
                    </CircleOut>
                    <HeadLine>
                      <News>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus deleniti officiis id sed saepe, temporibus quis sequi amet sunt.</h3>
                      </News>
                      <Arrow>
                        <a href="">veja mais</a>
                        <div className="icon">
                          <img src={arrow} alt=""/>
                        </div>
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
    height: 32rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const CenterBox = styled(motion.div)`
    height: 25rem;
    width: 60rem;
    display: flex;
`;

const Title = styled(motion.div)`
   height: 4rem;
   margin-top: 3rem;
   display: flex;
   justify-content: center;
   width: 100%;
`;

const Text = styled(motion.div)`
    height: 100%;
    width: 60rem;
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
    margin-bottom: 0.2rem;
    align-items: center;
`;

const CircleOut = styled(motion.div)`
    width: 6rem;
    height: 85%;
    background: none;
    border: 2px solid #b5ca4a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleIn = styled(motion.div)`
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
      top: 0.5rem;
      color: rgba(95, 95, 95, 255);
      font-size: 0.7rem;
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
   .icon{
     display: flex;
     align-items: center;
     padding: 0.3rem 0.2rem;
     border: 1.4px solid #bacd55;
     border-radius: 50%;
     img{
       width: 0.9rem;
     }
   }
   a{
     text-decoration: none;
     margin-right: 0.5rem;
     font-size: 0.7rem;
     color: #bacd55;
     font-family: 'Montserrat', sans-serif;
   }
`;

// Right Box

const RightBox = styled(motion.div)`
    width: 65%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Video = styled.div`
   width: 100%;
   height: 81%;
   position: relative;
   top: 0.4rem;
   video{
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
`;
  


export default Articles;

