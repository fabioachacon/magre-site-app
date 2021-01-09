import React from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {IoMdClose} from 'react-icons/io';
import {PopUp, Fade} from '../animations';

const Details = ({showDetail, setShowDetail}) => {

    const closeHandler = () => {
        setShowDetail(false);
        document.body.style.overflow='auto';
    }

    const outerCloseHandler = (e) => {
        if (e.target.classList.contains('shadow'))
            closeHandler(); 
    }
    
  
    return (
        <AnimatePresence key='detail-popup'>
          {showDetail && ( 
            <DetailBox
             className="shadow"
             onClick={outerCloseHandler}
             active={showDetail}
             variants={Fade}
             initial='hidden'
             animate='show'
             exit='exit'>
                <Content variants={PopUp}>
                <Head>
                  <div onClick={closeHandler} className="close-btn">
                    <IoMdClose />
                  </div>
                </Head>
                <TextArea>
                    O Magre Caps tem em sua composição, o extrato de  sene, qual ajuda a acelerar o emagrecimento. O sene, traz inúmeros benefícios a flora intestinal, otimizando seu funcionamento. O corpo passa pelo processo de desinchar. Sene é ótima também por ser um verdadeiro antioxidante natural.
                    <br/>
                    <br/>
                    O papel dos antioxidantes é proteger as células sadias do organismo contra a ação oxidante dos radicais livres. Tem propriedades anti-inflamatórias.
                    <br/>
                    <br/>
                    O Magre Caps tem como um dos seu principais ativos o Picolinato de cromo que é um suplemento alimentar e termogênico. O Magre Caps atuará como um inibidor de apetite, permitindo que você acelere de forma praticamente natural o seu metabolismo. O cromo atua no metabolismo dos carboidratos incitando a captação da glicose no seu corpo.
                    <br/>
                    <br/>
                    O picolinato de cromo existe naturalmente no nosso corpo, em órgãos como o baço, os rins e o coração. Sua principal função é a de potencializar a ação e o efeito da insulina. Dessa forma, compreendemos que ele é muito importante no metabolismo da glicose, e então ele encontra os lipídios, aumentando a quantidade de HDL (colesterol bom) no corpo, da mesma forma que diminui o LDL (colesterol ruim).
                    <br/>
                    <br/>
                    O picolinato de cromo é um composto orgânico utilizado como suplemento nutricional, que oferece diversos benefícios ao corpo. O cromo aumenta a sensibilidade à insulina, fato que o torna importante para aqueles que sofrem especialmente de diabetes tipo 2, por exemplo, além de aumentar a energia do corpo, fazendo com que a gordura se transforme em massa muscular. É um dos melhores nutrientes para os praticantes de atividade física, o que o torna um grande aliado na dieta daqueles que possuem uma rotina ativa e saudável.
                    <br/>
                    <br/>
                    Além disso, o picolinato de cromo também aumenta a sensibilidade dos músculos em relação à insulina, o que auxilia na regulação dos níveis glicêmicos. Sendo assim, é causado um efeito chamado de termogênico, que ajuda na hora de aumentar a massa muscular, assim como diminui a massa gorda, em conjunto com treinos e alimentação saudável.
                </TextArea>
                </Content>
            </DetailBox>)}
        </AnimatePresence>
        
    )
}

const DetailBox = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 999;
    background: ${props => props.active ? 'rgba(0, 0, 0, 0.4)' : ''};
    @media screen and (max-width: 760px){
        align-items: center;
    }
`;

const Content = styled(motion.div)`
   background: #FFF;
   width: 50rem;
   height: 32rem;
   display: none;
   margin-bottom: 1rem;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   overflow: hidden;
   @media screen and (max-width: 760px){
       height: 50%;
       width: 80%;
   }
`;

const Head = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    padding: 0 1rem;
    .close-btn{
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: gray;
        cursor: pointer;
        border-radius: 50%;
        transition: background 0.3s ease-in-out;
        &:hover{
            background: rgba(0, 0, 0, 0.2);
        }
        @media screen and (max-width: 760px){
            height: 5rem;
            width: 5rem;
            font-size: 2.5rem;
       }
    }
    @media screen and (max-width: 760px){
        height: 4rem;
    }
`;

const TextArea = styled(motion.div)`
     flex: 1;
     padding: 6rem;
     padding-top: 2rem;
     padding-bottom: 0.5rem;
     text-align: justify;
     overflow-y: scroll;
     font-family: "Montserrat", sans-serif;
     font-size: 0.9rem;
     color: rgba(5, 69, 7, 255);
     &::-webkit-scrollbar{
       width: 0.3rem;
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
    @media screen and (max-width: 760px){
        font-size: 1.1rem;
    }
`;

export default Details;
