import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div className='App'>
        <Wrapper>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/react-portfolio/home' component={Home} />
          <Route exact path='/react-portfolio/' component={Home} />
          <Route exact path='/portfolio/' component={Portfolio} />
          <Route
            exact
            path='/react-portfolio/portfolio'
            component={Portfolio}
          />

          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
