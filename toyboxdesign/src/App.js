import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

          <Route exact path="/" component= {Home} />

        <Footer />
      </div>
    </Router>


  );
}

export default App;
