import './App.css';
import React, {useState} from 'react';
import {  BrowserRouter as Router } from "react-router-dom";
import NavTabs from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume';
import Navbar from './components/NavBar';

function App() {

    return (
      <div className='App'>
        <Router>
        <Navbar />
        <NavTabs />
        <Home />
        <Footer />
        </Router>
      </div>
    );
};

export default App;
