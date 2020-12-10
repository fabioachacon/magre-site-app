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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum numquam nobis quasi veritatis non aperiam incidunt rerum culpa reiciendis tempore, veniam facere ut odio, nam, obcaecati ratione unde. Quam, vitae?
              </div>
          </div>
        </StyledAction>
    )
}

const StyledAction = styled(motion.div)`  
    position: relative;
    min-height: 70vh;
    background: #f6f7f6;
    display: flex;
    align-items: center;
    justify-content: center;
    .man{
        margin-left: 10rem;
        img {
        width: 100%;
    }
    }
    .inside{
        top: 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        overflow-y: scroll;

    }
    .text{
        background: red;
        width: 100%;
        margin-right: 25rem;
    }
    h3{
        margin-top: 5rem;
    }
`;


export default Action;
