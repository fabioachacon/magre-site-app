import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import selected from '../audio/selected.mp3';

//Animations
import {
    TextFade, 
    FadeScale, 
    Fade,
    FadePoint, 
    StaggerAnim} from '../animations';

//Images
import man from '../img/man.png';

//Custom Hooks
import {useScroll} from '../components/useScroll';

//Components
import AnimatedPoint from '../components/AnimatedPoint';

//Util
import {InfoList} from '../info';


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
                <ManImage>
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
                </ManImage>
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
                          onClick={() => clickHandler(i)} 
                          key={i}
                          style={item.active ? 
                          {'background': '#415740'} : 
                          {'background': 'white'}}  
                        />
                       )}
                       <audio ref={audioRef} src={selected} />
                    </Dots>
                </RightBox>
            </CenterBox>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`
    height: 32rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: #ffffff;
`;

const CenterBox = styled(motion.div)`
     width: 55rem;
     height: 32rem;
     position: relative;
     right: 3rem;
     display: flex;
`;

const ManImage = styled(motion.div)`
      height: 100%;
      width: 70%;
      display: flex;
      img {
         width: 100%;
         height: 100%;
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
    height: 15.5rem;
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
   margin-top: 2rem;
`;

const Dot = styled(motion.div)`
    border-radius: 50%;
    border: 1.5px solid gray; 
    padding: 2.5px;
    background: white;
    margin-left: 0.6rem;
    cursor: pointer;
    transition: all 0.3s ease-out; 
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
`;

const Title = styled(motion.div)`
    align-self: flex-start;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    color: rgba(65, 87, 64, 255);
    font-size: 1.1rem;
    margin-top: 3.5rem;
    left: 1rem;
`;

export default Action;
