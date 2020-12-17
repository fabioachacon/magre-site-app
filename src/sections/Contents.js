
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import flask from '../img/flask.png';
import table from '../img/table.png';
import flask_bg  from '../img/flask_bg.png';
import {FadeScale, TableAnim, StaggerAnim} from '../animations';
import {useScroll} from '../components/useScroll';
 
const Contents = () => {

    const [element, controls] = useScroll();

    return (
        <StyledTable ref={element} variants={StaggerAnim} initial='hidden' animate={controls} id='content-table'>
             <Text>
                 <h3>COMPOSIÇÃO</h3>
             </Text>
            <BoxCenter>
               <Flask variants={FadeScale}>
                 <img src={flask_bg} alt=""/>
               </Flask>
               <Table variants={TableAnim}>
                  <img src={table} alt=""/>
               </Table>
            </BoxCenter>
        </StyledTable>
    )
}

const StyledTable = styled(motion.div)`
    height: 30rem;
    background: #f6f7f6;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const BoxCenter = styled(motion.div)`
     height: 25rem;
     width: 50rem;
     display: flex;
     justify-content: space-around;
     align-items: flex-end;
`;

const Flask = styled(motion.div)`
     z-index: 1;
     img{
         width: 35rem;
         height: 26rem;
     }
`;

const Table = styled(motion.div)`
    margin-bottom: 4rem;
    position: relative;
    right: 12.7rem;
    img {
        width: 24rem;

    }
`;

const Text = styled(motion.div)`
     font-family: 'Montserrat', sans-serif;
     color: #415740;
     align-self: center;
     font-size: 1.1rem;
     margin-top: 5rem;
     position: relative;
     left: 1rem;
`;



export default Contents;