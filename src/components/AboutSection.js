import React from 'react';

// Import Images
import home1 from '../img/home1.png';

// Styled Components
import { About, Description, Image, Hide } from '../styles';

// Import Framer Motion
import { motion } from 'framer-motion';

// Import Animations
import { titleAnimation, fadeAnimation, photoAnimation } from '../animations';

// Import Components
import Wave from './Wave';

const AboutSection = () => {

    // Framer Motion Variants

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnimation}>Contact us for any photography or videography ideas you have. We employ professionas with amazing skills.</motion.p>
                <motion.button variants={fadeAnimation}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    );
}

// Styled Components



export default AboutSection;