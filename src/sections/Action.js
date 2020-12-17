import React, {useState} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import man from '../img/man.png';

//Animations
import {
    TextFade, 
    FadeScale, 
    Fade, 
    StaggerAnim} from '../animations';

//Custom Hooks
import {useScroll} from '../components/useScroll';

import AnimatedPoint from '../components/AnimatedPoint';
import {InfoList} from '../info';



const Act = () => {

   const [state, setState] = useState(InfoList);
   const [element, controls] = useScroll();


   const clickHandler = (id) => {
       const newState = state.map((current) => {
      return current.id === id ? {...current, active: true} : {...current, active: false}
    });

    setState(newState);
 }

    return (
        <StyledAction variants={StaggerAnim} ref={element} initial='hidden' animate={controls}>
             <Title variants={Fade}>
                 <h2>ATUAÇÃO</h2>
             </Title>
            <CenterBox>
                <ManImage>
                    <motion.img variants={FadeScale} src={man} alt=""/>
                    <Points variants={Fade}>
                      <AnimatePresence exitBeforeEnter>
                       {state.map((current, i) => 
                        current.active && (
                        <AnimatedPoint key={i} info={current}/>))}
                      </AnimatePresence>
                    </Points>
                </ManImage>
                <LeftBox variants={Fade}>
                    <Text>
                      <AnimatePresence exitBeforeEnter>
                        {state.map((current, i) => 
                            current.active && (
                            <motion.div
                            variants={TextFade}
                            initial='hidden' 
                            animate='show' 
                            exit='exit'
                            key={i}>
                             {current.text}
                            </motion.div>
                            )
                        )}
                      </AnimatePresence>
                    </Text>
                    <Dots>
                      {state.map((current, i) => 
                        <Dot
                          onClick={() => clickHandler(i)} 
                          key={i}
                          style={current.active ? {'background': '#415740'} : {'background': 'white'}}  
                        />
                       )}
                    </Dots>
                </LeftBox>
            </CenterBox>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`
    height: 32rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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

const LeftBox = styled(motion.div)`
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
    margin-left: 0.7rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
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
      }
      .point1{
          margin-bottom: 8rem;
      }
      .point2{
          margin-left: 4rem;
      }
`;

const Title = styled(motion.div)`
    align-self: flex-start;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    color: rgba(65, 87, 64, 255);
    font-size: 0.78rem;
    margin-top: 3.5rem;
    left: 1rem;
`;

export default Act;
