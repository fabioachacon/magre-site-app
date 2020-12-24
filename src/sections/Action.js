import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {useScroll} from '../components/useScroll';
import AnimatedPoint from '../components/AnimatedPoint';
import trimmed from '../audio/trimmed.mp3';
import man from '../img/man.png';
import {InfoList} from '../info';
import {TextFade, 
        FadeScale, 
        Fade, 
        StaggerAnim} from '../animations';

 
        
const Action = () => {
   const [state, setState] = useState(InfoList);
   const [element, controls] = useScroll();
   const audioRef = useRef();

   const clickHandler = (id) => {
       const newState = state.map((current) => 
       current.id === id ? {...current, active: true} : {...current, active: false}
    );
    
    setState(newState);

    if (!audioRef.current.paused){
       audioRef.current.currentTime = 0;
    }
    audioRef.current.play();
}
  
    return (
        <StyledAction 
        id='action' 
        variants={StaggerAnim} 
        ref={element} initial='hidden' 
        animate={controls}>
            <Title variants={Fade}>
              <h3>ATUAÇÃO</h3>
            </Title>
            <CenterBox>
                <LeftBox>
                    <motion.img variants={FadeScale} src={man} alt="man"/>
                    <Points variants={Fade}>
                      <AnimatePresence exitBeforeEnter>
                       {state.map((item, i) => 
                        item.active && (
                        <AnimatedPoint key={i} pointId={item.id}/>
                        ))
                        }
                      </AnimatePresence>
                    </Points>
                </LeftBox>
                <RightBox variants={Fade}>
                    <Text>
                      <AnimatePresence exitBeforeEnter>
                        {state.map((item, i) => 
                            item.active && (
                            <motion.div
                            variants={TextFade}
                            initial='hidden' 
                            animate='show' 
                            exit='exit'
                            key={i}>

                             {item.text}
                            </motion.div>
                            )
                        )}
                      </AnimatePresence>
                    </Text>
                    <Dots>
                      {state.map((item, i) => 
                        <Dot
                          onClick={() => clickHandler(item.id)} 
                          key={i}
                          style={item.active ? 
                          {'background': '#415740'} : 
                          {'background': 'white'}}  
                        />
                       )}
                       <audio ref={audioRef} src={trimmed} />
                    </Dots>
                </RightBox>
            </CenterBox>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: #ffffff;
    @media screen and (max-width: 768px){
        height: 37rem;
    }
`;

const CenterBox = styled(motion.div)`
     width: 80%;
     height: 98%;
     position: relative;
     right: 3rem;
     display: flex;
     @media screen and (max-width: 768px){
        height: 90%;
        width: 100%;
    }
`;

const LeftBox = styled(motion.div)`
      height: 96%;
      width: 70%;
      display: flex;
      align-self: flex-end;
      img {
         width: 100%;
     }
`;

const RightBox = styled(motion.div)`
    width: 50%;
    display: flex;
    position: relative;
    flex-direction: column;
    right: 4rem;
    align-items: center;
`;

const Text = styled(motion.div)`
    width: 17rem;
    height: 15rem;
    overflow-y: scroll;
    margin-top: 5rem;
    font-size: 0.9rem;
    text-align: right;
    padding-right: 10px;
    color: gray;
    &::-webkit-scrollbar{
       width: 0.1rem;
       background-color: #415740
    }
    &::-webkit-scrollbar-thumb{
      background-color: #415740;
      height: 1px;  
    }
    &::-webkit-scrollbar-track{
      background-color: white;
      height: 1rem;
    }
`;

const Dots = styled(motion.div)`
   display: flex;
   margin-top: 3rem;
   width: 4rem;
   height: 0.5rem;
   justify-content: space-around;
   position: relative;
   left: 0.5rem;
   @media screen and (max-width: 768px){
       width: 7.5rem;
   }
`;

const Dot = styled(motion.div)`
    border-radius: 50%;
    border: 1.8px solid gray; 
    padding: 2px;
    background: #eeeeee;
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
          width: 4.5rem;
          animation: rotation 11s infinite linear;
    }
    .point0{
        margin-bottom: 5rem;
        margin-left: 1.8rem;
    }
    .point1{
        margin-right: 4rem;
        margin-top: 2rem;
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

const Title = styled(motion.div)`
    align-self: flex-start;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    color: rgba(65, 87, 64, 255);
    font-size: 1.1rem;
    margin-top: 6rem;
    left: 2rem;
    @media screen and (max-width: 768px){
        left: 3rem;
        margin-top: 7.3rem;
        font-size: 1.6rem; 
    }
`;

export default Action;
