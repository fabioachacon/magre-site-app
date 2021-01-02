import React from 'react';
import styled from 'styled-components';

const Benefits = () => {

    const scrollHandlerRight = (e) => {
        const leftBox = document.querySelector('.left-box');
        leftBox.scrollTop = e.target.scrollTop;
    }
    
    const scrollHandlerLeft = (e) => {
      const rightBox = document.querySelector('.right-box');
      rightBox.scrollTop = e.target.scrollTop;
    }

    return (
        <StyledSection id='benefits'>
          <Title>
             <Text>
                <h2>benefícios do magre caps</h2>
             </Text>
          </Title>
          <CenterBox>
            <BoxLeft onScroll={scrollHandlerLeft} className='left-box'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad quidem natus distinctio quas esse, qui nesciunt culpa inventore alias modi magnam ipsam quisquam illo sunt possimus minima necessitatibus quam ea vel voluptatibus odio dolor. Sapiente adipisci vero consequatur fugit numquam a similique odit assumenda dolores quas
               <br/>
               <br/>
               nemo veritatis recusandae et, iusto consectetur impedit? Laborum quibusdam exercitationem nam error voluptatem, vel reiciendis ut facilis veritatis voluptate blanditiis pariatur, laboriosam ex nemo eveniet voluptatibus aliquid, ipsa similique alias! Sequi, atque. Eos laborum voluptates pariatur molestiae iste veniam praesentium ratione consectetur, cupiditate vitae, numquam voluptatibus obcaecati temporibus veritatis inventore error 
               <br/>
               <br/>
               similique commodi voluptas reiciendis nisi, minima adipisci? Vitae ut debitis quaerat ab animi maxime doloremque deleniti culpa voluptate laboriosam explicabo dolores veniam dolor neque eos, dolorum quisquam nemo modi reprehenderit nulla. Quaerat iure odio inventore deleniti harum facere quasi voluptate iste libero numquam quibusdam, tempora, error animi tempore autem esse laboriosam placeat, ex vitae et deserunt blanditiis corporis minima repellendus. Hic quam adipisci illo eum doloribus magnam accusantium facere odio sunt unde minus
               <br/>
               <br/> 
               ipsum placeat blanditiis, temporibus enim, dolor commodi! Deleniti sequi ipsa amet quia perferendis modi cumque alias dicta, quam facere reprehenderit rerum non itaque perspiciatis voluptas ducimus adipisci! Voluptatum, hic!</p>
            </BoxLeft>
            <BoxRight className='right-box' >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt minus aspernatur cupiditate vero explicabo eaque blanditiis aperiam consequatur, a, ipsam magni similique pariatur officiis repellat, expedita sequi magnam iste ducimus? Itaque deleniti id ex eos omnis
                <br/>
                <br/>
                reprehenderit cum excepturi, ratione officiis ad aut, quaerat aspernatur voluptates quibusdam nihil provident debitis ut minima amet necessitatibus ipsam eum accusantium. Similique ullam rem ducimus minima possimus qui alias quae soluta obcaecati minus, odio ea consectetur
                <br/>
                <br/>
                numquam error neque laboriosam commodi fuga. Adipisci veritatis placeat voluptates cumque, enim nostrum quibusdam sequi similique quod facere earum assumenda praesentium fugiat harum amet fugit dolor alias distinctio libero eligendi dignissimos doloremque aut obcaecati. Autem sint assumenda, odio reprehenderit nemo, numquam qui asperiores officiis possimus ex sunt quos voluptatibus aliquam impedit, doloremque 
                <br/>
                <br/>
                nihil. Non quidem libero eligendi rem quaerat, a at deleniti error quod nam odio, odit quae ipsa esse. Ullam doloremque excepturi ea? Rerum qui magnam natus eum. Doloremque delectus, nostrum nemo, eos alias voluptas blanditiis laudantium esse atque deserunt aperiam cupiditate dolor soluta facilis reiciendis! Quaerat ipsam debitis iste. Porro, natus facere sint consequuntur quaerat quos cumque repellat accusantium reiciendis dolorem magnam possimus aliquam facilis quasi ipsa? Vel, maiores? Atque dolor perferendis amet ratione soluta.</p>
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
   justify-content: flex-end;
   position: relative;
`;

const CenterBox = styled.div`
   height: 80%;
   width: 70%;
   max-width: 80rem;
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
       width: 0.4rem;
    
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
`;

const Title = styled.div`
   height: 4rem;
   width: 100%;
   display: flex;
   justify-content: center;
   padding-bottom: 4rem;
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
