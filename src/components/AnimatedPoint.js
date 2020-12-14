import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import {Fade, FadePoint} from '../animations';

import point from '../img/point.png'

const AnimatedPoint = ({info}) => {
    return (
        <AnimatePresence>
            <motion.div  style={info.active ? {'opacity': '1', 'transition': 'all 0.6s ease-in-out'} : {'opacity': '0'}} className='point'>
                <motion.img variants={FadePoint} src={point} alt=""/>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedPoint;
