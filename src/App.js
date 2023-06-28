import React, {useState} from 'react';
import NavTabs from './components/Navigation/Navigation';
import Footer from './components/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume';


export default function App() {
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
        <NavTabs />
        {renderPage()}
        <Footer />
      </div>
    );
};


