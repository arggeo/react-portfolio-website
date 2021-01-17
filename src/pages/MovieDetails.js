import React, { useState, useEffect } from 'react';

// Styled Components
import styled from 'styled-components';

// Import Router
import { useHistory } from 'react-router-dom';

// Import Movies
import { MovieState } from '../movieState';

// Import Framer Motion
import { motion } from 'framer-motion';

// Import Animations
import { pageAnimation } from '../animations';

const MovieDetails = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // useEffect
    useEffect(() => {
        const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title} />
                    </Headline>
                    <Awards>
                        {movie.awards.map(award => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
}

const Award = ({ title, description }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
}

const Details = styled(motion.div)`
  color: #fff;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: center bottom;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const StyledAward = styled.div`
  padding: 5rem;
  
  h3 {
    font-size: 2rem;
  }
  
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetails;