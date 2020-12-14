import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import man from '../img/man.png';
import {FadeScale} from '../animations';
import {Fade} from '../animations';
import {useScroll} from '../components/useScroll';
import AnimatedPoint from '../components/AnimatedPoint';
import Dot from '../components/Dot';


const Action = () => {

    const InfoList = [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloremque quae asperiores officiis nemo ratione repudiandae, unde nisi! A, assumenda?",
        active: true
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis eius, sed sapiente laboriosam labore obcaecati vel blanditiis, itaque ea recusandae praesentium deleniti magnam perferendis nemo aspernatur natus ab. Et!",
        active: false
      },
      {
        id: 3,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam facere minima tempore corporis ducimus natus, vero, officiis et beatae tempora quo! Asperiores explicabo eum accusamus nulla iure libero quam iusto laudantium qui minus ad similique corrupti, expedita distinctio tempore, eos ullam sit! Velit sint quo odio praesentium quas obcaecati cupiditate id excepturi accusamus? Laudantium quibusdam praesentium voluptatem natus dolores soluta nisi earum magnam nulla. Maxime maiores reiciendis iste vero deleniti laudantium modi, facere voluptatibus voluptatem iure incidunt eaque voluptas porro consequuntur! Explicabo consequuntur ducimus, eos dolor aliquam numquam excepturi iure, modi, labore sed cum nihil repudiandae assumenda dicta ad! Impedit? ",
        active: false
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloremque quae asperiores officiis nemo ratione repudiandae, unde nisi! A, assumenda?",
        active: false
      }
  ]

    const [data, setData] = useState(InfoList);
    const [currentActive, setCurrentActive] = useState(data.find((info) =>  info.active));
    const [element, controls] = useScroll();

    useEffect(() => {
      setCurrentActive(data.find((info) =>  info.active));
    }, [data]);

  
    return (
        <StyledAction ref={element} initial='hidden' animate={controls} id='action'>
          <motion.div  className="manImage">
             <motion.h3 variants={Fade}>ATUAÇÃO</motion.h3>
             <motion.img variants={FadeScale} src={man} alt=""/>
             <Points>
               <AnimatePresence>
                 {data.map((info, i) => <AnimatedPoint info={info}  id={i} key={i}/>)}
               </AnimatePresence>
             </Points>
          </motion.div>
          <motion.div className="text">
              <div className="inside">
                <AnimatePresence exitBeforeEnter>
                  <motion.div variants={Fade} className="content">
                    {currentActive.text}
                  </motion.div>
                </AnimatePresence>
              </div>
              <Dots>
                {data.map((info, i) => <Dot 
                   setData={setData}
                   data={data}
                   info={info}
                   currentActive={currentActive}
                   key={i}
                    />)}
              </Dots>
          </motion.div>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`  
    position: relative;
    margin-top: -10px;
    height: 80vh;
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
        min-height: 100%;
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
`;



export default Action;
