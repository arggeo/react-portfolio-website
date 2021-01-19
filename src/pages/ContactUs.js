import React from 'react';

// Styled Components
import styled from 'styled-components';

//Framer Motion
import { motion } from 'framer-motion';

// Animations
import { pageAnimation, titleAnimation } from '../animations';

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send An Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Socal Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #1b1b1b;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  
  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;