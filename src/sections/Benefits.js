import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Benefits = () => {

   const [scrollAmount, setScrollAmount] = useState(0);

   const scrollHandler = (e) => {
      const element = e.target;
      if (element.classList.contains('right-box') || element.classList.contains('left-box')){
         setScrollAmount(element.scrollTop);
      }
   }

   useEffect(() => {
       const rightBox = document.querySelector('.right-box') || document.querySelector('.left-box') ;
       rightBox.scrollTop = scrollAmount;
   }, [scrollAmount])
    
   //  const scrollHandlerRight = (e) => {
   //    const element = e.target;
   //    const elementClasses = element.classList;
   //    if(elementClasses.contains('scrollable') && elementClasses.contains('right-box')){
   //       const leftBox = document.querySelector('.left-box');
   //       leftBox.scrollTop = element.scrollTop;
   //    }
   // }

   // const scrollHandlerLeft = (e) => {
   //    const element = e.target;
   //    const elementClasses = element.classList;
   //    if(elementClasses.contains('scrollable') && elementClasses.contains('left-box')){
   //       const rightBox = document.querySelector('.right-box');
   //       rightBox.scrollTop = element.scrollTop;
   //    }
   // }

   // const toggleHandler = (e) => {
   //    const element = e.target.parentNode;
   //    if (element.classList.contains('right-box')){
   //       element.classList.toggle('scrollable');
   //    }else if(element.classList.contains('left-box')){
   //       element.classList.toggle('scrollable');
   //    }
   // }


   return (
        <StyledSection id='benefits'>
          <Title>
             <Text>
                <h2>benefícios do magre caps</h2>
             </Text>
          </Title>
          <CenterBox>
            <BoxLeft 
            onScroll={scrollHandler} 
            className='left-box'>
               <p>Aumento da energia do corpo</p>
               <br/>
               <br/>
               <p>Acelera o metabolismo</p>
               <br/>
               <br/>
               <p>Inibe o apetite</p>
               <br/>
               <br/>
               <p>Acelera a queima de gordura</p>
               <br/>
               <br/>
               <p>Regula o intestino</p>
               <br/>
               <br/>
               <p>Controle da glicose</p>
               <br/>
               <br/>
               <p>Redução de gordura corporal</p>
               <br/>
               <br/>
               <p>Redução do risco de osteoporose</p>
               <br/>
               <br/>
               <p>Auxílio na produção de proteínas e ajuda aos aminoácidos que aumentam a síntese proteica</p>
               <br/>
               <br/>
               <p></p>
            </BoxLeft>
            <BoxRight 
            onScroll={scrollHandler} 
            className='right-box' >
                <p>Aumento de massa muscular</p>
                <br/>
                <br/>
                <p>Efeito Detox</p>
                <br/>
                <br/>
                <p>Reduz gordura abdominal</p>
                <br/>
                <br/>
                <p>Diminui retenção líquida</p>
                <br/>
                <br/>
                <p>Sensação de saciedade.</p>
                <br/>
                <br/>
                <p>Redução dos níveis de LDL (colesterol ruim)</p>
                <br/>
                <br/>
                <p>Redução do risco de doenças cardiovasculares</p>
                <br/>
                <br/>
                <p>Elevação dos níveis de HDL (colesterol bom)</p>
                <br/>
                <br/>
                <p></p>
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
     font-size: 1rem;
     letter-spacing: 0.5px;
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
    text-align: center;
    &::-webkit-scrollbar{
       width: 0.5rem;
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
   text-align: center;
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
