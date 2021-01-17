import React from 'react';

// Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

// Import Framer Motion
import { motion } from 'framer-motion';

// Import Animations
import { pageAnimation } from '../animations';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;