import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Dot = ({info, data, setData}) => {
    
    const clickHandler = () => {

        const newState = data.map((state) => {
          return state.id === info.id ? {...state, active: true} : {...state, active: false}
        });

        setData(newState);
    }

    return (
        <StyledDot onClick={clickHandler} style={info.active ? {'background': '#415740'} : {'background': 'white'}}></StyledDot>
    )
}

const StyledDot = styled(motion.div)`
    border-radius: 50%;
    border: 1.5px solid gray; 
    padding: 2.5px;
    background: white;
    margin-left: 0.7rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
`;

export default Dot;
