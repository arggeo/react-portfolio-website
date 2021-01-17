import React from 'react';

// Import Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';

// Styled Components
import styled from 'styled-components';

// Import Router
import { Link } from 'react-router-dom';

// Import Framer Motion
import { motion } from 'framer-motion';

// Import Animations
import { pageAnimation } from '../animations';

const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: '#fff' }}>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theRacer} alt="The Racer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodTimes} alt="Good Times"/>
                </Link>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;