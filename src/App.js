import React from 'react';

// Styled Components
import GlobalStyle from './components/GlobalStyle';

// Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetails from './pages/MovieDetails';

// Import Components
import Nav from './components/Nav';

// Import Router
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
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
        </div>
    );
}

export default App;
