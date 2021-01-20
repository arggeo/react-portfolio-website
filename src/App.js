import React from 'react';

// Styled Components
import GlobalStyle from './components/GlobalStyle';

// Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetails from './pages/MovieDetails';

// Components
import Nav from './components/Nav';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Framer Motion
import { AnimatePresence } from 'framer-motion';

// ScrollTop
import ScrollTop from './components/ScrollTop';

function App() {

    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <ScrollTop />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetails />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
