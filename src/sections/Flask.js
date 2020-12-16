import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useScroll} from '../components/useScroll';

//Images
import pill_bg from '../img/pill_bg.png';
import pill from '../img/pill.png';
import pill_bg_2x from '../img/pill_bg_2x.png';

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
        <FlaskBG variants={StaggerAnim} ref={element} initial='hidden' animate={controls} id='presentation'>
           <Pill variants={Fade}>
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
    background-size: 100% 500px;
    height: 500px;
    margin-top: 10px;
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
    margin-top: 60px;
    width: 100%;
    img {
        width: 600px;
    }
`;

const Icons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    height: 80%;
    width: 700px;
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
    height: 200px;
    width: 100%;
    img{
        width: 90px;
    }
`;

const Icon1 = styled(motion.div)`
   display: flex;
   position: relative;
   align-items: center;
   align-self: flex-end;
   right: 2.2rem;
   img {
       width: 80px;
   }
`;

const Icon2 = styled(motion.div)` 
   position: relative;
   display: flex;
   align-items: center;
   align-self: flex-start;
   margin-right: 350px;
   top: 15px;
   right: 10px;
   img{
       width: 80px;
   }
`;

const Icon3 = styled(motion.div)`
   display: flex;
   align-items: center;
   position: relative;
   margin-top: 90px;
   right: 10px;
   img{
       width: 100px;
   }

`;

const Icon4 = styled(motion.div)`
   display: flex;
   align-items: center;
   margin-right: 120px;
   margin-top: 95px;
`;


export default Flask;
