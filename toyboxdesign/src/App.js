import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

          <Route exact path="/" component= {Home} />
          <Route exact path="/About" component= {About} />
          <Route exact path="/Projects" component= {Projects} />
          <Route exact path="/Contact" component= {Contact} />

        <Footer />
      </div>
    </Router>


  );
}

export default App;
