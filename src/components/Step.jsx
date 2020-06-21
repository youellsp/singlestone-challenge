import React from 'react';
import { motion } from 'framer-motion';
import '../styles/step.css'

const stepVariants = {
    visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.5,
        },
    }),
    hidden: {
        opacity: 0,
        x: -300
    }
}
const Step = ({ index, id, number, name, description }) => {
    return (
        <motion.article
            key={id}
            variants={stepVariants}
            initial='hidden'
            animate='visible'
            custom={index}
            className='step'
            whileHover={{ scale: 1.05 }}>
            <h1 className='number'>
                {number}
            </h1>
            <hr />
            <h6 className='name'>
                {name}
            </h6>
            <p className='description'>
                {description}
            </p>
        </motion.article>
    );
}

export default Step;