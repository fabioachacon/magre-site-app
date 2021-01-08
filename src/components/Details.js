import React from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {IoMdClose} from 'react-icons/io';
import {PopUp} from '../animations';

const Details = ({showDetail, setShowDetail}) => {

    const closeHandler = () => {
        setShowDetail(false);
        document.body.style.overflow='auto';
    }

    return (
        <AnimatePresence key='detail-popup' exitBeforeEnter>
          {showDetail && ( 
            <DetailBox
            active={showDetail}
            initial='hidden'
            animate='show'
            exit='exit'
            onClick={closeHandler}
            >
                <Containt variants={PopUp}>
                <Head>
                    <div onClick={closeHandler} className="close-btn">
                        <IoMdClose />
                    </div>
                </Head>
                <TextArea>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dolor ipsam rerum placeat tenetur, id temporibus ad cum delectus error?
                    <br/>
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptas impedit quidem et itaque inventore nesciunt deleniti beatae unde quae, dolorum voluptate expedita repudiandae ea possimus cum commodi tempore veritatis illo sit nihil iure eius maiores ipsam? Rerum temporibus veritatis nemo, ut, minima asperiores earum numquam velit id neque doloremque.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit a, similique veniam tempora fugiat in illo distinctio doloremque saepe molestiae autem beatae nam? Assumenda perferendis, est perspiciatis odio voluptatum beatae eius eligendi deserunt! Optio temporibus libero sit labore, accusantium laboriosam non voluptatem provident, odit explicabo officiis iste alias cupiditate maiores iure aspernatur odio perferendis? Nam impedit rerum labore tempora rem ipsa doloremque alias, obcaecati quibusdam ea officia reiciendis unde iste doloribus perspiciatis explicabo minus blanditiis dolorem quis nulla omnis eligendi. Expedita dolore vel amet quis neque eos doloribus facere, sequi ullam. Optio suscipit eius facilis nesciunt odio mollitia autem!
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tempore autem odit et. Eligendi voluptatem fugiat natus dolore illum placeat reiciendis commodi dolorem quidem atque possimus vitae officia quis debitis architecto qui consequuntur dicta eaque labore id autem, maiores rerum! Ipsum corrupti facilis nemo ex vitae maxime quibusdam iste dolorum at illum et fugit est nostrum cupiditate dolores, dolore id similique esse. Sit, vero earum animi repellat dicta temporibus laborum reprehenderit, illo repellendus nostrum corrupti consequuntur beatae. Veritatis accusantium, asperiores perferendis possimus expedita dolores, inventore accusamus sunt perspiciatis eum sed repellat ducimus non corporis assumenda repudiandae et temporibus. Aliquam, porro, modi assumenda laborum dolorum unde perspiciatis sint animi autem officiis necessitatibus cupiditate ex deserunt? Dolorem debitis inventore, ducimus, ab rem illum vel dolore repudiandae fuga, ullam iusto. Deleniti quaerat iusto aut quis dolorem optio quo, dicta autem eveniet tempore. Laborum hic ipsa vero repudiandae eius quas numquam recusandae minus laboriosam odio officia sit tenetur assumenda quibusdam magnam consequuntur totam, doloremque voluptatum ea cumque qui voluptatem nesciunt. Magnam tenetur, maiores minus praesentium velit magni tempora dignissimos sint, necessitatibus, voluptates ratione incidunt explicabo architecto iusto ullam. Officiis doloremque pariatur deserunt aut dolorem necessitatibus. Cupiditate ut dolor, dignissimos placeat iste omnis unde, et tempora illo iusto necessitatibus enim officia pariatur, laudantium in quibusdam non suscipit. Aut, quidem vel? Quae, reprehenderit iusto iste ducimus ex excepturi at placeat aliquid minus non, eos quo perferendis quisquam esse nihil voluptates recusandae cum odio quibusdam dolores libero? Sint maxime ullam sapiente exercitationem odio voluptatum praesentium distinctio adipisci. Quo blanditiis tempore animi obcaecati quia qui, hic optio rem. Cumque, enim eveniet pariatur asperiores magnam debitis iste et quia quas voluptatem optio doloribus reprehenderit fugiat voluptatibus, aliquid molestias! Accusantium iste sit recusandae distinctio ipsum quo, reiciendis excepturi. Ad, incidunt? Vero temporibus minus nostrum voluptate alias maxime. Excepturi, dolorum iure.
                </TextArea>
                </Containt>
            </DetailBox>)}
        </AnimatePresence>
        
    )
}

const DetailBox = styled(motion.div)`
    height: 100vh;
    width: 100%;
    position: fixed;
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
`;

const Containt = styled(motion.div)`
   background: #FFF;
   width: 50rem;
   height: 32rem;
   margin-top: 6rem;
   display: none;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   overflow: hidden;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
`;

const TextArea = styled(motion.div)`
     flex: 1;
     padding: 4rem;
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
