import React from 'react';

// Styled Components
import GlobalStyle from './components/GlobalStyle';

// Import Pages
import AboutUs from './pages/AboutUs';

// Import Components
import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
