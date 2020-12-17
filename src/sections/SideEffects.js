import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const SideEffects = () => {
    return (
        <StyledBox id='side-effects'>
             <h2>CONTRAINDICAÇÃO</h2>
             <div className="text-left">

             </div>
             <div className="text-right">

             </div>
        </StyledBox>
    )
}

const StyledBox = styled(motion.div)`
     height: 30rem;
     background: #ffff;
     display: flex;
     justify-content: center;
     h2{
         margin-top: 2rem;
         font-family: 'Montserrat';
         font-size: 1.4rem;
         color: rgba(65, 87, 64, 255);
         font-weight: bold;
     }

`;

export default SideEffects;
