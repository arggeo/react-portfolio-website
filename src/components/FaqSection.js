import React from 'react';

// Styled Components
import styled from 'styled-components';
import { About } from '../styles';

// Components
import Toggle from './Toggle';

// Framer Motion
import { AnimateSharedLayout } from 'framer-motion';

// Animations
import { scrollReveal } from '../animations';

// useScroll
import { useScroll } from './useScroll';

const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <Faq variants={scrollReveal} animate={controls} ref={element}>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum dolor nulla. Curabitur lectus purus.</p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum dolor nulla. Curabitur lectus purus.</p>
                    </div>
                </Toggle>
                <Toggle title="Payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum dolor nulla. Curabitur lectus purus.</p>
                    </div>
                </Toggle>
                <Toggle title="What services do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum dolor nulla. Curabitur lectus purus.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
  display: block;
  
  span {
    display: block;
  }
  
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  
  .answer {
    padding: 2rem 0;
    
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;