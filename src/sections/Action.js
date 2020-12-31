import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {useScroll} from '../components/useScroll';
import AnimatedPoint from '../components/AnimatedPoint';
import trimmed from '../audio/trimmed.mp3';
import man from '../img/man.png';
import mancover from '../img/man_new.png';
import flask_caps from '../img/flask_caps2.png';
import {InfoList} from '../info';
import {TextFade, 
        FadeScale, 
        Fade, 
        StaggerAnim} from '../animations';

 
        
const Action = () => {
   const [state, setState] = useState(InfoList);
   const [active, setActive] = useState(state[0])
   const [element, controls] = useScroll();
   const audioRef = useRef();

    useEffect(() => {
        if (!audioRef.current.paused){
            audioRef.current.currentTime = 0;
         }
         audioRef.current.play();
    }, [active])
  
    return (
        <StyledAction 
        id='action' 
        variants={StaggerAnim} 
        initial='hidden'
        animate={controls}
        ref={element} 
      
        >   
            <SectionTitle variants={Fade}>
               <div className="text">
                  <h2>como atua</h2>
               </div>
            </SectionTitle>
            <CenterBox>
                <LeftBox variants={Fade}>
                     <TextTitle>
                        <AnimatePresence exitBeforeEnter>
                            {state.map((item, i) => 
                            item.id === active.id && 
                            <motion.h2 
                              variants={TextFade} 
                              initial='hidden' 
                              animate='show'
                              exit='exit' 
                              key={i}>{item.title}</motion.h2>)}
                        </AnimatePresence>
                        <Text>
                          <AnimatePresence exitBeforeEnter>
                            {state.map((item, i) => 
                                item.id === active.id && 
                                <motion.div
                                variants={TextFade}
                                initial='hidden' 
                                animate='show' 
                                exit='exit'
                                key={i}>{item.text}</motion.div>)}
                          </AnimatePresence>
                        </Text>
                    </TextTitle>
                    <Dots>
                      {state.map((item, i) => 
                        <Dot
                          onClick={() => setActive(item)} 
                          key={i}
                          active={active.id === item.id}
                        />
                       )}
                       <audio ref={audioRef} src={trimmed} />
                    </Dots>
                    <FlaskImage>
                        <motion.img variants={{...FadeScale, 
                          hidden: {...FadeScale.hidden, scale: 0.9}, 
                          show: {...FadeScale.show, scale: 1}}} 
                          src={flask_caps} alt="Frasco magre caps"/>
                    </FlaskImage>
                </LeftBox>
                <RightBox>
                    <motion.img variants={FadeScale} src={mancover} alt="man"/>
                    <Points variants={Fade}>
                      <AnimatePresence exitBeforeEnter>
                       {state.map((item, i) => 
                        item.id === active.id && (
                        <AnimatedPoint key={i} pointId={item.id}/>
                        ))
                        }
                      </AnimatePresence>
                    </Points>
                </RightBox>
            </CenterBox>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`
    height: 95vh;
    max-height: 40rem;
    display: flex;
    justify-content: center;
    background: #ffffff;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        height: 100%;
        width: 75%;
        right: 0;
        background: #f6f7f6;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 36% 100%);
    }
    @media screen and (max-width: 768px){
        height: 37rem;
    }
    @media screen and (max-width: 370px){
        height: 37rem;
        overflow: hidden;
    }
`;

const CenterBox = styled(motion.div)`
     width: 90%;
     height: 98%;
     max-height: 720px;
     max-width: 90rem;
     display: flex;
     z-index: 1;
     position: relative;
     @media screen and (max-width: 768px){
        height: 90%;
        width: 100%;
    }
`;

const RightBox = styled(motion.div)`
      height: 100%;
      width: 48%;
      max-height: 40rem;
      display: flex;
      position: absolute;
      right: 0;
      align-self: flex-end;
      margin-bottom: -0.8rem;
      img {
         width: 100%;
         
     }
     @media screen and (max-width: 768px){
        height: 100%;
   }
`;

const LeftBox = styled(motion.div)`
    width: 60%;
    height: 80%;
    max-width: 70rem;
    display: flex;
    position: relative;
    margin-left: 4rem;
    align-self: flex-end;
    z-index: 1;
    justify-content: space-around;
`;

const TextTitle = styled.div`
     width: 78%;
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     h2 {
         padding-right: 25px;
         padding-bottom: 20px;
         font-family: 'Montserrat', sans-serif;
         color: #415740;
     } 
`;

const FlaskImage = styled(motion.div)`
      position: absolute;
      margin-top: 12rem;
      height: 55%;
      max-width: 70rem;

      img {
       width: 100%;
      }
      @media screen and (max-width: 760px){
        img {
          max-width: 250px;
          max-height: 150px
        }
    }
`;

const Text = styled(motion.div)`
    width: 100%;
    height: 7rem;
    overflow-y: auto;
    font-size: 1rem;
    text-align: left;
    padding-right: 10px;
    color: #054507;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4rem;
    &::-webkit-scrollbar{
       width: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #d0b43f;
      height: 6px;
      width: 6px;  
    }
    &::-webkit-scrollbar-track{
      width: 0.2rem;
      background-color: #e2e2e2;

    }
`;

const Dots = styled(motion.div)`
   display: flex;
   width: 4.5rem;
   height: 0.5rem;
   margin-top: 3rem;
   justify-content: space-around;
   position: relative;
   align-self: flex-start;
   @media screen and (max-width: 768px){
       width: 7.5rem;
   }
`;

const Dot = styled(motion.div)`
    border-radius: 50%;
    border: 1.9px solid gray; 
    padding: 2px;
    background: ${props => props.active ? '#d0b43f' : '#eeeeee'};
    cursor: pointer;
    transition: background 0.3s ease-out;
    @media screen and (max-width: 768px){
        padding: 1.5px;
   }
`;

const Points = styled(motion.div)`
     position: absolute;
     width: 30rem;
     height: 31rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     img {
          width: 5rem;
          animation: rotation 11s infinite linear;
    }
    .point0{
        margin-top: 15rem;
        margin-left: 3rem;
    }
    .point1{
        margin-right: 4rem;
        margin-top: 14rem;
    }
    .point2{
        margin-left: 3rem;
    }
    .point3{
        margin-top: 13rem;
        margin-left: 2rem;
    }

   @keyframes rotation {
       from {
           transform: rotate(0deg);
        }
       to {
           transform: rotate(359deg);
        }
    }
`;


const SectionTitle = styled(motion.div)`
    max-width: 90rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 100%;
    position: absolute;
    align-self: flex-start;
    z-index: 1;
    padding-top: 1rem;
    .text{
        text-transform: uppercase;
        width: 77%;
        font-family: 'Montserrat', sans-serif;
        color: #536653;
        font-size: 0.9rem;
    }
`;

export default Action;
