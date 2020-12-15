import React from 'react';
import {motion} from 'framer-motion';
import {FadePoint} from '../animations';
import point from '../img/point.png'

const AnimatedPoint = ({info}) => {
    // style={info.active ? {'opacity': '1', 'transition': 'all 0.6s ease-in-out'} : {'opacity': '0'}} 
    return (
        <motion.div 
         variants={FadePoint} 
         initial='hidden' 
         animate='show' 
         exit='exit' 
         className={`point ${'point'}${info.id + 1}`}>
            <motion.img src={point} alt="points"/>
        </motion.div>
     
    )
}

export default AnimatedPoint;
