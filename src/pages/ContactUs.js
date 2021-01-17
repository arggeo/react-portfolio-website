import React from 'react';

// Import Framer Motion
import { motion } from 'framer-motion';

// Import Animations
import { pageAnimation } from '../animations';

const ContactUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}>
            <h1>Contact Us</h1>
        </motion.div>
    );
}

export default ContactUs;