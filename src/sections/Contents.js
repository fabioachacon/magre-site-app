
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import flask from '../img/flask.png';
import table from '../img/table.png';
import flask_bg  from '../img/flask_bg.png';

 
const Contents = () => {
    return (
        <StyledTable id='content-table'>
             <Text>
                 <h3>COMPOSIÇÃO</h3>
             </Text>
            <BoxCenter>
               <Flask>
                 <img src={flask_bg} alt=""/>
               </Flask>
               <Table>
                  <img src={table} alt=""/>
               </Table>
            </BoxCenter>
        </StyledTable>
    )
}

const StyledTable = styled(motion.div)`
    height: 530px;
    background: #f6f7f6;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const BoxCenter = styled(motion.div)`
     height: 430px;
     width: 750px;
     display: flex;
     justify-content: space-around;
     align-items: flex-end;
`;

const Flask = styled(motion.div)`
     z-index: 1;
     img{
         width: 130%;
         height: 400px;
     }
`;

const Table = styled(motion.div)`
    margin-bottom: 60px;
    position: relative;
    right: 70px;
    img {
        width: 110%;

    }
`;

const Text = styled(motion.div)`
     font-family: 'Montserrat', sans-serif;
     color: #415740;
     align-self: center;
     font-size: 1.1rem;
     margin-top: 120px;
     position: relative;
     left: 60px;
`;



export default Contents;