import React, { useState, useEffect } from "react";
import './NavBar.css';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    // to change burger classes 
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

    const closeMenu = () => {
		setIsOpen(false);
	};

    return(
        <div>
            <nav>
            <Fade top duration={2000}>
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu__links cursor-pointer">
                        <li>
                            <Link to="Skills" onClick={closeMenu}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="Projects" offset={270} onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="About" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="Contact" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`burger_menu ${isOpen ? 'open' : ''}` } onClick={toggleMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                </Fade>
            <div className="socials">
                <Fade top duration={2000}>
                <a href='https://www.linkedin.com/in/antonio-robledo-ysasaga-23a37a1b0/' rel='noopener noreferrer' target='_blank' aria-label='linkedin'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faLinkedin} size='2x' color='#00cdac'></FontAwesomeIcon>
                </a>
                <a href='https://github.com/AntonioRobledo' rel='noopener noreferrer' target='_blank'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faGithub} size='2x' color='#00cdac'></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com/arysasaga/' rel='noopener noreferrer' target='_blank'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faInstagram} size='2x' color='#00cdac'></FontAwesomeIcon>
                </a>
                </Fade>
            </div>

            </nav>

            <div className={menu_class}></div>
            
        </div>
    )
}

export default Navbar