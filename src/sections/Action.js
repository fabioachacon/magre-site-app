import React, {useState} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import man from '../img/man.png';
import {TextFade, FadeScale, Fade, StaggerAnim} from '../animations';
import {useScroll} from '../components/useScroll';
import AnimatedPoint from '../components/AnimatedPoint';
import {InfoList} from '../info';


const Action = () => {
    
  const clickHandler = (id) => {

    const newState = data.map((state) => {
      return state.id === id ? {...state, active: true} : {...state, active: false}
    });

     setData(newState);
}

    const [data, setData] = useState(() => InfoList);
    const [element, controls] = useScroll();
    console.log('Action Component', data);
  
    return (
        <StyledAction variants={StaggerAnim} ref={element} initial='hidden' animate={controls} id='action'>
          <motion.div  className="manImage">
             <motion.h3 variants={Fade}>ATUAÇÃO</motion.h3>
             <motion.img variants={FadeScale} src={man} alt=""/>
             <Points variants={Fade}>
               <AnimatePresence exitBeforeEnter>
                 {data.map((state, i) => 
                  state.active && (
                  <AnimatedPoint info={state} key={i}/>)
                 )}
               </AnimatePresence>
             </Points>
          </motion.div>
          <motion.div variants={Fade} className="text">
              <div className="inside">
               <AnimatePresence exitBeforeEnter>
                {data.map((state, i) => 
                 state.active && (
                 <motion.div 
                  key={i} 
                  variants={TextFade} 
                  initial='hidden' 
                  animate='show' 
                  exit='exit'>

                  {state.text}
                </motion.div>
                )
              )}
               </AnimatePresence>
              </div>
              <Dots>
                {data.map((state, i) => <Dot 
                   onClick={() => clickHandler(i)}
                   key={i}
                   style={state.active ? {'background': '#415740'} : {'background': 'white'}}
                    />)}
              </Dots>
          </motion.div>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`  
    position: relative;
    margin-top: -10px;
    min-height: 540px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .manImage{
        position: absolute;
        margin-right: 40rem;
        min-width: 500px;
        height: 100%;
        display: flex;
        
        img {
        position: relative;
        width: 500px;
        height: 100%;
      }
    }
    .inside{
        overflow-y: scroll;
        height: 300px;
        width: 300px;
        padding-right: 1rem;
    
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
 }
    .text{
        height: 300px;
        margin-left: 20rem;
        text-align: right;
        font-size: 0.8rem;
        color: gray;
        display: flex;
        flex-direction: column;
        align-items:center;
        font-family: 'Montserrat', sans-serif;
    }
    h3{
        margin-top: 3rem;
        position: relative;
        left: 100px;
        color: rgb(65, 87, 64);
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
`;

const Dots = styled(motion.div)`
   display: flex;
   width: 100%;
   justify-content: center;
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
       justify-self: center;
       align-self: center;
       display: flex;
       flex-direction: column;
       height: 100%;
       width: 100%;
       opacity: 1;
       justify-content: center;
       align-items: center;
       margin-left: 50px;
       .point{
         img {
         width: 80px;
         height: 90%;
      }
    }
    .point1{
      margin-bottom: 25rem;
      margin-right: 0.5rem;
    }
    .point2{
      margin-right: 4rem;
    }
    .point3{
      margin-top: 5rem;
    }
    .point4{
      margin-bottom: 5rem;
    }
`;



export default Action;
