
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import flask from '../img/flask.png';
import table from '../img/table.png';
import flask_bg  from '../img/flask_bg.png';
import flaskpills from '../img/pills.png';
 
const Contents = () => {

    return (
        <StyledTable id='content-table'>
            <Title>
              <div className="text">
                <h2>composição</h2>
              </div>
            </Title>
             <CenterBox>
                <LeftBox>
                  <div className="text">
                    <h2>TOMAR </h2>
                    <h2><span>2 CÁPSULAS</span></h2>
                    <h2>AO DIA.</h2>
                  </div>
                  <div className="flask">
                      <img src={flaskpills} alt=""/>
                  </div>
                </LeftBox>
                <RightBox>
                   <div className="table">
                       <img src={table} alt=""/>
                   </div>
                   <div className="text">
                      <h3>Não deve ser consumido por menores de 14 anos, gestantes, lactantes, idosos, pessoas com sensibilidade ou patologias intestinais.</h3>
                   </div>
                </RightBox>
             </CenterBox>
        </StyledTable>
    )
}

const StyledTable = styled(motion.div)`
    height: 75vh;
    max-height: 30rem;
    background: #EAEAEB;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width: 768px){
        height: 33rem;
    }
`;

const CenterBox = styled(motion.div)`
    height: 100%;
    width: 80%;
    max-width: 80rem;
    display: flex;
    position: relative;
`;

const LeftBox = styled(motion.div)`
     height: 100%;
     width: 90%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     overflow: hidden;
     img {
         width: 75%;
         height:480px;
         object-fit: fill;
     }
     .text {
         font-size: 0.9rem;
         position: absolute;
         margin-top: 10rem;
         margin-left: 7rem;
         font-family: 'Montserrat', sans-serif;
         h2 {
             color: #917e41;
             font-weight: normal;
         }
         span {
             color: #415740;
             font-weight: bold;
         }
     }
`;

const RightBox = styled(motion.div)`
   height: 100%;
   width: 40%;
   max-width: 30rem;
   position: absolute;
   right: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   img {
       width: 100%;
    }
    h3 {
        padding-top: 0.3rem;
        width: 84%;
        position: absolute;
        right: 0;
        font-style: italic;
        text-align: left;
        font-size: 0.8rem;
        color: #054507;
        font-family: 'Montserrat', sans-serif;
    }
`;


const Title = styled(motion.div)`
   align-self: flex-start;
   position: absolute;
   z-index: 1;
   margin-top: 3rem;
   font-size: 0.9rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   color: #415740;
   text-transform: uppercase;
`;



export default Contents;