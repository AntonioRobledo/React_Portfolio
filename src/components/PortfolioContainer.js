/* import React from 'react';
import {useState} from 'react';
import Navtabs from './Navigation/Navigation';
import Footer from './Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of 'currentPage' is and depending on the value, 
  // will return the corrresponding component to render
const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />
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
 */