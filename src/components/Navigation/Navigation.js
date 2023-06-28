import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navigation.css';
import '@fortawesome/free-brands-svg-icons';

function NavTabs() {
    return (
        <nav className='flex flex-row justify-end'>
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
        </nav>
    )
}



export default NavTabs;