import React, { useState, useEffect } from "react";
import './NavBar.css';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    // to change burger classes 
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu 
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }   

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

    const closeMenu = () => {
		setIsOpen(false);
	};

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile-menu__links cursor-pointer">
                        <li>
                            <Link to="Skills" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="Projects" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="About" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="Contact" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>
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
            </nav>

            <div className={menu_class}></div>

            
        </div>
    )
}

export default Navbar