
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import flask from '../img/flask.png';
import table from '../img/table.png';
import flask_bg  from '../img/flask_bg.png'

const Contents = () => {
    return (
        <StyledTable id='content-table'>
            <Text>COMPOSIÇÃO</Text>
            <Flask>
                <img src={flask_bg} alt=""/>
            </Flask>
            <Table>
                <img src={table} alt=""/>
            </Table>
        </StyledTable>
    )
}

const StyledTable = styled(motion.div)`
    height: 70vh;
    background: #f6f7f6;
    display: flex;
    align-items: center;
    z-index: -100;
`;

const Flask = styled(motion.div)`
    z-index: 2;
    margin-left: 9rem;
    img{
        width: 550px;
    }
`;

const Table = styled(motion.div)`
     margin-left: 39rem;
     position: absolute;
     img {
         width:70%;
     }
`;

const Text = styled(motion.h2)`
   position: relative;
   left: 14rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   color: #415740;
   font-size: 1.1rem;

`;

const Wrapper = styled(motion.div)`
    display: flex;
    width: 70%;
    height: 100%;
    align-items: flex-end;
    margin-left: 15rem;
`;

export default Contents;