import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Images
import cover from '../img/cover.png';


const Cover = () => {
    return (
        <StyledCover>
            <Text>
                <h1>Tomar <span>duas</span></h1>
                <h1>Capsulas ao dia</h1>
            </Text>
        </StyledCover>
    )
}

const StyledCover = styled(motion.div)`
      background-image: url(${cover});
      background-repeat: no-repeat;
      background-size: 100% 500px;
      height: 500px;
      width: 100%;
      margin-top: 5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
`;

const Text = styled(motion.div)`
     font-size: 0.8rem;
     margin-right: 10rem;

`;

export default Cover;
