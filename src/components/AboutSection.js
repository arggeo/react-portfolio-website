import React from 'react';

// Import Images
import home1 from '../img/home1.png';

// Styled Components
import { About, Description, Image, Hide } from '../styles';

// Import Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {

    // Framer Motion Variants

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas you have. We employ professionas with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
}

// Styled Components



export default AboutSection;