import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Articles = () => {
    return (
        <StyledArticles id='articles'>
            <div className="circles">
                <div className="circles-text">
                   <OutSide> 
                     <Inside>
                      <p>28</p>
                      <p>Nov</p>
                     </Inside>
                    </OutSide>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem, ipsum dolor.</p>
                    </div>
                 </div>
                 <div className="circles-text">
                   <OutSide> 
                     <Inside>
                      <p>28</p>
                      <p>Nov</p>
                     </Inside>
                    </OutSide>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem, ipsum dolor.</p>
                    </div>
                 </div>
                 <div className="circles-text">
                   <OutSide> 
                     <Inside>
                      <p>28</p>
                      <p>Nov</p>
                     </Inside>
                    </OutSide>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem, ipsum dolor.</p>
                    </div>
                 </div>
            </div>
            <div className="video">

            </div>
        </StyledArticles>
    )
}

const StyledArticles = styled(motion.div)`
    height: 80vh;
    background: white;
    .circles{
        background:red;
        width: 30%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around; 
    }
    .circles-text{
        display: flex;
        align-items: center;
    }
    .text{
        margin-left: 10px;
    }
    p{
        color: white;
        font-size: 1rem;
    }
`;


const Video = styled(motion.div)`
   
`;

const OutSide = styled(motion.div)`
    padding: 10px 40px;
    width: 50px;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Inside = styled(motion.div)`
      display: flex;
      flex-direction: column;
      background: black;
      justify-content: center;
      align-items: center;
      width: 100px;
      border-radius: 50%;
      padding: 10px 15px;
`;

export default Articles;

