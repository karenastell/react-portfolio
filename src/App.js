import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
