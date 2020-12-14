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
     height: 80vh;
     background: #ffff;
     display: flex;
     justify-content: center;

`;

export default SideEffects;
