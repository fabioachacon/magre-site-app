import React from 'react';
import styled from 'styled-components';

const Benefits = () => {
    
    const scrollHandlerRight = (e) => {
      const element = e.target;
      const elementClasses = element.classList;
      if(elementClasses.contains('scrollable') && elementClasses.contains('right-box')){
         const leftBox = document.querySelector('.left-box');
         leftBox.scrollTop = element.scrollTop;
      }
   }

   const scrollHandlerLeft = (e) => {
      const element = e.target;
      if(element.classList.contains('scrollable')){
         const rightBox = document.querySelector('.right-box');
         rightBox.scrollTop = element.scrollTop;
      }
   }

   const toggleHandler = (e) => {
      const element = e.target.parentNode;
      if (element.classList.contains('right-box')){
         element.classList.toggle('scrollable');
      }else if(element.classList.contains('left-box')){
         element.classList.toggle('scrollable');
      }
   }


   return (
        <StyledSection id='benefits'>
          <Title>
             <Text>
                <h2>benefícios do magre caps</h2>
             </Text>
          </Title>
          <CenterBox>
            <BoxLeft onMouseOver={toggleHandler} onMouseLeave={toggleHandler} onScroll={scrollHandlerLeft} className='left-box'>
               <p>Ajudar a regular o açúcar no sangue, já que aumenta a sensibilidade à insulina, um hormônio responsável pelo controle da glicose no sangue, e, por isso, poderia ter benefícios para as pessoas que possuem diabetes e resistência à insulina;
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               Manter a saúde do coração, já que foi demonstrado em alguns estudos, que o picolinato de cromo ajuda a regular os níveis de colesterol e triglicerídeos, diminuindo o risco de formação das placas ateromatosas e, consequentemente, o risco de desenvolver doenças cardíacas, principalmente em pessoas diabéticas. Apesar disso, esse mecanismo ainda não está totalmente claro;
              </p>
            </BoxLeft>
            <BoxRight onMouseOver={toggleHandler} onMouseLeave={toggleHandler} onScroll={scrollHandlerRight} className='right-box' >
                <p>Favorecer a perda de peso, já que pode também interferir no metabolismo dos carboidratos, gorduras e proteínas. No entanto, os resultados sobre esse benefício ainda não são conclusivos, já que indicam que a perda de peso não foi significativa</p>
            </BoxRight>
          </CenterBox>
        </StyledSection>
    )
}

const StyledSection = styled.div`
   height: 95vh;
   max-height: 40rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;
   background: #FFFF;
`;

const CenterBox = styled.div`
   height: 80%;
   width: 70%;
   max-width: 80rem;
   max-height: 25rem;
   display: flex;
   margin-bottom: 1rem;
   p{
     font-size: 0.9rem;
     font-family: "Montserrat", sans-serif;
     color: rgba(5, 69, 7, 255);
     @media screen and (max-width: 760px){
       font-size: 1.6rem;
   }
   }
   @media screen and (max-width: 760px){
      height: 70%;
      width: 85%;
   }
`;

const BoxLeft = styled.div`
    height: 100%;
    width: 50%;
    overflow-y: scroll;
    padding-right: 0.7rem;
    text-align: justify;
    &::-webkit-scrollbar{
       width: 0.3rem;
       display: block;
    
    }
    &::-webkit-scrollbar-thumb{
      background-color: #d0b43f;
      height: 6px;
      width: 6px;  
    }
    &::-webkit-scrollbar-track{
      width: 0.2rem;
      background-color: #e2e2e2;
    }
    h2{
        font-family: "Montserrat", sans-serif;
    }
`;

const BoxRight = styled.div`
   overflow-y: scroll;
   direction: rtl;
   text-align: left;
   height: 100%;
   width: 50%;
   padding-left: .5rem;
   &::-webkit-scrollbar{
       width: 0.3rem;
       display: none;
  
    }
    &::-webkit-scrollbar-thumb{
      background-color: #d0b43f;
      height: 6px;
      width: 6px;  
    }
    &::-webkit-scrollbar-track{
      width: 0.2rem;
      background-color: #e2e2e2;
    }
    p{
       color:#d0b43f;
    }
`;

const Title = styled.div`
   height: 4rem;
   width: 100%;
   display: flex;
   justify-content: center;
   padding-bottom: 2rem;
`;

const Text = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    color: #415740;
    text-transform: uppercase;
    font-size: 0.8rem;
`;

export default Benefits;
