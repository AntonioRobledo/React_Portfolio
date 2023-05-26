import React from 'react';
import {useState} from 'react';
import Navtabs from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of 'currentPage' is and depending on the value, 
  // will return the corrresponding component to render
const renderPage = () => {
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Projects') {
    return <Projects />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }
};

const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Navtabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    );
};
