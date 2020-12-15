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
import {iconAnim} from '../animations';


const Presentation = () => {

    const [element, controls] = useScroll();

    return (
        <StyledCover ref={element} inherit='hidden' animate={controls} id='presentation'>
           <div className="circle">
                <Icons>
                    <motion.div className="row-1">
                        <motion.div variants={iconAnim}  className="icon1">
                            <div className="text">
                                <p>PROPRIEDADES</p>
                                <p>TERAPEUTICAS</p>
                                <p>LAXATIVAS</p>
                            </div>
                            <div>
                              <img src={icon1} alt="icon1"/>
                            </div>
                        </motion.div>
                        <motion.div variants={iconAnim} className="icon2">
                            <div className="text">
                                <p>AUXILIA NO</p>
                                <p>EMAGRECIMENTO</p>
                            </div>
                            <div>
                              <img src={icon2} alt="icon2"/>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="row-2">
                        <motion.div variants={iconAnim} className="icon3">
                           <div className="text">
                                <p>AUXILIA NO</p>
                                <p>EMAGRECIMENTO</p>
                            </div>
                            <img src={icon3} alt="icon3"/>
                        </motion.div>
                        <motion.div variants={iconAnim} className="icon4">
                            <div className="text">
                                <p>AUXILIA NO</p>
                                <p>EMAGRECIMENTO</p>
                            </div>
                            <img src={icon4} alt="icon4"/>
                        </motion.div>
                    </motion.div>
                </Icons>
                <motion.div className="pill">
                    <img src={pill} alt=""/>
                </motion.div>
           </div>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
   display: flex;
   position: relative;
   justify-content: center;
   align-items: center;
   margin-top: 0.5em;
   min-height: 500px;
   background-image: url(${pill_bg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: top;
   .pill{
       z-index: 1;
       position: absolute;
       top: 80px;

   }
   img{
       width: 65%;
       object-fit: cover;
   }

   p{ 
       font-size: 0.7rem;
       text-align: right;
       color:  rgba(97, 97, 97, 255);
   }
   .text{
       margin-right: 0.2rem;
   }
`;

const Icons = styled(motion.div)`
    position: relative;
    width: 550px;
    display: flex;
    margin-left: 5px;
    z-index: 4;
    min-height: 500px;
    justify-content: space-between;
    img {
        width: 70%;
    }
    .row-1{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .row-2{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .icon1{
        align-items: center;
        display: flex;
        margin-top: 90px;
        margin-right: 25rem;
        opacity: 1;
        width: 50%;
        img{
            width: 55%;
            object-fit: cover;
        }
        
    }
    .icon2{
        display: flex;
        align-items: center;
        margin-right: 13rem;
        margin-bottom: 30px;
        width: 90%;

    }
    .icon3{
        position: relative;
        right: 22rem;
        display: flex;
        align-items: center;
        opacity: 1;
        margin-top: -10px;
        width: 90%;
        img{
            width: 88%;
            object-fit: cover;
        }
    
    }
    .icon4{
        position: relative;
        display: flex;
        align-items: center;
        opacity: 1;
        top: 30px;
        right: 8rem;
        width: 100%;
        img{
            width: 100%;
        }

    }


`;

export default Presentation;
