import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import man from '../img/man.png'

const Action = () => {
    return (
        <StyledAction>
          <div className="man">
             <h3>ATUAÇÃO</h3>
             <img src={man} alt=""/>
          </div>
          <div className="text">
              <div className="inside">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam repellat quas, deleniti accusantium qui eius cupiditate repudiandae? Ipsum vero necessitatibus magnam possimus nemo, sed non omnis earum exercitationem accusamus deleniti cupiditate eos laudantium dicta sapiente ut beatae quis et dolorum soluta nisi ducimus. Recusandae, dolores? Voluptatem quam, modi, in incidunt laborum, impedit architecto numquam expedita officia neque optio magnam consequuntur natus et. Accusamus ipsum ea hic commodi harum earum culpa consequatur! Vero enim magnam tempore, quidem voluptatem odit porro libero molestias non ducimus! Totam ratione consequuntur beatae repellendus illum iusto aspernatur magnam eveniet natus, quisquam assumenda rerum aliquid earum voluptates, debitis nam possimus delectus doloremque nobis unde cumque? Error molestias quas, nulla totam impedit quos. Molestias illum amet molestiae provident nostrum debitis repellat neque expedita quasi repellendus! Neque voluptates, amet fugiat vitae harum sit nulla esse perspiciatis voluptate fugit asperiores praesentium quae tenetur accusamus maiores culpa nihil autem repellat nostrum commodi laboriosam vero non nisi facilis. Odio eum, quos quasi laborum sed dicta quibusdam ratione suscipit neque enim nemo, harum pariatur? Veniam quo quas explicabo suscipit pariatur consequatur, mollitia architecto, sit ad esse dolorum odio soluta ipsam in dolore blanditiis odit adipisci ex. Consectetur voluptate laudantium nemo tempora unde.
              </div>
              <Dots>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
              </Dots>
          </div>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`  
    position: relative;
    margin-top: -10px;
    height: 80vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .man{
        margin-right: 1rem;
        min-width: 500px;
        min-height: 300px;
        height: 500px;
        justify-content: flex-end;
        display: flex;
        img {
        width: 500px;
        height: 100%;
      } 
    }
    .inside{
        overflow-y: scroll;
        height: 300px;
        width: 300px;
        padding-right: 1rem;

    &::-webkit-scrollbar{
       width: 0.1rem;
     }
    &::-webkit-scrollbar-thumb{
      background-color: #415740;
      height: 5px;
      
    }
    &::-webkit-scrollbar-track{
      background-color: white;
      width: 0.1rem;
    }
 }
    .text{
        height: 300px;
        margin-right: 18rem;
        text-align: right;
        font-size: 0.6rem;
        color: gray;
        display: flex;
        flex-direction: column;
        align-items:center;

        font-family: 'Montserrat', sans-serif;
    }
    h3{
        margin-top: 3rem;
        position: relative;
        left: 100px;
        color: rgb(65, 87, 64);
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }
`;


const Dots = styled(motion.div)`
   display: flex;
   width: 100%;
   justify-content: center;
   margin-top: 2rem;
`;

const Dot = styled(motion.div)`
    border-radius: 50%;
    border: 1.5px solid gray;
    width: 0.5rem;
    height: 0.5rem;
    background: white;
    margin-left: 0.7rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
    &:hover{
        background: gray;
    }
`;


export default Action;
