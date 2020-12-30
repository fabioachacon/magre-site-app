import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useScroll} from '../components/useScroll';

//Images
import pill_bg from '../img/pill_bg.png';
import pill from '../img/pill.png';
import cover from '../img/pill_bg_new.png';

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
           <Cover>
              <img src={cover} alt=""/>
           </Cover>
           <Pill variants={FadeScale}>
             <img src={pill} alt=""/>
           </Pill>
           <Icons>
               <Row>
                   <Icon1 variants={Fade}>
                      <div>
                       <p>SUPLEMENTO</p>
                       <p>NUTRICIONAL</p>
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
                       <p>POTENCIALIZA A</p>
                       <p>AÇÃO E O EFEITO</p>
                       <p>DA INSULINA</p>
                     </div>
                     <img src={icon3} alt=""/>
                   </Icon3>
                   <Icon4 variants={Fade}>
                      <img src={icon4} alt=""/>
                      <div>
                        <p>DRENAGEM</p>
                        <p>LINFÁTICA NATURAL</p>
                      </div>
                   </Icon4>
               </Row>
           </Icons>
        </FlaskBG>
    )
}

const FlaskBG = styled(motion.div)`
   background:#b69e43;
    height: 90vh;
    max-height: 50rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 35rem;
        margin-top: 3rem;
    }
`;

const Cover = styled(motion.div)`
       position: absolute;
       height: 100%;
       width: 100%;
       img {
           object-fit: cover;
           height: 100%;
           width: 100%;
           @media screen and (max-width: 760px){
            height: 35rem;
            object-fit: cover;
            object-position: center;
        }

       }
       @media screen and (max-width: 768px){
         height: 32rem;
        }
    
`;

const Text = styled(motion.div)`
   z-index: 1;
   position: absolute;
   align-self: flex-start;
   left: 7rem;
   margin-top: 4rem;
   font-family: 'Montserrat', sans-serif;
   font-size: 1.5rem;
   color: white;

`;

const Pill = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-left: 2rem;
    img {
        width: 50rem;
        @media screen and (max-width: 768px){
          width: 40rem;
        }
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
        font-size: 0.9rem;
        text-align: right;
        margin-right: 0.2rem;
        color: rgba(97, 97, 97, 255);
        color: #103b10;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
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
   right: 8rem;
   top: 3rem;
   img {
       width: 5.5rem;
   }
   p {
     color: white;
   }
`;

const Icon2 = styled(motion.div)` 
   position: relative;
   display: flex;
   align-items: center;
   align-self: flex-start;
   margin-right: 50rem;
   right: 3rem;
   img{
       width: 5rem;
   }
`;

const Icon3 = styled(motion.div)`
   display: flex;
   align-items: center;
   position: relative;
   margin-top: 9rem;
   right: 6rem;
   top: 1rem;
   img{
       width: 6.4rem;
   }


`;

const Icon4 = styled(motion.div)`
   display: flex;
   align-items: center;
   margin-top: 9rem;
   left: 5rem;
   position: relative;
   top: 1rem;
   p {
       text-align: left;
       color: #ffff;
   }
   img {
       transform: rotate(45deg);
   }
`;


export default Flask;
