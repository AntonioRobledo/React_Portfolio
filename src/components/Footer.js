import React from 'react';
import GitHub from '../images/GitHub_Icon.png';
import LinkedIn from '../images/LinkedIn_Icon.png';
import Instagram from '../images/Instagram.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='mt-2 bg-gradient-to-r from-btnColor1 to-btnColor2'>
            <div className='flex justify-center gap-6 p-6'>
                <a href='https://github.com/AntonioRobledo' target='_blank'  rel="noreferrer">
                    <img src={GitHub} alt='GitHub' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
                <a href='https://www.linkedin.com/in/antonio-robledo-ysasaga-23a37a1b0/' target='_blank'  rel="noreferrer">
                    <img src={LinkedIn} alt='LinkedIn' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
                <a href='https://www.instagram.com/arysasaga/' target='_blank'  rel="noreferrer">
                    <img src={Instagram} alt='Instagram' className='rounded-full w-14 hover:opacity-60'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;