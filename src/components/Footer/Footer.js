import React from 'react';
import GitHub from '../../images/GitHub_Icon.png';
import LinkedIn from '../../images/LinkedIn_Icon.png';
import Instagram from '../../images/Instagram.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='mt-2 bg-gradient-to-r from-btnColor1 to-btnColor2'>
            <div className='flex justify-center gap-16 p-6'>
                <a href='https://www.linkedin.com/in/antonio-robledo-ysasaga-23a37a1b0/' rel='noopener noreferrer' target='_blank' aria-label='linkedin'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faLinkedin} size='2x' color='#fff'></FontAwesomeIcon>
                </a>
                <a href='https://github.com/AntonioRobledo' rel='noopener noreferrer' target='_blank'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faGithub} size='2x' color='#fff'></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com/arysasaga/' rel='noopener noreferrer' target='_blank'>
                    <FontAwesomeIcon className='hover:scale-105' icon={faInstagram} size='2x' color='#fff'></FontAwesomeIcon>
                </a>
            </div>
        </footer>
    )
}

export default Footer;