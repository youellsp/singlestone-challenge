import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/jumbotron.css';
import CustomButton from './CustomButton';

const spring = {
    type: "spring",
    damping: 50,
    stiffness: 100,
    duration: 1
}

const Jumbotron = () => (
    <section>
        <AnimatePresence>
            <motion.div
                transition={spring}
                initial={{ zIndex: -100, opacity: 0 }}
                animate={{ zIndex: 1, opacity: 1 }}
                exit={{ zIndex: -100, opacity: 0 }}
                className='container'>
                <h4 className='title'>New Games & Accessories</h4>
                <h1 className='strong'>Monthly packages. <br />Excitement delivered daily.</h1>
                <p className='message'>What’s the best way to shop for the latest video games and peripherals?
                    How about never shopping at all? You’ll get new stuff on your doorstep — every month.
                </p>
                <CustomButton className='get-started' label='Get Started' />
            </motion.div>
        </AnimatePresence>
    </section>
);

export default Jumbotron;



