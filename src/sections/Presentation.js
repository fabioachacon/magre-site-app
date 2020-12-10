import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import pill_bg from '../img/pill_bg.png';
import pill from '../img/pill.png';

//Icons
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';


const Presentation = () => {
    return (
        <StyledCover id='presentation'>
           <div className="circle">
                <Icons>
                    <div className="row-1">
                        <div className="icon1">
                            <img src={icon1} alt="icon1"/>
                        </div>
                        <div className="icon2">
                            <img src={icon2} alt="icon2"/>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="icon3">
                            <img src={icon3} alt="icon3"/>
                        </div>
                        <div className="icon4">
                            <img src={icon4} alt="icon4"/>
                        </div>
                    </div>
                </Icons>
                <div className="pill">
                    <img src={pill} alt=""/>
                </div>
           </div>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
   display: flex;
   position: relative;
   justify-content: center;
   align-items: center;
   margin-top: 1em;
   min-height: 600px;
   background-image: url(${pill_bg});
   background-repeat: no-repeat;
   background-size: 100vw 500px;
   .pill{
       z-index: 1;
       position: absolute;
       top: 100px;

   }
   img{
       width: 65%;
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
        margin-top: 90px;
        margin-right: 6rem;
        opacity: 1;
        width: 60%;
        
    }
    .icon2{
        opacity: 1;
        margin-right: 0rem;
        margin-bottom: 30px;

    }
    .icon3{
        opacity: 1;
        margin-right: 14rem;
        margin-top: -50px;
        width: 34%;
    }
    .icon4{
        opacity: 1;
        margin-left: 15rem;
        margin-bottom: 40px;
        width: 40%;
    }


`;

export default Presentation;
