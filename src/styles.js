// Styled Components
import styled from 'styled-components';

// Framer Motion
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
  z-index: 2;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;