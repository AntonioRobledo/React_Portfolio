import React, {useState, useEffect} from 'react';
import './ScrollUp.css';

export default function ScrollUpButton() {

    // Scroll Up Button logic 
    const [isVisible, setIsVisible] = useState(false);

    // Listens for scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // When the page is past a certain point, setIsVisible is set to true
    const handleScroll = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    return (
        <button
            className={`scrollUpButton ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}>
                🔝
        </button>
    );
}