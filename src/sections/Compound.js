import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import leaf from '../img/powder_bg.png';


const Compound = () => {
    return (
        <StyledSection id='compounds'>
           <CenterBox>
             <LeftBox>
                <TextBox>
                    <div className="title">
                      <h2><span>O</span> SENE EXTRATO SECO</h2>
                      <h2>e PICOLINATO DE CROMO</h2>
                      <br/>
                    </div>
                    <div className="text">
                      <h3>Decidimos unir esses dois poderosos SENE e PICOLINATO DE CROMO para mudar sua saúde e sua vida.</h3>
                      <br/>
                      <p>Quando iniciamos o processo de emagrecimento, muitas vezes 
                      passamos por carências nutricionais e vitamínicas, principalmente quem segue uma dieta restritiva. Diante dessa necessidade, o <span>MAGRE CAPS</span>, irá te auxiliar enquanto você emagrece, porém sem deixar seu organismo debilitado, pois temos a função de suplementar seu organismo enquanto você emagrece de modo saudável.</p>
                    </div>
                </TextBox>
                <ButtonWrapper>
                    <a href="">
                        <button>Leia Mais</button>
                    </a>
                </ButtonWrapper>
             </LeftBox>
             <Rightbox>
                 <img src={leaf} alt=""/>
             </Rightbox>
           </CenterBox>
        </StyledSection>
    )
}

const StyledSection = styled(motion.div)`
      height: 100vh;
      max-height: 50rem;
      background: #ffff;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 760px){
          height: 44rem;
          overflow: hidden;
      }

`;

const CenterBox = styled(motion.div)`
     height: 60%;
     width: 80%;
     max-width: 80rem;
     position: relative;
     margin-bottom: 5rem;
     @media screen and (max-width: 760px){
         width: 95%;
         margin-bottom: 0;
         padding: 0 1.1rem;
     }
`;

const LeftBox = styled(motion.div)`
     height: 100%;
     width: 60%;
     max-height: 25rem;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     text-align: left;
     @media screen and (max-width: 760px){
          height: 100%;
          width: 55%;
      }
`;

const Rightbox = styled(motion.div)`
      height: 100%;
      width: 50%;
      position: absolute;
      right: -4rem;
      bottom:7rem;
      img {
          width:100%;
          object-fit: cover;
          @media screen and (max-width: 760px){
            width:92%;

          }
      }
`;

const TextBox = styled(motion.div)`
    font-family: 'Montserrat', sans-serif;
    .title{
        span {
        color: #647463;
        font-weight: 200;
       }
       h2{
        font-size: 1.5rem;
        color: #928032;

        @media screen and (max-width: 760px){
            font-size: 2rem;
      }
        }
    }
    .text {
        h3 {
            color: rgba(5, 69, 7, 255);
        }
        p{
            color: rgba(5, 69, 7, 255);
            text-align: justify;
            width: 110%;
            @media screen and (max-width: 760px){
             width: 100%;
             font-size: 1rem;
         }
        }
        span{
            font-weight: bold;
        }
    }
`;

const ButtonWrapper = styled(motion.div)`
    a{
        text-decoration: none;
        color: white;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.6rem;
        width: 8.5rem;
        border-radius: 1.2rem;
        border: 1px solid #d0b43f;
        outline: none;
        background-color: #d0b43f;
        color: white;
        font-family: sans-serif;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover{
          background-color: white;
          color: #d0b43f;
          border: 1px solid #d0b43f;
          font-weight: bold;
        }
        @media screen and (max-width: 760px){
            height:25px;
            width: 85px;
            border-radius: 25px;
            font-size: 1.7rem;
        }
    }
`;

export default Compound;
