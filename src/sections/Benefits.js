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
               <p>Ajudar a regular o açúcar no sangue, já que aumenta a sensibilidade à insulina, um hormônio responsável pelo controle da glicose no sangue, e, por isso, poderia ter benefícios para as pessoas que possuem diabetes e resistência à insulina</p>
               <br/>
               <br/>
               <p>
               Manter a saúde do coração, já que foi demonstrado em alguns estudos, que o picolinato de cromo ajuda a regular os níveis de colesterol e triglicerídeos, diminuindo o risco de formação das placas ateromatosas e, consequentemente, o risco de desenvolver doenças cardíacas, principalmente em pessoas diabéticas. Apesar disso, esse mecanismo ainda não está totalmente claro
              </p>
              <br/>
              <br/>
              <p>O picolinato de cromo pode ter muitos resultados benéficos quando suplementado. Realça o efeito da insulina no corpo, melhorando o recebimento da glicose, desse modo causando uma melhor circulação do sangue e manutenção dos níveis de açúcar no sangue</p>
              <br/>
              <br/>
              <p>Cassia Angustifolia é constituído por extrato seco de Sene (Cassia Angustifolia), o qual tem como constituintes predominantes os glicosídeos hidroxiantracênicos, calculados como senosídeo B. O Sene tem um efeito laxativo (atividade catártica), devido à ação dos senosídeos e seus metabólitos ativos no cólon</p>
            </BoxLeft>
            <BoxRight 
            onScroll={scrollHandler} 
            className='right-box' >
                <p>Favorecer a perda de peso, já que pode também interferir no metabolismo dos carboidratos, gorduras e proteínas. No entanto, os resultados sobre esse benefício ainda não são conclusivos, já que indicam que a perda de peso não foi significativa.</p>
                <br/>
                <br/>
                <p>Estudos demonstraram uma redução da gordura corporal com concomitante aumento da massa muscular em indivíduos tratados com picolinato de cromo. Picolinato de cromo é um suplemento dietético que pode ser útil em inibir o apetite. Adicionalmente, tem demonstrado um crescimento no músculo e ajuste da gordura simultaneamente.</p>
                <br/>
                <br/>
                <p>Picolinato de cromo tem uma eficiência de absorção até 10 vezes superior ao cromo encontrado naturalmente em dietas ou sais inorgânicos de cromo. No primeiro estudo nutricional divulgado em 1989, voluntários que tomaram 200 microgramas/dia de cromo na forma de picolinato mostraram diminuição nos níveis totais de colesterol e LDL colestero.</p>
                <br/>
                <br/>
                <p>Picolinato de cromo é conhecido como a melhor fonte de cromo. O cromo é um mineral que é essencial para a produção de insulina do corpo. Pesquisas mostram que o cromo é uma parte essencial de nossa dieta. </p>
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
