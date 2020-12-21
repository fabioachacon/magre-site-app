import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useScroll} from '../components/useScroll';

//Images
import pill_bg from '../img/pill_bg.png';
import pill from '../img/pill.png';

//Icons
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';

//Animations 
import {
    iconAnim, 
    FadeScale, 
    TextAnim, 
    Fade, 
    StaggerAnim} from '../animations';



const Flask = () => {

   const [element, controls] = useScroll();

    return (
        <FlaskBG variants={StaggerAnim} initial='hidden' animate={controls} ref={element}  id='presentation'>
           <Pill variants={FadeScale}>
             <img src={pill} alt=""/>
           </Pill>
           <Icons>
               <Row>
                   <Icon1 variants={Fade}>
                      <div>
                       <p>AUXILIA NO</p>
                       <p>EMAGRECIMENTO</p>
                      </div>
                     <img src={icon1} alt=""/>
                   </Icon1>
                   <Icon2 variants={Fade}>
                      <div>
                       <p>AUXILIA NO</p>
                       <p>EMAGRECIMENTO</p>
                      </div>
                      <img src={icon2} alt=""/>
                   </Icon2>
               </Row>
               <Row>
                   <Icon3 variants={Fade}>
                     <div>
                       <p>AUXILIA NO</p>
                       <p>EMAGRECIMENTO</p>
                     </div>
                     <img src={icon3} alt=""/>
                   </Icon3>
                   <Icon4 variants={Fade}>
                      <div>
                        <p>PROPRIEDADES</p>
                        <p>TERAPEUTICAS</p>
                        <p>LAXATIVAS</p>
                      </div>
                      <img src={icon4} alt=""/>
                   </Icon4>
               </Row>
           </Icons>
        </FlaskBG>
    )
}


const FlaskBG = styled(motion.div)`
    background-image: url(${pill_bg});
    background-repeat: no-repeat;
    background-size: 100% 30rem;
    height: 30rem;
    margin-top: 0.7rem;
    z-index: -1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pill = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-left: 2rem;
    img {
        width: 40rem;
    }
`;

const Icons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 25rem;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    p {
        font-size: 0.7rem;
        text-align: right;
        margin-right: 0.2rem;
        color: rgba(97, 97, 97, 255);
        font-family: Helvetica, sans-serif
    }
`;

const Row = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20rem;
    width: 40rem;
    img{
        width: 6rem;
    }
`;

const Icon1 = styled(motion.div)`
   display: flex;
   position: relative;
   align-items: center;
   align-self: flex-end;
   right: 3rem;
   top: 3rem;
   img {
       width: 5rem;
   }
`;

const Icon2 = styled(motion.div)` 
   position: relative;
   display: flex;
   align-items: center;
   align-self: flex-start;
   margin-right: 50rem;
   top: 2rem;
   img{
       width: 4rem;
   }
`;

const Icon3 = styled(motion.div)`
   display: flex;
   align-items: center;
   position: relative;
   margin-top: 9rem;
   right: 2rem;
   img{
       width: 6rem;
   }

`;

const Icon4 = styled(motion.div)`
   display: flex;
   align-items: center;
   margin-right: 3rem;
   margin-top: 8rem;
`;


export default Flask;
