
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
    height:85vh;
    max-height: 50rem;
    background: #EAEAEB;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media screen and (max-width: 768px){
        height: 40rem;
    }
`;

const CenterBox = styled(motion.div)`
    height: 100%;
    width: 85%;
    max-width: 80rem;
    display: flex;
    position: relative;
    @media screen and (max-width: 760px){
        height: 95%;
        width: 90%;
    }
`;

const LeftBox = styled(motion.div)`
     height: 100%;
     width: 75%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     position: relative;
     @media screen and (max-width: 760px){
        width: 79%;
        height:100%;
     }
     img {
         width:97%;
         height:100%;
         object-fit: fill;
         position: absolute;
         @media screen and (max-width: 768px){
           width: 87%;
           height:90%;
           bottom: 0;
           object-fit: fill;
           position: absolute;

    }
     }
     .text {
         z-index: 1;
         font-size: 1.1rem;
         position: absolute;
         margin-top: 10rem;
         margin-left: 9rem;
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
   width: 38%;
   max-width: 40rem;
   position: absolute;
   right: -2.5rem;
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
        left: 2rem;
        margin-left: 2rem;
        font-style: italic;
        text-align: left;
        font-size: 0.8rem;
        color: #054507;
        font-family: 'Montserrat', sans-serif;
    }
    @media screen and (max-width: 760px){
        right: 0rem;
    }
`;


const Title = styled(motion.div)`
   align-self: flex-start;
   position: absolute;
   z-index: 1;
   margin-top: 3.5rem;
   font-size: 1rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   color: #415740;
   text-transform: uppercase;
`;



export default Contents;