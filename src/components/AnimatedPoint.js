import React from 'react';
import {motion} from 'framer-motion';
import {FadePoint} from '../animations';
import point from '../img/point.png'
import pointnew from '../img/pointgreen.png';

const AnimatedPoint = ({pointId}) => {
    return (
        <motion.div 
         variants={FadePoint} 
         initial='hidden' 
         animate='show' 
         exit='exit' 
         className={`point ${'point'}${pointId}`}>
            <motion.img src={pointnew} alt="points"/>
        </motion.div>

    )
}

export default AnimatedPoint;
