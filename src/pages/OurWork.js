import React from 'react';

// Import Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';

// Styled Components
import styled from 'styled-components';

// Import Router
import { Link } from 'react-router-dom';

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h1>The Athlete</h1>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h1>The Racer</h1>
                <div className="line"></div>
                <Link>
                    <img src={theRacer} alt="The Racer"/>
                </Link>
            </Movie>
            <Movie>
                <h1>Good Times</h1>
                <div className="line"></div>
                <Link>
                    <img src={goodTimes} alt="Good Times"/>
                </Link>
            </Movie>
        </Work>
    );
}

const Work = styled.div`
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